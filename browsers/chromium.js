// Chromium doesn't seem to provide a straightforward first party installer for Windows and Linux
module.exports = {
  linux: ['chromium-browser'],
  darwin: ['/Applications/Chromium.app/Contents/MacOS/Chromium']
};
