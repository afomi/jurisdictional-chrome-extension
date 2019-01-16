# Jurisdictional Chrome Extension

## About

This plugin is a work in progress [WIP],
and is in its very early stages. 🐣

This plugin sends the URL of the active tab to Jurisdictional.org,
to `https://www.jurisdictional.org/api/v1/plugins/chrome` to be exact.

## How this plugin works

Given this is a Google Chrome Extension,
`/scripts/background.js` is loaded into Chrome once.

Each time the Jurisdictional extension icon is clicked,
[something happens](https://github.com/afomi/jurisdictional-chrome-extension/blob/master/app/scripts/background.js#L32).

## Development

1. `git clone` this repo
1. `npm install`
1. maybe `npm install -g grunt-cli`
1. `grunt build` to generate a /dist folder, based on the /app
