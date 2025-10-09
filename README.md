# SAIBA - AI Konsulentbureau Website

En moderne, responsiv hjemmeside for SAIBA AI-konsulentbureau bygget med Jekyll og GitHub Pages.

## Features

- 🎨 **Moderne Design**: Skarp og moderne visuel stil baseret på de medsendte referencer
- 🌓 **Dark/Light Mode**: Automatisk tema-skift med gradient grid baggrund
- 📱 **Fuldstændig Responsiv**: Optimaliseret til alle enheder og skærmstørrelser
- ⚡ **Hurtig Performance**: Optimeret til hurtig loading og gnidningsfri brugeroplevelse
- 🎯 **Interaktive Sektioner**: 
  - AI Facts område med klikbare facts om AI-fordele
  - Anden ekstraordinær sektion (kan udvides)
- 🔧 **Nem Indholdsstyring**: YAML-baseret indhold via Jekyll collections
- 🌐 **GitHub Pages Ready**: Direkte deployment til GitHub Pages

## Struktur

```
saibaweb/
├── _config.yml          # Jekyll konfiguration
├── _layouts/            # HTML layouts
├── _collections/        # Indholds-collections (services, team, clients)
├── assets/              # CSS, JS og billeder
│   ├── css/
│   ├── js/
│   └── images/
├── index.html           # Forside
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

## Indholdsstyring

### Services
Rediger services i `_collections/services/` mappen eller direkte i `index.html`

### Team Members
Tilføj team members i `_collections/team/` mappen

### Clients
Tilføj klienter i `_collections/clients/` mappen

### Billeder
Placer billeder i `assets/images/` med følgende struktur:
- `assets/images/team/` - Team billeder
- `assets/images/clients/` - Klient logoer
- `assets/images/` - Generelle billeder

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
