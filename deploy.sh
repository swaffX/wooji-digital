#!/bin/bash
set -e

cd /root/wooji-digital
git pull origin main
cd frontend
npm install --production=false

# Clear stale build — keep server up during build
rm -rf .next

# Build first, then swap (prevents 502 on failed builds)
NODE_OPTIONS="--max-old-space-size=4096" npm run build

# Stop only after successful build
pm2 stop wooji || true
pm2 start wooji 2>/dev/null || pm2 restart wooji

# Brief health check
sleep 3
curl -sf http://127.0.0.1:3000/ -o /dev/null && echo "Deploy OK: $(date)" || echo "WARNING: Health check failed — check pm2 logs"
