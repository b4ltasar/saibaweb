# SAIBA Website

/
├── public/
│   ├── fonts/               # Inter font files
│   ├── videos/              # Hero background video
│   └── images/partners/     # Partner logos
├── src/
│   ├── components/
│   │   ├── Header.astro     # Navigation med sprogskift
│   │   ├── Footer.astro     # Footer med CTA
│   │   ├── ServiceCard.astro # Service kort komponenter
│   │   ├── ContactForm.astro # Kontaktformular
│   │   └── PartnerLogos.astro # Partner sektion
│   ├── i18n/
│   │   └── index.ts         # Oversættelser DA/EN
│   ├── layouts/
│   │   └── BaseLayout.astro # Hoved layout med SEO
│   ├── pages/
│   │   ├── index.astro      # Dansk forside
│   │   ├── en/index.astro   # Engelsk forside
│   │   └── contact.astro    # Kontakt side
│   ├── styles/
│   │   └── global.css       # Global styles og animationer
│   └── utils/
│       └── i18n.ts          # Internationalisering utils
└── astro.config.mjs         # Astro konfiguration
```
