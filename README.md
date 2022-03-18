# kobotoolbox.org

A static Jekyll-powered website for KoboToolbox.

## Development

### Requirements

- [npm](https://www.npmjs.com/get-npm)
- [ruby](https://www.ruby-lang.org/en/documentation/installation/)

### Setup

1. Install dependencies:
  - `npm install` (Node packages from `package.json`)
  - `bundle install` (Ruby gems from `Gemfile`)
2. Run project:
  - copying new files/images/videos: `npm run copy-files`
  - building assets once: `npm run assets-build`
  - building assets continuously: `npm run assets-watch`
  - building website locally: `npm run jekyll-build` (builds to `_site` directory)
  - serving website to local development server: `npm run jekyll-serve` and go to [localhost:2038](localhost:2038)

If you want to add blog posts, just create a new one at `_posts` directory and push a commit to `master` branch. 

GitHub builds Jekyll automagically.

### File architecture

The files important for development:
- `_assets` - this whole directory will be transformed into `assets` used by production website
  - `files`
    - `blog` - for blog posts
  - `images`
    - `blog` - for blog posts
  - `videos`
    - `blog` - for blog posts
  - `scripts` - here we keep all `.ts` files, all imported in a single `kobo.ts` bundle file
  - `styles` - here we keep all `.scss` files, all imported in a single `kobo.scss` bundle file
    - `components` - these reflect files in `_includes/components`
    - `sections` - these reflect files in `_includes/sections`
- `_data`
  - `faqs.json`
  - `features.json`
  - `footer-menu-inv.json` and `footer-menu-org.json` - these are responsible for footer links
  - `header-menu.json` - responsible for the topmost menu
  - `home-words.json` - for the word typing plugin in home page banner
  - `partners.json` - list of all our partners
  - `quick-links-about-us.json`, `quick-links-help.json`, and `quick-links-home.json` - all for their respective sections
  - `social-accounts.json` - our social accounts, for footer and for post sharing
  - `team.json` - all team members listed with their positions
- `_includes`
  - `components` - small DRY components
  - `sections` - unique and often big components, most often in a form of whole section row
  - `setup` - layout stuff
  - `svgs` - a few small svgs used in the site design/architecture that are not content-related
  - `image.liquid`, and `video.liquid` - two components to be used in blog posts for image and video displaying

