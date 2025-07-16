# Copy as Git Branch

A browser extension that adds a "Copy as Git branch" option to the context menu for selected text. Converts any selected text into a properly formatted Git branch name.

## Features

- Right-click context menu integration
- Converts text to valid Git branch format
- Works on any webpage
- Available for both Firefox and Chrome

## Text Conversion

The extension transforms selected text by:
- Converting to lowercase
- Removing special characters
- Replacing spaces with hyphens
- Removing leading/trailing hyphens
- Collapsing multiple hyphens

**Examples:**
- "Fix User Login Bug" → `fix-user-login-bug`
- "Add new feature!!!" → `add-new-feature`
- "Update API documentation" → `update-api-documentation`

## Installation

### Firefox
1. Go to `about:debugging` in Firefox
2. Click "This Firefox"
3. Click "Load Temporary Add-on"
4. Select `firefox/manifest.json`

### Chrome
1. Go to `chrome://extensions/`
2. Enable "Developer mode"
3. Click "Load unpacked"
4. Select the `chrome/` folder

## Usage

1. Select any text on a webpage
2. Right-click to open context menu
3. Click "Copy as Git branch"
4. The formatted branch name is copied to your clipboard
5. Paste into your terminal: `git checkout -b <paste-here>`

## File Structure

```
├── firefox/           # Firefox extension files
│   ├── manifest.json
│   ├── background.js
│   ├── content.js
│   └── icon-96.png
├── chrome/            # Chrome extension files
│   ├── manifest.json
│   ├── background.js
│   └── content.js
├── privacy-policy.html
├── privacy-policy.md
├── .gitignore
└── README.md
```

## Privacy

This extension:
- Does not collect any user data
- Processes text locally in your browser
- Does not transmit data to external servers
- Only activates when you use the context menu

See [privacy-policy.html](privacy-policy.html) or [privacy-policy.md](privacy-policy.md) for full details.

## Development

The extension uses:
- **Firefox**: Manifest v2 with `browser` API
- **Chrome**: Manifest v3 with `chrome` API and service worker

Both versions share identical functionality with browser-specific implementations.

## License

MIT License