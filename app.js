// ── Splinter 4x4 Build Board — shared logic + data layer ────────────────────

const STAGES=[
["booked","Vehicle booked in",0,"Your build is booked in and on our schedule."],
["dropped_off","Vehicle dropped off",5,"Your vehicle is with us and the build is underway."],
["designing","System being designed",15,"We're finalising the design of your system."],
["cnc_cutting","Parts being CNC cut",25,"Your components are being CNC cut."],
["drawer_construction","Drawer system construction",40,"Your drawer system is being built."],
["vehicle_prep","Vehicle prep and strip out",50,"We're prepping the vehicle and stripping out the rear."],
["wiring_12v","12V wiring commenced",60,"The 12V wiring has started."],
["dcdc_solar","DC-DC and solar installed",70,"The DC-DC charger and solar wiring are installed."],
["drawers_installed","Drawers and wings installed",80,"The drawer system and wings are now installed."],
["testing_commissioning","Testing and commissioning",90,"We're testing and commissioning the full system."],
["final_qc","Final quality control",95,"Your build is in final quality control."],
["ready_for_pickup","Ready for pickup",100,"Your build is finished and ready for pickup!"],
["completed","Completed",100,"Build complete — thanks for choosing Splinter 4x4."]
];
const COLS=[["booked","Booked","var(--booked)"],["in_progress","In progress","var(--progress)"],["needs_attention","Needs attention","var(--attn)"],["delayed","Delayed","var(--delay)"],["ready","Ready for pickup","var(--ready)"],["completed","Completed","var(--done)"]];
const BUILDS=["Sandy Cape drawer system","Yardie Creek drawer system","Steep Point drawer system","False floor","Canopy fitout","12V touring system","Drawers + 12V package","Custom build"];

const st=k=>STAGES.find(s=>s[0]===k)||STAGES[0];
const stIdx=k=>Math.max(0,STAGES.findIndex(s=>s[0]===k));
const veh=j=>[j.make,j.model].filter(Boolean).join(" ")||"Vehicle TBC";
const today=()=>{const d=new Date();d.setHours(0,0,0,0);return d;};
const daysLeft=due=>due?Math.round((new Date(due)-today())/864e5):null;
const fmt=due=>due?new Date(due).toLocaleDateString("en-AU",{weekday:"short",day:"numeric",month:"short"}):"TBC";
const tok=()=>Math.random().toString(36).slice(2,8).toUpperCase()+Math.random().toString(36).slice(2,6).toUpperCase();
const esc=s=>(s||"").replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;");

function col(j){
  if(j.stage==="completed")return "completed";
  if(j.stage==="ready_for_pickup")return "ready";
  if(daysLeft(j.due)!==null&&daysLeft(j.due)<0)return "delayed";
  if(j.stage==="booked")return j.flag?"needs_attention":"booked";
  if(j.flag)return "needs_attention";
  if(daysLeft(j.due)===0)return "needs_attention";
  return "in_progress";
}

function publicBase(){
  let b=(window.PUBLIC_BASE_URL||"").trim();
  if(!b){b=location.origin+location.pathname.replace(/[^/]*$/,"");}
  return b.replace(/\/$/,"");
}
function trackLink(j){return publicBase()+"/track.html?t="+encodeURIComponent(j.token);}

function emailFor(j){
  const s=st(j.stage),link=trackLink(j),sig="\n\nRegards,\nEthan Jamieson\nSplinter 4x4 Solutions";
  if(j.stage==="ready_for_pickup")return{subject:"Your "+veh(j)+" is ready for pickup",body:"Hi "+j.first+",\n\nGreat news — your "+veh(j)+" build is finished and ready to collect. Just reply or give us a call and we'll arrange a pickup time that suits you.\n\nYou can see the final progress here:\n"+link+sig};
  if(j.stage==="completed")return{subject:"Thanks from Splinter 4x4 Solutions",body:"Hi "+j.first+",\n\nThanks again for choosing us for your "+veh(j)+" build — it was great having you on board. Any questions down the track, just reach out. Enjoy the trips ahead!"+sig};
  return{subject:"Your Splinter 4x4 Build Update",body:"Hi "+j.first+",\n\nYour "+veh(j)+" build is now "+s[2]+"% complete.\n\nCurrent stage:\n"+s[1]+"\n\n"+s[3]+" We're currently expecting completion on "+fmt(j.due)+".\n\nYou can view your live build progress here:\n"+link+sig};
}

function ring(pct,color,size){
  const r=(size-8)/2,c=2*Math.PI*r,off=c*(1-pct/100),cx=size/2;
  return '<svg width="'+size+'" height="'+size+'" viewBox="0 0 '+size+' '+size+'" class="ring">'
   +'<circle cx="'+cx+'" cy="'+cx+'" r="'+r+'" fill="none" stroke="var(--surface2)" stroke-width="6"/>'
   +'<circle cx="'+cx+'" cy="'+cx+'" r="'+r+'" fill="none" stroke="'+color+'" stroke-width="6" stroke-linecap="round" stroke-dasharray="'+c+'" stroke-dashoffset="'+off+'" transform="rotate(-90 '+cx+' '+cx+')"/>'
   +'<text x="50%" y="50%" text-anchor="middle" dy="0.36em" class="ringlabel" fill="var(--text)" font-size="'+(size*0.30)+'">'+pct+'</text></svg>';
}

// ── Data layer ──────────────────────────────────────────────────────────────
// Uses Supabase when configured (true live tracking, shared across devices),
// otherwise falls back to browser localStorage so the board still works offline.

const SUPA_READY = !!(window.SUPABASE_URL && window.SUPABASE_ANON_KEY
  && !/YOUR_/.test(window.SUPABASE_URL) && window.supabase);

const sb = SUPA_READY ? window.supabase.createClient(window.SUPABASE_URL, window.SUPABASE_ANON_KEY) : null;

// Map between app objects (drop/due) and DB columns (dropoff/due).
const toRow=j=>({id:j.id,token:j.token,name:j.name,first:j.first,email:j.email,phone:j.phone,
  make:j.make,model:j.model,rego:j.rego,build:j.build,stage:j.stage,flag:!!j.flag,
  dropoff:j.drop||null,due:j.due||null});
const fromRow=r=>({id:r.id,token:r.token,name:r.name,first:r.first,email:r.email,phone:r.phone,
  make:r.make,model:r.model,rego:r.rego,build:r.build,stage:r.stage,flag:!!r.flag,
  drop:r.dropoff||"",due:r.due||""});

const LS_KEY="splinter:jobs:v2";

const DB={
  ready:SUPA_READY,
  async list(){
    if(SUPA_READY){
      const {data,error}=await sb.from("jobs").select("*").order("due",{ascending:true});
      if(error)throw error;
      return (data||[]).map(fromRow);
    }
    try{return JSON.parse(localStorage.getItem(LS_KEY))||[];}catch(e){return [];}
  },
  async getByToken(token){
    if(SUPA_READY){
      const {data,error}=await sb.from("jobs").select("*").eq("token",token).maybeSingle();
      if(error)throw error;
      return data?fromRow(data):null;
    }
    const all=(()=>{try{return JSON.parse(localStorage.getItem(LS_KEY))||[];}catch(e){return [];}})();
    return all.find(j=>j.token===token)||null;
  },
  async upsert(job){
    if(SUPA_READY){
      const {error}=await sb.from("jobs").upsert(toRow(job));
      if(error)throw error;
      return;
    }
    let all;try{all=JSON.parse(localStorage.getItem(LS_KEY))||[];}catch(e){all=[];}
    const i=all.findIndex(j=>j.id===job.id);
    if(i>=0)all[i]=job;else all.push(job);
    localStorage.setItem(LS_KEY,JSON.stringify(all));
  },
  async remove(id){
    if(SUPA_READY){
      const {error}=await sb.from("jobs").delete().eq("id",id);
      if(error)throw error;
      return;
    }
    let all;try{all=JSON.parse(localStorage.getItem(LS_KEY))||[];}catch(e){all=[];}
    localStorage.setItem(LS_KEY,JSON.stringify(all.filter(j=>j.id!==id)));
  },
  // Live updates for the customer tracking page (Supabase only).
  subscribe(token,onChange){
    if(!SUPA_READY)return ()=>{};
    const ch=sb.channel("track:"+token)
      .on("postgres_changes",{event:"*",schema:"public",table:"jobs",filter:"token=eq."+token},
        payload=>{if(payload.new)onChange(fromRow(payload.new));})
      .subscribe();
    return ()=>sb.removeChannel(ch);
  }
};
