# Images Directory

## Nødvendige billeder:

### Logoer:
- saiba-logo-black.png (sort logo til light mode)
- saiba-logo-white.png (hvid logo til dark mode)
- favicon.png (favicon)

### Hero:
- hero-image.jpg (hero sektion billede)

### Team:
- team/peter-humaidan.jpg
- team/jens-jepsen.jpg
- team/gustav-friis.jpg
- team/frederik-hansson.jpg

### Klienter:
- clients/kronenbourg-1664.png
- clients/carlsberg.png
- clients/near.png

## Upload instruktioner:

1. **Via GitHub Web Interface:**
   - Gå til https://github.com/b4ltasar/saibaweb/tree/develop/assets/images
   - Klik "Add file" → "Upload files"
   - Drag & drop dine billeder

2. **Via Git Commands:**
   ```bash
   cd /Users/jens/saibaweb
   # Kopier dine billeder til assets/images/
   git add assets/images/
   git commit -m "Add website images"
   git push origin develop
   ```

3. **Direkte Upload:**
   - Kopier dine billeder til `/Users/jens/saibaweb/assets/images/`
   - Commit og push ændringerne

## Bemærk:
- Placer billeder med de angivne filnavne
- Optimal størrelse: Hero billede (1200x600px), Team billeder (400x400px)
- Format: JPG for fotos, PNG for logoer med gennemsigtighed
