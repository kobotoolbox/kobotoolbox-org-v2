# kobotoolbox.org

A simple static Jekyll-powered website for KoboToolbox.

## Development

### Requirements

- [npm](https://www.npmjs.com/get-npm)
- [ruby](https://www.ruby-lang.org/en/documentation/installation/)

### Setup

1. Install dependencies:
  - `npm install` (Node packages from `package.json`)
  - `bundle install` (Ruby gems from `Gemfile`)
2. Run project:
  - building styles once: `npm run styles-build`
  - building styles continuously: `npm run styles-watch`
  - building website locally: `npm run jekyll-build` (builds to `_site` directory)
  - serving website to local development server: `npm run jekyll-serve` and go to [localhost:2038](localhost:2038)

If you want to add blog posts, just create a new one at `_posts` directory and push a commit to `master` branch. GitHub builds Jekyll automagically.

### File architecture

The files important for development:
- `_assets` - this whole directory will be transformed into `assets` used by production website
  - `images`
  - `scripts` - here we keep all `.ts` files, all imported in a single `kobo.ts` bundle file
  - `styles` - here we keep all `.scss` files, all imported in a single `kobo.scss` bundle file
    - `components` - these reflect files in `_includes/components`
    - `sections` - these reflect files in `_includes/sections`
- `_data`
  - `footer-menu-1.yml` and `footer-menu-2.yml` - these are responsible for footer links
  - `header-menu.yml` - responsible for the topmost menu
  - `team.yml` - all team members listed with their positions
- `_includes`
  - `components` - small DRY components
  - `sections` - unique and often big components, most often in a form of whole section row

