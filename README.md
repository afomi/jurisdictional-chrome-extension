# Jurisdictional Chrome Extension

## About

This plugin is a work in progress [WIP],
and is in its very early stages. 🐣

This plugin sends the URL of the active tab to Jurisdictional.org
(to `https://www.jurisdictional.org/api/v1/plugins/chrome`).

Right now this plugin is basically good for civic-minded people
looking to contribute public and civic URL's to Jurisdictional.

Jurisdictional is just storing each URL for now 📝,
but we will be doing more interesting and valuable things
with the information over time ⚡️. Stay tuned.

## Published

This extension is published on the Google Chrome Store at:

https://chrome.google.com/webstore/detail/jurisdictional/odfkmidffflekokhkdaaadcpmcldjpff

---

## Development

1. `git clone` this repo
1. `npm install`
1. maybe `npm install -g grunt-cli`
1. `grunt build` to generate a /dist folder, based on the /app

## How this plugin works

Given this is a Google Chrome Extension,
`/scripts/background.js` is loaded into Chrome once.

Each time the Jurisdictional extension icon is clicked,
[something happens](https://github.com/afomi/jurisdictional-chrome-extension/blob/master/app/scripts/background.js#L32).
