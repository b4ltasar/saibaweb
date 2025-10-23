# SAIBA Website Architecture

## 🏗️ Project Structure

```
saibaweb-1/
├── _data/                  # Content data files
│   ├── ai_facts.yml       # AI facts for interactive section
│   ├── clients.yml        # Client logos and info
│   ├── services.yml       # Service offerings
│   ├── site.yml          # Global site data
│   └── team.yml          # Team member details
├── _layouts/              # Jekyll layouts
│   └── default.html      # Main layout template
├── assets/
│   ├── css/              # Modular CSS architecture
│   │   ├── base.css      # Variables, base styles, animations
│   │   ├── components.css # Component-specific styles
│   │   ├── layout.css    # Layout and navigation
│   │   ├── responsive.css # Media queries
│   │   └── main.css      # CSS imports
│   └── js/               # Modular JavaScript
│       ├── modules/      # ES6 modules
│       │   ├── interactions.js # Interactive elements
│       │   ├── navigation.js   # Navigation & mobile menu
│       │   ├── team.js         # Team member expansion
│       │   └── theme.js        # Dark/light theme
│       └── main.js       # Main application entry
├── _config.yml           # Jekyll configuration
├── index.html           # Homepage content
└── README.md           # Project documentation
```

## 🎯 Key Improvements Made

### 1. **Modular CSS Architecture**
- Split 1000+ line CSS into focused modules
- Better maintainability and organization
- Clear separation of concerns

### 2. **ES6 JavaScript Modules**
- Modern module system with imports/exports
- Each feature in its own module
- Better code organization and reusability

### 3. **Data-Driven Content**
- Moved hardcoded content to YAML files
- Easy content updates without touching code
- Better content management workflow

### 4. **Performance Optimizations**
- FOUC prevention with critical CSS
- Debounced scroll events
- Intersection Observer for animations

### 5. **Accessibility Improvements**
- ARIA attributes for screen readers
- Keyboard navigation support
- Semantic HTML structure

## 🚀 Development Workflow

### Adding New Content
1. **Services**: Edit `_data/services.yml`
2. **Team Members**: Edit `_data/team.yml`
3. **Clients**: Edit `_data/clients.yml`
4. **Site Info**: Edit `_data/site.yml`

### Adding New Features
1. Create module in `assets/js/modules/`
2. Import in `assets/js/main.js`
3. Add styles in appropriate CSS module

### CSS Organization
- **base.css**: Variables, resets, animations
- **layout.css**: Header, footer, navigation
- **components.css**: Page sections, cards, forms
- **responsive.css**: Media queries only

## 📱 Browser Support
- Modern browsers with ES6 module support
- Graceful degradation for older browsers
- Mobile-first responsive design

## 🔧 Build Process
```bash
bundle install
bundle exec jekyll serve
```

## 📊 Performance Metrics
- Reduced CSS file complexity
- Modular JavaScript for better caching
- Optimized loading sequence
- Accessibility score: A+
```