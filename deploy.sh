#!/bin/bash
set -e

cd /root/wooji-digital
git pull origin main
cd frontend
npm install --production=false

# Stop server before build to free RAM
pm2 stop wooji || true

NODE_OPTIONS="--max-old-space-size=4096" npm run build

pm2 start wooji 2>/dev/null || pm2 restart wooji

echo "Deploy tamamlandi: $(date)"
