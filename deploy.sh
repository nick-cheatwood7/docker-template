#!/bin/bash

echo "📦 Pulling from git..."
git pull

echo "🐳 Building docker image..."
docker-compose up -d --build

echo "✨ Done!"