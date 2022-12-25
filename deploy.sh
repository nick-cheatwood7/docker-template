#!/bin/bash

echo "📦 Pulling from git..."
git pull

echo "🐳 Building docker image..."
docker-compose build --no-cache
docker-compose up -d

echo "✨ Done!"