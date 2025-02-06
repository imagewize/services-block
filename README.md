# Imagewize Services Blocks

A WordPress plugin that provides customizable blocks for creating service sections with SVG icon support.

## Features

- **Services Container Block**
  - Clean, responsive layout
  - Customizable background colors
  - Inner blocks support for flexible content
  - Tailwind CSS styling

- **SVG Icon Block**
  - Secure SVG upload and display
  - Customizable dimensions (width/height)
  - Background color picker
  - Adjustable border radius
  - Configurable padding
  - Safe SVG sanitization

## Requirements

- WordPress 6.7 or higher
- PHP 7.4 or higher
- PHP XML extension enabled
- Theme with Tailwind color support

### Theme Requirements

This plugin requires your theme to support Tailwind colors. If you're using Sage or a similar theme builder, ensure your `bud.config.js` includes:

```javascript
module.exports = (app) => {
  app
    .useTailwindColors()    // Required for SVG block background colors
    .useTailwindFontFamily()
    .useTailwindFontSize();
};
```

Without proper Tailwind color support in your theme, the SVG block's background color picker may not work as expected.

## Installation

1. Download the plugin zip file
2. Go to WordPress admin panel → Plugins → Add New
3. Click "Upload Plugin" and select the zip file
4. Click "Install Now" and then "Activate"

Or manually:

1. Upload the plugin files to `/wp-content/plugins/services-block/`
2. Activate the plugin through the 'Plugins' screen in WordPress

## Usage

### Services Block
1. Add a new block in your page/post
2. Search for "Services Container"
3. Add content blocks inside the services container

### SVG Icon Block
1. Add a new block
2. Search for "SVG Icon"
3. Upload your SVG file using the block toolbar
4. Adjust settings in the sidebar:
   - Width and height
   - Background color
   - Border radius
   - Padding

## Security

The SVG support includes several security measures:
- SVG file validation
- Removal of potentially harmful elements
- Sanitization of attributes
- Prevention of XSS attacks

## Development

Built using:
- @wordpress/create-block
- React
- Tailwind CSS

### Build Process

```bash
# Install dependencies
npm install

# Start development
npm start

# Build for production
npm run build
```

## License

GPL-2.0-or-later