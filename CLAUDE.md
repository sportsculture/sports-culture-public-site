# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Project Overview

This is a Sports Culture blog website built with Next.js 13.5.6 and Tailwind CSS. It's a customized version of the Netlify Next.js blog template, configured for Sports Culture Inc., a software company focused on league management tools and sports team communication platforms.

## Development Commands

```bash
# Development
npm run dev              # Start development server (localhost:3000)
npm run dev:watch        # Development with auto-reload for MDX posts

# Build & Deploy
npm run build            # Production build
npm start               # Start production server
npm run export          # Export static site

# Code Quality
npm run lint            # Run ESLint

# Testing
npx cypress run         # Run Cypress E2E tests headlessly
npx cypress open        # Open Cypress interactive runner
```

## Architecture & Key Files

### Core Configuration
- `utils/global-data.js` - Site metadata and branding configuration with environment variable support
- `netlify.toml` - Deployment configuration with security headers and build settings
- `tailwind.config.js` - Styling configuration using custom preset from `utils/tailwind-preset.js`
- `next.config.js` - Next.js configuration (if needed, currently using defaults)

### Content Management
- `posts/` - MDX blog posts with frontmatter metadata
- `utils/mdx-utils.js` - MDX processing utilities for parsing, sorting, and serializing posts
- Posts support full MDX features including React components and syntax highlighting via Prism

### Component Structure
- `components/Layout.js` - Main layout wrapper with gradient backgrounds
- `components/Header.js` & `components/Footer.js` - Site navigation and footer
- `components/SEO.js` - Meta tags and SEO optimization
- `pages/index.js` - Homepage with post listing
- `pages/posts/[slug].js` - Dynamic blog post pages

### Styling System
- Tailwind CSS with JIT mode and dark/light theme support
- Custom preset in `utils/tailwind-preset.js` for theme customization
- Environment variables for fonts and theme configuration
- Backdrop blur effects and opacity-based design system

## Content Creation

### Adding Blog Posts
1. Create `.mdx` files in `/posts` directory
2. Include frontmatter with `title`, `date`, and `description`
3. Use full MDX syntax including React components
4. Posts are automatically sorted by date (newest first)

### Site Configuration
Configure via environment variables or edit `utils/global-data.js`:
- `BLOG_NAME` - Site name (default: "Sports Culture")
- `BLOG_TITLE` - Homepage title (default: "Making the world a better place through sports.")
- `BLOG_FOOTER_TEXT` - Footer text (default: "All rights reserved. Sports Culture Inc. 2025")

## Testing & Deployment

### Local Testing
- Cypress E2E tests configured for localhost:3000
- Tests validate basic functionality and rendering
- Run `npm run dev` first, then `npx cypress run`

### Deployment
- Automated Netlify deployment from main branch
- Build command: `npm run build`
- Node.js 18 runtime environment
- Comprehensive security headers configured
- Cypress tests run during build process

## Key Dependencies

### Content Processing
- `next-mdx-remote` - Server-side MDX rendering
- `gray-matter` - Frontmatter parsing
- `@mapbox/rehype-prism` - Syntax highlighting
- `remark-gfm` - GitHub Flavored Markdown support

### Styling & UI
- `@tailwindcss/typography` - Enhanced typography styles
- `classnames` - Conditional CSS class utility

### Development Tools
- ESLint with Next.js and Prettier configurations
- `next-remote-watch` - Hot reload for MDX files
- Renovate for dependency updates

## Project Patterns

### File Organization
- Use `pages/` for Next.js routing
- Keep components modular in `components/`
- Utilities in `utils/` with clear separation of concerns
- Static assets in `assets/images/`

### Styling Conventions
- Prefer Tailwind utility classes over custom CSS
- Use dark mode classes for theme switching
- Backdrop blur and opacity for layered design effects
- Responsive design with mobile-first approach

### Content Patterns
- MDX posts with consistent frontmatter structure
- Date-based sorting for chronological content
- SEO optimization for all pages
- Gradient backgrounds for visual appeal