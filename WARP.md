# WARP.md

This file provides guidance to WARP (warp.dev) when working with code in this repository.

## Development Commands

### Package Management
This project uses `pnpm` as the package manager. Always use pnpm commands instead of npm or yarn.

```bash
# Install dependencies
pnpm install

# Add a new dependency
pnpm add <package-name>

# Add a dev dependency
pnpm add -D <package-name>
```

### Development Server
```bash
# Start development server (uses Turbopack for faster builds)
pnpm dev

# Server runs on http://localhost:3000
```

### Building and Production
```bash
# Build for production (uses Turbopack)
pnpm build

# Start production server
pnpm start
```

### Code Quality
This project uses **Biome** (not ESLint/Prettier) for linting and formatting:

```bash
# Run linter and formatter checks
pnpm lint

# Auto-format code
pnpm format
```

Biome is configured to:
- Use 2-space indentation
- Enable recommended rules for Next.js and React
- Automatically organize imports
- Ignore unknown CSS at-rules (for Tailwind)

## Architecture Overview

### Tech Stack
- **Next.js 15.5.3** with App Router (not Pages Router)
- **React 19.1.0** 
- **TypeScript** with strict mode enabled
- **Tailwind CSS v4** (beta version with new inline theme syntax)
- **Biome** for code quality (replaces ESLint + Prettier)
- **Turbopack** for faster development and builds

### Project Structure
```
src/
  app/                 # Next.js App Router directory
    layout.tsx         # Root layout with font configuration
    page.tsx           # Home page component
    globals.css        # Global styles with Tailwind and CSS variables
    favicon.ico        # App icon
public/                # Static assets
  *.svg               # Various SVG icons
```

### Key Configuration Files
- `next.config.ts` - Next.js configuration (currently minimal)
- `biome.json` - Biome linter/formatter configuration with Next.js and React rules
- `tsconfig.json` - TypeScript configuration with `@/*` path mapping to `src/*`
- `postcss.config.mjs` - PostCSS configuration for Tailwind CSS v4
- `src/app/globals.css` - Global styles with custom CSS properties for theming

### Styling Architecture
- **Tailwind CSS v4** with new inline theme syntax using `@theme inline`
- CSS custom properties for light/dark theme support
- Geist font family (Sans and Mono variants) loaded from Google Fonts
- Automatic dark mode support via `prefers-color-scheme`

### Important Notes
- This project uses the **App Router** (not Pages Router) - all routes go in `src/app/`
- Path aliasing: `@/*` maps to `src/*` for cleaner imports
- Turbopack is enabled for both dev and build for improved performance
- No testing framework is currently configured
- Uses latest React 19 features and Next.js 15 app directory conventions