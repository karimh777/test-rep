#!/usr/bin/env bash
#set -e

alias node='node.exe'

BV_VERSION=$(node -p -e "require('./package.json').version")
BV_BANNER=$(node -p "require('./scripts/banner')")

echo "Building BootstrapVue ${BV_VERSION}"
echo ''

# Cleanup
rm -rf dist esm

echo 'Compile JS...'
rollup -c scripts/rollup.config.js
echo 'Done.'
echo ''

echo 'Compiling ESM modular build...'
NODE_ENV=esm babel src --out-dir esm --ignore 'src/browser.js'
echo "${BV_BANNER}" | cat - esm/index.js > esm/tmp.js && mv -f esm/tmp.js esm/index.js
echo 'Done.'
echo ''

echo 'Minify JS...'
terser dist/tailwindvue-test.js \
  --compress typeofs=false \
  --toplevel \
  --keep-classnames \
  --comments "/^!/" \
  --source-map "content=dist/tailwindvue-test.js.map,includeSources,url=tailwindvue-test.min.js.map" \
  --output dist/tailwindvue-test.min.js
terser dist/tailwindvue-test.common.js \
  --compress typeofs=false \
  --toplevel \
  --keep-classnames \
  --comments "/^!/" \
  --source-map "content=dist/tailwindvue-test.common.js.map,includeSources,url=tailwindvue-test.common.min.js.map" \
  --output dist/tailwindvue-test.common.min.js
terser dist/tailwindvue-test.esm.js \
  --compress typeofs=false \
  --toplevel \
  --keep-classnames \
  --comments "/^!/" \
  --source-map "content=dist/tailwindvue-test.esm.js.map,includeSources,url=tailwindvue-test.esm.min.js.map" \
  --output dist/tailwindvue-test.esm.min.js
echo 'Done.'
echo ''

echo $?

sleep 1m
