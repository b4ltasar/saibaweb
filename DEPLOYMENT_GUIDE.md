# SAIBA Website - Deployment Guide

## GitHub Pages Deployment

### Trin 1: Repository Setup
Repositoryet hedder allerede `saibaweb`, så du er klar til deployment.

### Trin 2: Konfigurer GitHub Pages

1. **Gå til GitHub repository settings**:
   - Naviger til `https://github.com/yourusername/saibaweb/settings/pages`

2. **Vælg Source**:
   - Source: "Deploy from a branch"
   - Branch: `main` (eller `master`)
   - Folder: `/root`
   - Klik "Save"

3. **Custom Domain (valgfrit)**:
   - Hvis du har et custom domain (fx saiba.dk):
     - Indtast domænet i "Custom domain" feltet
     - Opdater din DNS med følgende:
       ```
       A record: 185.199.108.153
       A record: 185.199.109.153
       A record: 185.199.110.153
       A record: 185.199.111.153
       CNAME record: yourusername.github.io
       ```

### Trin 3: Opdater _config.yml

Hvis du bruger custom domain (saiba.dk):
```yaml
baseurl: ""
url: "https://saiba.dk"
```

Hvis du bruger GitHub Pages subdomain:
```yaml
baseurl: "/saibaweb"
url: "https://yourusername.github.io"
```

### Trin 4: Deploy

```bash
git add .
git commit -m "Deploy website"
git push origin main
```

Din hjemmeside vil være tilgængelig om få minutter på:
- Med custom domain: `https://saiba.dk`
- Uden custom domain: `https://yourusername.github.io/saibaweb`

## Lokal Test Før Deployment

Test altid lokalt før deployment:

```bash
# Install dependencies
bundle install

# Serve locally
bundle exec jekyll serve

# Tjek på http://localhost:4000
```

## Almindelige Problemer

### Problem 1: Styles ikke loaded
- Tjek at `baseurl` i `_config.yml` er korrekt
- Hvis custom domain: `baseurl: ""`
- Hvis GitHub subdomain: `baseurl: "/saibaweb"`

### Problem 2: 404 fejl
- Vent 5-10 minutter efter første deployment
- Tjek GitHub Actions fanen for build errors

### Problem 3: Custom domain virker ikke
- Verificer DNS settings
- Tjek at CNAME filen eksisterer i root
- Enable "Enforce HTTPS" i GitHub Pages settings

## Continuous Deployment

Hver gang du pusher til `main` branch, rebuilder GitHub Pages automatisk din site.

## Branches Strategi

**Development Workflow**:
```bash
# Udvikling på develop branch
git checkout -b develop
# ... make changes ...
git add .
git commit -m "Add new feature"
git push origin develop

# Når klar til production
git checkout main
git merge develop
git push origin main
```

## Performance Optimization

1. **Minify CSS/JS** (valgfrit):
   ```yaml
   # I _config.yml
   sass:
     style: compressed
   ```

2. **Optimize Images**:
   - Brug WebP format
   - Max width: 1200px
   - Compress med ImageOptim eller lignende

3. **Enable GitHub Pages CDN**:
   - Automatisk enabled når du bruger GitHub Pages

## Analytics Setup (valgfrit)

1. Få Google Analytics ID
2. Tilføj til `_config.yml`:
   ```yaml
   google_analytics: UA-XXXXXXXXX-X
   ```

## SEO Checklist

- ✅ Meta descriptions på alle sider
- ✅ SEO plugin (jekyll-seo-tag) installed
- ✅ Sitemap genereres automatisk
- ✅ Robots.txt (standard tillader alt)
- ⬜ Submit sitemap til Google Search Console
- ⬜ Submit til Bing Webmaster Tools

## Monitoring

Efter deployment, tjek:
- [ ] Alle links virker
- [ ] Formular sender korrekt
- [ ] Mobile responsiveness
- [ ] Load time (bør være < 3 sekunder)
- [ ] HTTPS virker

## Support & Vedligeholdelse

**Månedlige Tasks**:
1. Opdater Jekyll og dependencies: `bundle update`
2. Tjek for broken links
3. Review Google Analytics
4. Backup repository

**Links**:
- [Jekyll Documentation](https://jekyllrb.com/docs/)
- [GitHub Pages Documentation](https://docs.github.com/pages)
- [GitHub Actions Status](https://github.com/yourusername/saibaweb/actions)

