#!/bin/bash

echo "📦 Pulling from git..."
git pull

echo "🏗 Building React app..."
cd web && npm run build && cd ../

echo "🐳 Building docker image..."
docker-compose up -d --build

echo "✨ Done!"