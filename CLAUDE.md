# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Build Commands

```bash
npm install          # Install dependencies
npm start            # Development mode with watch/hot reload
npm run build        # Production build (outputs to /build)
npm run lint:js      # JavaScript linting
npm run lint:css     # CSS/SCSS linting
npm run format       # Auto-format code
npm run plugin-zip   # Create deployable plugin .zip
```

All build tooling is delegated to `@wordpress/scripts` — there is no custom Webpack, Babel, or ESLint config. The `/build` directory is committed to the repo so the plugin can be activated on WordPress without a build step.

## Architecture

### Plugin Bootstrap

`plugin.php` registers both blocks from pre-built directories via `register_block_type()` on the `init` hook. The `svg-support.php` file (in `src/svg-block/`) handles server-side PHP for SVG MIME type support and sanitization; it is loaded automatically by WordPress via block metadata.

### Two Blocks

**`imagewize/services-block`** — The main block. It uses `InnerBlocks` with a hardcoded template defined in `src/services-block/edit.js` (~lines 55–436). The template pre-populates a full layout: heading, intro paragraph, and 3 rows of 2-column service cards, each with an SVG icon column and a text column. Modifications to the default layout require editing the template array directly. `save.js` is minimal — just a `<section>` wrapper with `InnerBlocks.Content`; all real structure lives in stored inner block data.

**`imagewize/svg-block`** — A standalone media block for uploading and displaying SVGs. `edit.js` uses `compose()` + `withColors()` for theme palette integration. The MediaUpload toolbar validates `image/svg+xml` MIME type. Styling uses CSS variables (`--svg-background`, `--svg-width`, etc.) stored as block attributes and injected via `blockProps` in `save.js`.

### Source → Build Pipeline

```
src/
  services-block/
    index.js        ← entry point, registers block
    edit.js         ← editor UI (React)
    save.js         ← frontend output
    block.json      ← block metadata & attributes
    style.scss      ← frontend + editor styles
    editor.scss     ← editor-only styles
    assets/         ← SVG files imported as inline base64 by webpack
  svg-block/
    (same structure)
    svg-support.php ← server-side SVG sanitization & MIME support
build/
  services-block/   ← compiled output (committed)
  svg-block/        ← compiled output (committed)
```

When `npm run build` runs, `@wordpress/scripts` compiles each `index.js` entry, converts SCSS to CSS, generates `index.asset.php` dependency maps, and copies `block.json` into the build directory. SVG files imported in JS are automatically base64-encoded.

### Styling Pattern

Both blocks use CSS custom properties for dynamic styling driven by block attributes. The services block uses `--service-title-line-color`, `--service-title-underline`, and `--service-title-hover-color` for the animated underline effect on service titles. The SVG block uses `--svg-background`, `--svg-width`, `--svg-height`, `--svg-border-radius`, and `--svg-padding`.

### SVG Security

`svg-support.php` sanitizes uploaded SVGs server-side: validates XML structure, removes `<script>` tags, strips `on*` event attributes, and disallows `javascript:` / `data:` URLs. PHP's XML extension is required; an admin notice is shown if missing.

## Git Commits

Use atomic commits — one commit per file or logical file group, with a precise message describing exactly what changed in those files. Avoid bundling unrelated changes into a single commit. Never mention Claude or AI in commit messages.

### Versioning

Version is maintained in four places — keep them in sync:
- `plugin.php` (header comment + `const VERSION`)
- `package.json`
- `src/services-block/block.json`
- `build/services-block/block.json`
