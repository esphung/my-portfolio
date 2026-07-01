#!/bin/bash

rm -rf node_modules
rm -rf android/app/build
rm -rf ios/build
rm -rf ios/Pods
rm -rf ios/Podfile.lock
rm -rf ios/DerivedData
watchman watch-del-all

# reinstall node modules
yarn install --immutable
npx pod-install

echo "Project cleaned and dependencies reinstalled successfully."

