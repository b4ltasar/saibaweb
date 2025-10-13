# SAIBA - AI Konsulentbureau Website

En moderne, professionel hjemmeside for SAIBA AI-konsulentbureau bygget med Jekyll og GitHub Pages.

## ✨ Features

- 🎨 **Moderne Design**: Professionelt og moderne UI/UX design
- 📱 **Fuldstændig Responsiv**: Optimeret til alle enheder og skærmstørrelser
- ⚡ **Hurtig Performance**: Optimeret til hurtig loading og gnidningsfri brugeroplevelse
- 🎯 **Interaktive Elementer**: 
  - AI Facts sektion med dynamiske statistikker
  - Smooth scrolling navigation
  - Animerede komponenter
- 🔧 **YAML-Baseret Indhold**: Nem indholdsstyring via YAML data filer
- 📊 **SEO Optimeret**: Jekyll SEO plugin med sitemap og meta tags
- 🌐 **GitHub Pages Ready**: Automatisk deployment
- 📧 **Kontaktformular**: Integreret med Formspree
- 🎭 **Mobile Menu**: Drawer navigation til mobile enheder

## 📁 Struktur

```
saibaweb/
├── _config.yml              # Jekyll konfiguration
├── _layouts/                # HTML layouts
│   └── default.html         # Main layout
├── _includes/               # Genbrugelige komponenter
│   ├── head.html            # HTML head section
│   ├── header.html          # Site header & navigation
│   ├── footer.html          # Site footer
│   └── analytics.html       # Analytics scripts
├── _data/                   # YAML data filer
│   ├── services.yml         # Services/ydelser
│   ├── team.yml             # Team medlemmer
│   ├── clients.yml          # Kunder
│   ├── navigation.yml       # Navigation links
│   ├── contact.yml          # Kontakt information
│   └── ai_facts.yml         # AI statistikker
├── assets/                  # Statiske filer
│   ├── css/
│   │   └── main.css         # Main stylesheet
│   ├── js/
│   │   └── main.js          # JavaScript
│   └── images/              # Billeder
├── index.html               # Forside
├── 404.html                 # 404 error page
├── CNAME                    # Custom domain
├── robots.txt               # SEO robots file
├── DEPLOYMENT_GUIDE.md      # Deployment guide
└── README.md
```

## Lokal Udvikling

1. **Installer Ruby og Jekyll**:
   ```bash
   gem install jekyll bundler
   ```

2. **Installer dependencies**:
   ```bash
   bundle install
   ```

3. **Start lokal server**:
   ```bash
   bundle exec jekyll serve
   ```

4. **Åbn i browser**: `http://localhost:4000`

## GitHub Pages Deployment

### Setup Branches

1. **Opret repository** på GitHub med navnet `saibaweb`
2. **Push til develop branch** for testing:
   ```bash
   git checkout -b develop
   git add .
   git commit -m "Initial commit"
   git push origin develop
   ```
3. **Merge til main** for live deployment:
   ```bash
   git checkout main
   git merge develop
   git push origin main
   ```

### GitHub Pages Konfiguration

1. Gå til **Settings** > **Pages** i dit GitHub repository
2. Vælg **Source**: "Deploy from a branch"
3. Vælg **Branch**: "main" / "root"
4. Vælg **Theme**: "None" (vi bruger custom CSS)
5. Gem indstillingerne

## 📝 Indholdsstyring

Alt indhold styres via YAML filer i `_data/` mappen:

### Services (`_data/services.yml`)
```yaml
- icon: "🎯"
  title: "Workshop Title"
  description: "Description here"
  features:
    - "Feature 1"
    - "Feature 2"
```

### Team (`_data/team.yml`)
```yaml
- name: "Name"
  initials: "XX"
  role: "Role"
  bio: "Bio text"
```

### Clients (`_data/clients.yml`)
```yaml
- name: "Client Name"
  icon: "🏢"
  logo: "/path/to/logo.png"
```

### Navigation (`_data/navigation.yml`)
```yaml
- title: "Menu Item"
  url: "#section"
```

### Kontakt (`_data/contact.yml`)
```yaml
phone: "+45 XXXXXXXX"
email: "email@example.com"
address: "Address"
```

## Customization

### Farver og Typografi
Rediger CSS variabler i `assets/css/main.css`:

```css
:root {
  --bg: #ffffff;
  --text: #000000;
  --accent: #007bff;
  /* ... */
}
```

### AI Facts
Tilføj nye facts i `assets/js/main.js`:

```javascript
const aiFacts = [
  {
    text: "Din nye fact her",
    source: "Kilde"
  }
  // ...
];
```

## Performance Optimering

- Lazy loading på billeder
- Minificeret CSS og JS
- Optimerede billedstørrelser
- Debounced scroll events
- Intersection Observer for animationer

## Browser Support

- Chrome (latest)
- Firefox (latest)
- Safari (latest)
- Edge (latest)

## Licens

© 2024 SAIBA ApS. Alle rettigheder forbeholdes.
