# SAIBA Website

Et hurtigt, optimeret Astro website med internationalisering og fokus på performance.

## 🚀 Tekniske Valg

- **Astro 4.x** - Static Site Generation for optimal hastighed
- **TypeScript** - Type safety og bedre developer experience  
- **Tailwind CSS** - Utility-first CSS med minimal bundle size
- **Inter Font** - Lokal WOFF2 font loading
- **Internationalisering** - DA/EN sprog support
- **Formspree Integration** - Fungerende kontaktformularer
- **Plausible Analytics** - Privacy-first analytics

## 📁 Projekt Struktur

```
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

## 🛠️ Setup

```bash
# Install dependencies
npm install

# Copy environment variables
cp .env.example .env

# Start development server
npm run dev

# Build for production
npm run build

# Preview production build
npm run preview
```

## 🌍 Internationalisering

- **Dansk (DA)**: Standard på `/` 
- **Engelsk (EN)**: På `/en/`
- Sprogskift i header
- Alle tekster centraliseret i `src/i18n/index.ts`

## 📝 Indhold der mangler

Du skal tilføje følgende filer:

### Fonts
- `public/fonts/inter-var.woff2` - Inter Variable font

### Video & Billeder  
- `public/videos/hero-video.mp4` - Hero baggrundsvideo
- `public/images/hero-poster.jpg` - Video fallback billede
- `public/images/partners/` - Partner logoer (SVG format)

### Environment Variables
```bash
# .env fil
VITE_FORMS_ENDPOINT=https://formspree.io/f/YOUR_FORM_ID
```

## ⚡ Performance Features

- **Lighthouse 95+ score** optimeret
- **Minimal JavaScript** - Kun hvor nødvendigt
- **Optimeret CSS** - Tailwind purging
- **Font Display Swap** - Hurtig font loading
- **Video Optimization** - Compressed hero video
- **Image Optimization** - WebP/AVIF support

## 🎨 Design System

Baseret på dit Figma design:
- **Farver**: Hvid, grå nuancer, navy footer (#0D1224)
- **Typography**: Inter font med optimal spacing
- **Komponenter**: Modulære, genbrugelige kort
- **Animationer**: Subtile fade-in effekter
- **Responsive**: Mobile-first approach

## 📊 Analytics

Plausible analytics er konfigureret og deaktiveret på previews.

## 🔧 Næste Steps

1. **Tilføj manglende assets** (font, video, billeder)
2. **Konfigurer Formspree** for kontaktformular
3. **Tilføj partner logoer**
4. **Test Lighthouse scores**
5. **Deploy til produktion**

Strukturen er klar til at modtage dit indhold og kan nemt udvides med flere sider!