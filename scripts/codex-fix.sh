#!/bin/bash
echo "⚙️ Fixing PermitAssist dependencies..."
npm install --legacy-peer-deps
npm run build || npm run dev
