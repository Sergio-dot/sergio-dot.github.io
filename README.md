# DevPortfolio

A modern, minimalist portfolio built with Astro and Tailwind CSS v4 — cloned from [RyanFitzgerald/devportfolio](https://github.com/RyanFitzgerald/devportfolio).

## Built With

- **[Astro](https://astro.build/)** - Static site generator for modern web apps
- **[Tailwind CSS v4](https://tailwindcss.com/)** - Utility-first CSS framework
- **[Tabler Icons](https://tabler.io/icons)** - Free and open source icons
- **TypeScript** - For type-safe configuration

## Configuration

All content is managed through `src/config.ts`. This single file controls:

- **Personal Information**: Name, title, description
- **Accent Color**: Primary color theme (site-wide)
- **Social Links**: Email, LinkedIn, GitHub (all optional)
- **About Section**: Personal bio/description
- **Skills**: List of technical skills
- **Projects**: Project showcase with descriptions and links
- **Experience**: Work history with bullet points
- **Education**: Educational background and achievements

Sections are hidden automatically when their data is removed from the config.

### Icons

The template uses [Tabler Icons](https://tabler.io/icons) for all icons.

## Project Structure

```
devportfolio/
├── public/
│   └── favicon.svg          # Site favicon
├── src/
│   ├── components/          # Astro components
│   │   ├── About.astro      # About section
│   │   ├── Education.astro  # Education section
│   │   ├── Experience.astro # Work experience section
│   │   ├── Footer.astro     # Site footer
│   │   ├── Header.astro     # Navigation header
│   │   ├── Hero.astro       # Hero/intro section
│   │   └── Projects.astro   # Projects showcase
│   ├── pages/
│   │   └── index.astro      # Main page layout
│   ├── styles/
│   │   └── global.css       # Global styles
│   └── config.ts            # Site configuration
├── astro.config.mjs         # Astro configuration
├── package.json             # Project dependencies
└── tsconfig.json            # TypeScript configuration
```

## License

MIT — see [LICENSE.md](LICENSE.md).
