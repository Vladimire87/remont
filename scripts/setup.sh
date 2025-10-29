#!/usr/bin/env bash
set -euo pipefail

if [ ! -f package.json ]; then
  echo "Run this script from the repository root." >&2
  exit 1
fi

echo "Installing npm dependencies..."
npm install
