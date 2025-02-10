# Imagewize Services Block

A WordPress block for creating customizable service sections with SVG icon support.

## Features

- Responsive service section layout with SVG icons
- Title underline effects with customizable colors
- Configurable block and column backgrounds
- Mobile-optimized design
- Theme color integration
- SVG icon support with security sanitization

## Requirements

- WordPress 6.7+
- PHP 8.0+
- PHP XML extension

## Installation

### Via Composer (Recommended)
```bash
composer require imagewize/services-block
```

### Manual Installation
1. Download and unzip to `/wp-content/plugins/`
2. Activate through WordPress admin

## Usage

1. Add "Services Container" block
2. Customize colors, typography, and layout
3. SVG icons can be added via the SVG block toolbar

## Development

```bash
# Install
npm install

# Development
npm start

# Build
npm run build
```

## Security

- SVG sanitization and validation
- Safe file handling
- Proper MIME type checks

## License

GPL-2.0-or-later