#!/bin/bash
set -e

cd /root/wooji-digital
git pull origin main
cd frontend
npm install --production=false

# Clear stale build cache BEFORE stopping server (keep site up during build)
rm -rf .next

# Build first, then swap
NODE_OPTIONS="--max-old-space-size=4096" npm run build

# Stop only after successful build
pm2 stop wooji || true
pm2 start wooji 2>/dev/null || pm2 restart wooji

echo "Deploy tamamlandi: $(date)"
