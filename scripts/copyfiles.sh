#!/usr/bin/env bash

# Installs library dependencies for Twig Components

if [ -z "$1" ]; then
  echo "Please provide your Drupal docroot, i.e. ./scripts/copyfiles.sh /var/www/html/docroot"
  exit 1
fi

if ! which npm > /dev/null; then
  echo "Please install Node/npm and run the command again."
  exit 1
fi

echo "Copying libraries to $1/libraries"

mkdir -p "$1/libraries" &&\
npm i -s --no-package-lock @webcomponents/webcomponentsjs twig &&\
cp -r node_modules/@webcomponents/webcomponentsjs "$1/libraries/" &&\
cp -r node_modules/twig "$1/libraries/"

echo
echo "Finished copying required Twig Components libraries to /libraries. Yay!"
