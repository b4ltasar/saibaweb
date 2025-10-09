# SAIBA Website - Professional Deployment Guide

## 🚀 Professional Workflow med Pull Requests

### 📋 Setup Oversigt

- **Develop Branch**: Test site på `https://b4ltasar.github.io/saibaweb-develop`
- **Main Branch**: Live site på dit eget domæne (f.eks. `saiba.dk`)
- **Pull Request Workflow**: Review før merge til main

### 🔄 Professional Workflow

#### 1. **Development & Testing**
```bash
# Arbejd på develop branch
git checkout develop

# Lav dine ændringer
# ... rediger filer ...

# Commit og push til develop
git add .
git commit -m "feat: tilføj ny sektion til services"
git push origin develop
```

**Resultat**: Automatisk deployment til test site med rød "DEVELOPMENT" banner

#### 2. **Create Pull Request**
```bash
# Opret en feature branch fra develop (optional, men anbefalet)
git checkout -b feature/new-section
git push origin feature/new-section
```

**Eller direkte fra develop:**
- Gå til GitHub repository
- Klik "Compare & pull request" fra develop → main
- Skriv beskrivelse af ændringerne
- Assign reviewers hvis nødvendigt

#### 3. **Review & Merge**
- Review ændringerne på GitHub
- Test på development site først
- Når godkendt: Merge PR til main

**Resultat**: Automatisk deployment til live domæne

### 🌐 URLs

- **Development**: https://b4ltasar.github.io/saibaweb-develop
- **Production**: https://saiba.dk (dit eget domæne)

### 🎯 GitHub Pages Setup

1. Gå til **Settings** > **Pages** i dit repository
2. Vælg **Source**: "GitHub Actions"
3. Under **Custom domain**: Indtast dit domæne (f.eks. `saiba.dk`)
4. Check "Enforce HTTPS"

### 🔧 Custom Domain Setup

#### DNS Konfiguration:
```
Type: CNAME
Name: www (eller @)
Value: b4ltasar.github.io
TTL: 3600
```

#### Alternativ (A records):
```
Type: A
Name: @
Value: 185.199.108.153
Value: 185.199.109.153
Value: 185.199.110.153
Value: 185.199.111.153
```

### 📝 Features

#### Development Mode:
- ✅ Rød "DEVELOPMENT VERSION" banner
- ✅ [DEVELOPMENT] i page title
- ✅ Separate URL for testing
- ✅ Alle ændringer testes før live

#### Production Mode:
- ✅ Ren, professionel hjemmeside
- ✅ Dit eget domæne
- ✅ Optimaliseret til SEO
- ✅ Ingen development indikatorer

### 🔧 Lokal Testing

```bash
# Install dependencies
bundle install

# Test production build
bundle exec jekyll serve --config _config.yml,_config_production.yml

# Test development build
bundle exec jekyll serve --config _config.yml,_config_develop.yml
```

### 📁 Branch Strategy

- **main**: Live production site (dit domæne)
- **develop**: Development og testing
- **feature/***: Feature branches for specifikke ændringer

### 🚨 Vigtige Noter

1. **Altid test på develop først**
2. **Brug Pull Requests for alle ændringer til main**
3. **Development site har rød banner for klarhed**
4. **Custom domæne kun aktiv på main branch**
5. **Automatic deployment via GitHub Actions**

### 🔄 Complete Workflow Example

```bash
# 1. Start development
git checkout develop
# ... lav ændringer ...
git add .
git commit -m "feat: tilføj kontaktformular validering"
git push origin develop

# 2. Test på: https://b4ltasar.github.io/saibaweb-develop

# 3. Opret Pull Request
# Gå til GitHub → "Compare & pull request" develop → main

# 4. Review og merge PR

# 5. Live på: https://saiba.dk
```

### 🆘 Troubleshooting

**Custom domain virker ikke**:
- Check DNS settings (kan tage 24-48 timer)
- Verify CNAME file er korrekt
- Check GitHub Pages settings

**Site vises ikke**:
- Check GitHub Actions tab for build errors
- Verify Pages settings i repository settings

**Changes vises ikke**:
- Wait 2-5 minutes for GitHub Pages deployment
- Check if you're on the right branch
- Clear browser cache

**Build fejler**:
- Check Jekyll syntax in your files
- Verify all required images are uploaded
- Check GitHub Actions logs

### 📋 Checklist for Go-Live

- [ ] Test alle ændringer på develop site
- [ ] Review Pull Request grundigt
- [ ] Verify custom domain DNS settings
- [ ] Check GitHub Pages settings
- [ ] Test HTTPS redirect
- [ ] Verify SEO settings
- [ ] Test på forskellige enheder