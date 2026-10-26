#!/bin/bash
set -euo pipefail

# Run after rendering. Paths are relative to this script, not the current shell.
cd -- "$(dirname -- "${BASH_SOURCE[0]}")"

# Keep the finished PDF in the existing output directory.
if [[ -f nemati_resume.pdf ]]; then
    mkdir -p output/pdf
    mv -f -- nemati_resume.pdf output/pdf/nemati_resume.pdf
elif [[ -f Nemati_Resume.pdf ]]; then
    mkdir -p output/pdf
    mv -f -- Nemati_Resume.pdf output/pdf/nemati_resume.pdf
fi

# Remove only resume build artifacts from the project root.
for name in nemati_resume Nemati_Resume; do
    for extension in aux fls log out fdb_latexmk synctex.gz synctex toc lof lot bbl blg xdv dvi; do
        rm -f -- "$name.$extension"
    done
done
