#!/usr/bin/env sh

# abort on errors
set -e

# build
npm run build

# navigate into the build output directory
cd dist

git init
git config --global user.email "qrsnake@gmail.com"
git config --global user.name "deploy-bot"
git checkout -b main
git add -A
git commit -m 'deploy'

git push -f git@github.com:qrsnake/qr-snake-front.git main:gh-pages

cd -
