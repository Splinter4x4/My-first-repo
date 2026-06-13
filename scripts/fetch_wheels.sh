#!/usr/bin/env bash
#
# fetch_wheels.sh — restore the third-party Python wheels that FabexCNC bundles
# for offline Blender-extension installation.
#
# The bundled wheels (~194 MB across all platforms) were removed from this fork
# to keep the repo lean. This script downloads them again from PyPI.
#
# Usage:
#   scripts/fetch_wheels.sh            # wheels for the CURRENT platform (enough to run locally)
#   scripts/fetch_wheels.sh --all      # try to download wheels for ALL manifest platforms
#
# The versions below match fabex/blender_manifest.toml. If you bump them there,
# bump them here too.

set -euo pipefail

DEST="$(cd "$(dirname "${BASH_SOURCE[0]}")/.." && pwd)/fabex/wheels"
mkdir -p "$DEST"

# Versions pinned to match fabex/blender_manifest.toml
PKGS=(
  "llvmlite==0.43.0"
  "numba==0.60.0"
  "opencamlib==2023.1.11"
  "shapely==2.0.5"
)

echo "Downloading wheels into: $DEST"

if [[ "${1:-}" == "--all" ]]; then
  # Multi-platform set used to build the distributable extension .zip.
  PLATFORMS=(
    "manylinux2014_x86_64"
    "manylinux2014_aarch64"
    "macosx_10_9_x86_64"
    "macosx_11_0_arm64"
    "win_amd64"
  )
  for plat in "${PLATFORMS[@]}"; do
    echo ">> platform: $plat"
    pip download --only-binary=:all: --python-version 3.11 \
      --implementation cp --abi cp311 --platform "$plat" \
      --dest "$DEST" "${PKGS[@]}" || \
      echo "   (some packages may not publish a wheel for $plat — skipping those)"
  done
else
  # Just the current interpreter/platform — enough to run and test locally.
  pip download --only-binary=:all: --dest "$DEST" "${PKGS[@]}"
fi

echo "Done. Wheels available in $DEST"
echo "Note: wheels are gitignored in this fork and are not committed."
