# Click-Together Aluminium Ute Canopy — 4mm Plate, Coachbuilt

A design study for a heavy-duty ute canopy built from **4mm aluminium plate**, using
traditional **car body builder (coachbuilding) techniques** — folded flanges, joggled
laps, swage stiffening, panel-bond adhesive — combined with a **CNC-cut "LEGO" panel
kit** where every panel self-locates and *clicks* into its neighbours before it is
permanently locked.

---

## 1. The honest engineering answer first

Can 4mm aluminium "click together" like LEGO?

**Yes — but not the way LEGO does it.** LEGO relies on friction studs and plastic that
tolerates ~2–4% elastic strain. Aluminium 5052-H32 yields at ~193 MPa with a modulus of
70.3 GPa, which means it can only spring **~0.27%** before it takes a permanent set.
A straight press-fit stud in 4mm plate would either not engage or bend on first assembly.

The fix is the same one used in every metal snap-fit product (electrical enclosures,
server chassis): make the flex happen over a **long cantilever tab** so the strain at
the root stays below yield while the tip still deflects enough to jump a detent bump.

**Cantilever snap tab sizing (the maths):**

```
Max root strain of a cantilever snap tab:   ε = 1.5 · t · y / L²

t = 4 mm (plate thickness)
ε_allow = 0.0027 (5052-H32, σy/E = 193/70300)

For a tab length L = 60 mm:
  y_max = ε · L² / (1.5 · t) = 0.0027 × 3600 / 6 ≈ 1.6 mm
```

So a **60mm long snap tab cut into 4mm plate can safely deflect ~1.6mm** — enough to
ride over a **1.2mm detent bump** and click home with an audible snap, thousands of
times, without fatigue. That is a real, LEGO-style click in structural aluminium.

Everything below is built from three CNC-cut joint types:

| Joint | LEGO analogue | Role |
|---|---|---|
| **Castellated finger tabs** (tab-and-slot) | Brick studs | Self-locating, self-jigging, carries shear |
| **Cantilever snap tabs** (60mm, 1.2mm detent) | The "click" | Holds panels together hands-free during assembly |
| **Wedge-key mortise & tenon** | Technic pin | Tool-free *removable* lock for service panels |

Final structural lock (after click-assembly) is pure modern car-body practice:
**panel-bond structural adhesive + blind structural rivets** — the same
adhesive-plus-mechanical joint used on bonded aluminium car bodies. No welding
required, which also means **no heat distortion and no strength loss in the HAZ**.

---

## 2. Material and weight — a caveat on 4mm

| Spec | Value |
|---|---|
| Flat / folded panels | 5052-H32, 4mm (best formability) |
| High-load floor rails & mounts | 5083-H116, 4mm |
| Minimum inside bend radius | 2 × t = **8mm** (press brake, folds parallel-ish to grain avoided) |
| Sheet weight | **10.8 kg/m²** at 4mm |

A full canopy (example envelope below) has ~10 m² of panel → **~110 kg before
hardware**. That's *heavy-duty tray-canopy* territory (mine-spec). If this is for a
touring canopy, the identical cut files scale to 2.5mm (6.75 kg/m², ~70 kg) — the joint
geometry only needs the slot widths and snap-tab lengths re-parameterised (L = 48mm at
2.5mm gives the same 1.6mm click deflection). The design is thickness-parametric on
purpose.

---

## 3. Example canopy — envelope and panel kit

Dual-cab tray canopy, 1800 L × 1850 W × 860 H.

```
            ┌────────────────────────────────────┐
   ROOF  →  │  R1  (one piece, swage-stiffened)  │
            └────────────────────────────────────┘
        ┌───┐                                ┌───┐
FRONT   │F1 │   S1 ── gullwing door ── S1'   │D1 │  REAR
BULKHEAD│   │   (LH side)      (RH side)     │   │  DOOR FRAME
        └───┘                                └───┘
            ┌────────────────────────────────────┐
   BASE  →  │ B1  perimeter rail + 3 cross ribs  │
            └────────────────────────────────────┘
```

**Panel schedule (all CNC router/laser cut from 4mm, then press-folded):**

| ID | Panel | Blank size | Coachbuilder features |
|---|---|---|---|
| B1 | Base rail frame | 1800×1850 perimeter | 60mm double-return folds (box-section stiffness from folds, no extrusion needed), slotted for cross ribs |
| F1 | Front bulkhead | 1850×860 | 25mm return flange all round, 2 vertical swage beads |
| S1/S1' | Side frames | 1800×860 | Door aperture with **joggled** (stepped) landing so the gullwing door sits flush — classic body-builder joggle, 4mm step over 25mm |
| D1 | Rear frame | 1850×860 | Return flanges + rivnut pattern for hinges/locks |
| R1 | Roof | 1860×1810 | 15mm drip-rail fold on sides, 3 lateral swage beads to kill oil-canning |
| ×3 | Floor cross ribs | 1810×120 | Top-hat fold profile, finger-tabbed into B1 |

Every fold replaces a weld or an extrusion: **stiffness comes from geometry, not
added material** — the core coachbuilding idea.

---

## 4. The worked example: side panel S1 clicking into front bulkhead F1

This is the joint the whole system is built from. Read it with
[`corner-joint.svg`](corner-joint.svg).

### 4.1 Cut geometry (per 860mm vertical corner seam)

```
S1 edge (fingers + snap tab)             F1 flange (slots + detent window)

  ──┐                                        │ ┌──────┐
    ├──┐  finger 40w × 25d                   │ │ slot │ 40.2 × 4.2   (+0.2 clearance)
  ──┘  │                                     │ └──────┘
       │                                     │
  ──┐  │                                     │ ┌──────┐
    ├──┘  gap 40                             │ │ slot │
  ──┘                                        │ └──────┘
    ⋮   × 7 fingers over 860mm                  ⋮
       ┌────────────────┐
  ═════╡  SNAP TAB      ╞═►  60 L × 12 W,    │ ┌─────────┐
       │  relief slots  │    1.2mm barb      │ │ WINDOW  │ 12.4 wide, barb
       └────────────────┘    at tip          │ └─────────┘ lands on far side
    ⋮   × 2 snap tabs (at ⅓ and ⅔ height)
```

- **7 castellated fingers** (40mm wide × 25mm deep) on the S1 edge engage laser-cut
  slots in the F1 return flange. Slots are cut **+0.2mm** over finger size — a
  location fit that a person can assemble by hand, tight enough that the box
  self-squares. *The panels are their own jig*: no assembly table, no clamps to set
  square, exactly like a LEGO kit is its own instruction fixture.
- **2 snap tabs** per seam (the 60mm cantilevers sized in §1) are cut *within* the
  S1 edge between fingers, each with a 1.2mm barb at the tip. As the fingers seat,
  the barbs deflect ~1.4mm through their windows and **click** over the far face of
  the F1 flange. The panel is now captive — you can let go and pick up the next one.
- Assembly order is LEGO-manual style: B1 flat → F1 clicks into B1 → S1 clicks into
  B1 + F1 simultaneously (fingers on two edges) → S1', D1 → R1 drops on last,
  clicking down onto the top fingers of all four walls.

### 4.2 Locking the clicked joint (car-body stage)

The click holds geometry; it is **not** the structural joint. Once the box is fully
clicked together and checked for square:

1. **Panel-bond structural adhesive** (e.g. a toughened epoxy/MS panel adhesive) is
   injected along each seam through 6mm ports pre-cut in the flange — the finger
   gaps act as adhesive keys, hugely increasing bond shear area.
2. **5.2mm structural blind rivets at 75mm pitch** through pre-cut pilot holes
   (holes are in the cut file, so rivet spacing is *designed*, not eyeballed —
   another self-jigging win).
3. Service panels (rear door frame D1, roof access hatch) skip the adhesive and use
   **wedge-key tenons** instead: the tenon protrudes 12mm through its mortise and a
   tapered aluminium key drives through a 4×20mm slot in the tenon — tool-free
   removable, vibration-locked by taper. This is the "Technic pin" of the kit.

### 4.3 Why this is genuinely a coachbuilder's canopy

| Traditional body-builder technique | Where it appears here |
|---|---|
| Folded return flanges for edge stiffness | Every panel perimeter (25mm returns) |
| Swage lines / beads to stop oil-canning | Roof R1 (×3), bulkhead F1 (×2) |
| Joggled (stepped) lap joints for flush skins | Door apertures in S1/S1' |
| Bonded + riveted joints (modern Al car bodies) | All permanent seams |
| Rivnuts for serviceable hardware | Hinges, locks, roof-rack points |
| Self-jigging tab construction | The entire finger/slot system |

---

## 5. Tolerances that make or break the click

These numbers are the difference between "LEGO" and "hammer and swearing":

| Feature | Value | Why |
|---|---|---|
| Finger ↔ slot clearance | **+0.2mm total** (not per side) | Hand-fit, self-squaring |
| Laser kerf compensation | cut files offset by measured kerf (≈0.15–0.25mm) | Slot size is *post-kerf*, always test-cut a coupon first |
| Snap-tab barb height | 1.2mm | 75% of the 1.6mm elastic limit → safety margin, still audible |
| Snap-tab root fillet | R3 minimum | Kills the stress concentration at the cantilever root |
| Fold position tolerance | ±0.3mm on press brake back-gauge | Fingers land in slots across a 1.8m seam |
| Anodising/powder-coat allowance | slots +0.1mm if coating before assembly | Coating thickness eats clearance |

**Prototype rule:** cut one 300mm corner-joint coupon (two L-shaped offcuts with 2
fingers + 1 snap tab) before committing a full sheet. Every fabricator's laser, brake
and material batch shifts these numbers slightly.

---

## 6. Build sequence summary

1. CNC cut all panels flat from 4mm sheet (nesting: ~3 sheets of 2400×1200).
2. Press-brake all folds (8mm inside radius) — folds are dimensioned from the finger
   edges so fold error doesn't accumulate into the joints.
3. Deburr, then **dry-click the whole canopy together** on the workshop floor,
   no fasteners — full fit check in ~20 minutes.
4. Un-click the permanent seams one at a time, apply panel bond, re-click, rivet.
5. Fit wedge-keyed service panels, rivnut hardware, seals in the joggled lands.

The same cut files, re-parameterised for thickness, produce a 2.5mm touring version
or a 4mm mine-spec version — that parametric, kit-of-parts repeatability is the real
payoff of LEGO-ifying the design.
