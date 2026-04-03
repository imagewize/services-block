# Changelog

All notable changes to the Imagewize Services Blocks plugin will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [1.0.1] - 2026-04-03

### Changed
- Renamed Services Block title to "Services Section" for clearer editor labelling
- Updated plugin description to reflect the new block title

## [1.0.0] - 2025-04-15

### Added
- WP SVG upload note and documentation in README
- Iconify icon added to SVG block
- GPL-2.0-or-later LICENSE file
- Composer package support (`composer.json`)
- Additional block customization options in the editor (sidebar panel)
- Mobile display enhancements and responsive layout improvements
- Additional Services Columns with icons (Iconify integration)
- Font face addition for service headings
- Main heading and paragraph styling
- Group wrapping for the main content area
- New block icon for the Services block in the editor
- SVG block with media manager support for uploading SVGs
- Block controls toolbar button to replace uploaded SVG
- Theme color palette integration for SVG background color
- SVG frontend styling and image patch
- Initial Services Block with nested Columns layout
- Service Block Inclusion as inner block

### Changed
- Main container block defaults to full alignment
- Service title underline color and hover color settings
- Refactored block internals and enhanced editor controls
- Main heading text color defaulted to black
- Applied `useBlockProps.save` with merged class to ensure WordPress adds the `wp-block-imagewize-services-block` class on the frontend
- Separated container and SVG block settings in the inspector
- Simplified background color storage (hex value instead of Tailwind class)
- Removed duplicate SVG import and unnecessary properties
- Removed old services block plugin file; replaced with unified plugin bootstrap file
- General improvements and `templateLock` removal
- Block renamed to `imagewize/services-block`

### Fixed
- Background color registration and block registration checks
- Syntax errors and duplicate property cleanup
- Frontend style cleanup post loading
