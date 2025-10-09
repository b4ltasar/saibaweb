# SAIBA Website - Deployment Guide

## 🚀 Workflow for Testing og Live Deployment

### 📋 Setup Oversigt

- **Develop Branch**: Test site på `https://b4ltasar.github.io/saibaweb-develop`
- **Main Branch**: Live site på `https://b4ltasar.github.io/saibaweb` (eller dit custom domæne)

### 🔄 Workflow

#### 1. **Development & Testing**
```bash
# Arbejd på develop branch
git checkout develop

# Lav dine ændringer
# ... rediger filer ...

# Commit og push til develop
git add .
git commit -m "Describe your changes"
git push origin develop
```

**Resultat**: Automatisk deployment til test site med rød "DEVELOPMENT" banner

#### 2. **Go Live**
```bash
# Når du er tilfreds med ændringerne
git checkout main
git merge develop
git push origin main
```

**Resultat**: Automatisk deployment til live site uden development banner

### 🌐 URLs

- **Development**: https://b4ltasar.github.io/saibaweb-develop
- **Production**: https://b4ltasar.github.io/saibaweb

### 🎯 GitHub Pages Setup

1. Gå til **Settings** > **Pages** i dit repository
2. Vælg **Source**: "GitHub Actions"
3. Workflow filerne er allerede konfigureret!

### 📝 Features

#### Development Mode:
- ✅ Rød "DEVELOPMENT VERSION" banner
- ✅ [DEVELOPMENT] i page title
- ✅ Separate URL for testing
- ✅ Alle ændringer testes før live

#### Production Mode:
- ✅ Ren, professionel hjemmeside
- ✅ Optimaliseret til SEO
- ✅ Ingen development indikatorer

### 🔧 Lokal Testing

```bash
# Install dependencies
bundle install

# Test production build
bundle exec jekyll serve

# Test development build
bundle exec jekyll serve --config _config.yml,_config_develop.yml
```

### 📁 Branch Strategy

- **develop**: Development og testing
- **main**: Live production site
- **feature/***: Feature branches (optional)

### 🚨 Vigtige Noter

1. **Altid test på develop først**
2. **Merge kun til main når du er tilfreds**
3. **Development site har rød banner for klarhed**
4. **Automatic deployment via GitHub Actions**

### 🆘 Troubleshooting

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
