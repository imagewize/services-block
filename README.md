# Imagewize Services Blocks

A WordPress plugin that provides customizable blocks for creating service sections with SVG icon support.

## Features

- **Services Container Block**
  - Clean, responsive layout
  - Default slate-50 background color
  - Customizable background colors through WordPress color picker
  - Inner blocks support for flexible content
  - Tailwind CSS styling

- **Default Editor Settings**
  - Main heading with default black text color
  - White background color for service item columns
  - Adjustable color settings through WordPress editor
  - Pre-configured spacing and typography
  - Mobile-responsive layouts

- **Service Items**
  - White background by default (adjustable)
  - Hover effects on titles
  - Decorative underlines with transitions
  - Responsive two-column layout
  - Center alignment on mobile

- **SVG Icon Block**
  - Secure SVG upload and display
  - Support for [Iconify](https://icon-sets.iconify.design/) icons
  - SVG Settings:
    - Customizable SVG width and height
  - Container Settings:
    - Background color selection
    - Border radius control
    - Padding adjustment
  - Hover animations
  - Safe SVG sanitization

## Block Settings

### Main Container
- Background color: Default slate-50 (adjustable)
- Padding: 16px top/bottom
- Max width: 4xl (configurable)

### Service Columns
- Background color: White by default
- Padding: 1.5rem
- Border radius: 0.5rem
- Gap between columns: 2rem

### Typography
- Main heading: 
  - Color: Black (adjustable via WordPress color picker)
  - Font: Open Sans (adjustable via theme fonts)
  - Weight: 700 (adjustable)
  - Size: 3xl (adjustable via font size picker)
  - Alignment: Center (adjustable)

- Service titles:
  - Color: Black (adjustable via WordPress color picker)
  - Font: Open Sans (adjustable via theme fonts)
  - Weight: 600 (adjustable)
  - Size: Large (adjustable via font size picker)
  - Decorative underline with hover effect

- Body text:
  - Color: Gray (adjustable via WordPress color picker)
  - Font: Open Sans (adjustable via theme fonts)
  - Size: Base (adjustable via font size picker)
  - Line height: 1.6 (adjustable)
  - Weight: 400 (adjustable)

All typography settings can be adjusted through the WordPress block editor's Typography panel in the sidebar.

## Requirements

- WordPress 6.7 or higher
- PHP 7.4 or higher
- PHP XML extension enabled

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
4. Adjust SVG Settings in the sidebar:
   - SVG width and height
5. Customize Container Settings:
   - Background color (supports theme colors)
   - Border radius
   - Padding
6. Use the toolbar "Replace" button to change SVG

## Security

The SVG support includes several security measures:

### SVG Sanitization
- Validates proper XML structure
- Removes potentially harmful elements:
  - PHP tags
  - Script tags
  - Event handlers (onclick, onload, etc.)
  - JavaScript URLs
  - Data URLs
  - External namespace declarations
- Uses PHP's DOMDocument for secure parsing
- Requires PHP XML extension
- Sanitizes attributes before saving
- Validates MIME type (image/svg+xml)

Common sanitized patterns:
- `<script>` tags
- `onclick="alert(1)"`
- `href="javascript:alert(1)"`
- `xlink:href="data:text/plain,alert(1)"`
- `xmlns:evil="http://evil.com"`

### File Handling
- Validates SVG files during upload
- Checks proper MIME types
- Prevents non-SVG file uploads
- Maintains aspect ratio during display

## Development

Built using:
- @wordpress/create-block
- React
- sass
- [Iconify](https://icon-sets.iconify.design/)

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