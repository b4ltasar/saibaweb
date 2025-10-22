// Theme-like i18n system - works like dark mode
class LanguageTheme {
    constructor() {
        this.currentLang = localStorage.getItem('saiba-lang') || 'da';
        this.translations = {
            da: {
                nav: {
                    services: "Ydelser",
                    team: "Team", 
                    clients: "Kunder",
                    contact: "Kontakt"
                },
                hero: {
                    subtitle: "Fra hverdagens rutiner til ekstraordinære superkræfter med AI for dine medarbejdere",
                    title: "Vi gentænker måden, vi arbejder på. Med mennesker i centrum og teknologi som motor.",
                    cta: "Kontakt"
                },
                services: {
                    title: "Fra strategi til implementering",
                    description: "Vi leverer komplette AI-løsninger der passer til jeres specifikke behov og forretningsmål.",
                    card1: {
                        title: "Workshops & Bootcamps",
                        description: "Få overblik og indsigt i AI-teknologiens potentiale"
                    },
                    card2: {
                        title: "Skræddersyede Forløb",
                        description: "Fra viden til konkrete use cases i din virksomhed"
                    },
                    card3: {
                        title: "Strategi & Implementering",
                        description: "Omsæt teknologi til konkrete resultater og værdi"
                    },
                    card4: {
                        title: "Produktudvikling",
                        description: "Vi udvikler og bygger AI-løsninger med jer"
                    }
                },
                optimization: {
                    title: "Optimér jeres forretningsprocesser",
                    description: "Udforsk AI's potentiale gennem interaktive cases. Klik rundt i området nedenfor og se konkrete eksempler på, hvordan AI kan optimere jeres specifikke forretningsområder.",
                    cta: "Klik og se hvorfor AI kan forbedre din virksomhed"
                },
                team: {
                    titleLine1: "Identificer jeres",
                    titleLine2: "AI-potentiale",
                    subtitle1: "Accelerer jeres fremgang",
                    subtitle2: "med AI-ekspertise",
                    description: "SAIBA's erfarne team af AI-konsulenter og teknologiske eksperter er dedikeret til at hjælpe jer med at overvinde jeres forretningsudfordringer og frigøre AI's fulde potentiale for jeres virksomhed.",
                    cta: "Se vores team"
                },
                clients: {
                    title: "I samarbejde med",
                    subtitle: "Vi stolte partnere der har valgt at transformere deres forretning med AI"
                },
                contact: {
                    title: "Book et møde",
                    description: "Kontakt os for at høre mere om hvordan vi kan hjælpe din virksomhed med AI-implementering."
                },
                form: {
                    nameLabel: "Navn *",
                    namePlaceholder: "Dit navn",
                    emailLabel: "Email *",
                    emailPlaceholder: "din.email@example.com",
                    phoneLabel: "Telefon (valgfri)",
                    phonePlaceholder: "Dit telefonnummer",
                    messageLabel: "Besked *",
                    messagePlaceholder: "Hvordan kan vi hjælpe dig?",
                    submit: "Send",
                    disclaimer: "Ved at indsende denne formular accepterer du vores privatlivspolitik og servicevilkår."
                },
                footer: {
                    contact: "Kontakt",
                    links: "Links",
                    copyright: "Alle rettigheder forbeholdes."
                }
            },
            en: {
                nav: {
                    services: "Services",
                    team: "Team",
                    clients: "Clients", 
                    contact: "Contact"
                },
                hero: {
                    subtitle: "From everyday routines to extraordinary superpowers with AI for your employees",
                    title: "We rethink the way we work. With people at the center and technology as the engine.",
                    cta: "Get in touch"
                },
                services: {
                    title: "From strategy to implementation",
                    description: "We deliver complete AI solutions that fit your specific needs and business goals.",
                    card1: {
                        title: "Workshops & Bootcamps",
                        description: "Get an overview and insight into AI technology's potential"
                    },
                    card2: {
                        title: "Customized Programs",
                        description: "From knowledge to concrete use cases in your company"
                    },
                    card3: {
                        title: "Strategy & Implementation",
                        description: "Turn technology into concrete results and value"
                    },
                    card4: {
                        title: "Product Development",
                        description: "We develop and build AI solutions with you"
                    }
                },
                optimization: {
                    title: "Optimize your business processes",
                    description: "Explore AI's potential through interactive cases. Click around in the area below and see concrete examples of how AI can optimize your specific business areas.",
                    cta: "Click and see why AI can improve your business"
                },
                team: {
                    titleLine1: "Identify your",
                    titleLine2: "AI potential",
                    subtitle1: "Accelerate your progress",
                    subtitle2: "with AI expertise",
                    description: "SAIBA's experienced team of AI consultants and technology experts is dedicated to helping you overcome your business challenges and unlock AI's full potential for your company.",
                    cta: "See our team"
                },
                clients: {
                    title: "In collaboration with",
                    subtitle: "Our trusted partners who have chosen to transform their business with AI"
                },
                contact: {
                    title: "Book a meeting",
                    description: "Contact us to hear more about how we can help your company with AI implementation."
                },
                form: {
                    nameLabel: "Name *",
                    namePlaceholder: "Your name",
                    emailLabel: "Email *",
                    emailPlaceholder: "your.email@example.com",
                    phoneLabel: "Phone (optional)",
                    phonePlaceholder: "Your phone number",
                    messageLabel: "Message *",
                    messagePlaceholder: "How can we help you?",
                    submit: "Send",
                    disclaimer: "By submitting this form you accept our privacy policy and terms of service."
                },
                footer: {
                    contact: "Contact",
                    links: "Links",
                    copyright: "All rights reserved."
                }
            }
        };
        
        this.aiFacts = {
            da: [
        { title: "PRODUKTIVITET", text: "AI kan øge produktiviteten med op til 40% i administrative opgaver", source: "McKinsey Global Institute" },
        { title: "OMKOSTNINGER", text: "61% af virksomheder rapporterer betydelige omkostningsbesparelser efter AI-implementering", source: "MIT Sloan Management Review" },
        { title: "KUNDETILFREDS", text: "Virksomheder med AI-integration har 23% højere kundetilfredshed", source: "Salesforce Research" },
        { title: "BESLUTNINGER", text: "AI accelererer beslutningsprocesser med op til 25% hurtigere workflows", source: "Deloitte Insights" },
        { title: "TIDSBESPARELSE", text: "AI-automation kan frigøre op til 30% af medarbejdernes tid til strategiske opgaver", source: "World Economic Forum" },
        { title: "FEJLREDUKTION", text: "AI reducerer fejlraten med 85% i dataanalyse og rapportering", source: "IBM Institute for Business Value" },
        { title: "ROI", text: "Virksomheder med AI har 35% bedre ROI på deres digitale investeringer", source: "Accenture Research" },
        { title: "FORUDSIGELSE", text: "AI kan forudsige kundeadfærd med 95% nøjagtighed", source: "Forrester Research" },
        { title: "OPERATIONER", text: "Implementering af AI resulterer i 20% reduktion i operationelle omkostninger", source: "PwC Global AI Survey" },
                { title: "INNOVATION", text: "AI-driven virksomheder lancere produkter 50% hurtigere end traditionelle", source: "Harvard Business Review" }
            ],
            en: [
                { title: "PRODUCTIVITY", text: "AI can increase productivity by up to 40% in administrative tasks", source: "McKinsey Global Institute" },
                { title: "COSTS", text: "61% of companies report significant cost savings after AI implementation", source: "MIT Sloan Management Review" },
                { title: "CUSTOMER SATISFACTION", text: "Companies with AI integration have 23% higher customer satisfaction", source: "Salesforce Research" },
                { title: "DECISIONS", text: "AI accelerates decision processes with up to 25% faster workflows", source: "Deloitte Insights" },
                { title: "TIME SAVINGS", text: "AI automation can free up to 30% of employees' time for strategic tasks", source: "World Economic Forum" },
                { title: "ERROR REDUCTION", text: "AI reduces error rates by 85% in data analysis and reporting", source: "IBM Institute for Business Value" },
                { title: "ROI", text: "Companies with AI have 35% better ROI on their digital investments", source: "Accenture Research" },
                { title: "PREDICTION", text: "AI can predict customer behavior with 95% accuracy", source: "Forrester Research" },
                { title: "OPERATIONS", text: "AI implementation results in 20% reduction in operational costs", source: "PwC Global AI Survey" },
                { title: "INNOVATION", text: "AI-driven companies launch products 50% faster than traditional ones", source: "Harvard Business Review" }
            ]
        };
        
        this.factIndex = 0;
        this.activeFacts = [];
    }
    
    // Apply language theme - like applying dark mode
    apply() {
        document.documentElement.setAttribute('lang', this.currentLang);
        document.documentElement.classList.toggle('lang-en', this.currentLang === 'en');
        document.documentElement.classList.toggle('lang-da', this.currentLang === 'da');
        
        // Update all text elements
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            const value = this.getTranslation(key);
            if (value) el.textContent = value;
        });
        
        // Update placeholders
        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            const value = this.getTranslation(key);
            if (value) el.setAttribute('placeholder', value);
        });
        
        // Update toggle buttons
        const langText = document.querySelector('.lang-text');
        const drawerLangText = document.querySelector('.mobile-drawer-lang-text');
        if (langText) langText.textContent = this.currentLang === 'da' ? 'EN' : 'DA';
        if (drawerLangText) drawerLangText.textContent = this.currentLang === 'da' ? 'EN' : 'DA';
    }
    
    // Get translation by key path
    getTranslation(key) {
        const parts = key.split('.');
        let value = this.translations[this.currentLang];
        for (const part of parts) {
            value = value?.[part];
        }
        return value;
    }
    
    // Toggle language - like toggling dark mode
    toggle() {
        this.currentLang = this.currentLang === 'da' ? 'en' : 'da';
        localStorage.setItem('saiba-lang', this.currentLang);
        this.apply();
    }
    
    // Get current AI facts
    getCurrentAiFacts() {
        return this.aiFacts[this.currentLang];
    }
}

// Initialize language theme
const langTheme = new LanguageTheme();

// Header scroll logic
let lastScrollY = window.scrollY;
let ticking = false;

function updateHeader() {
    const header = document.querySelector('.site-header');
    if (!header) return;
    
    const currentScrollY = window.scrollY;
    
    if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // Scrolling down - hide header
        header.classList.add('hidden');
    } else {
        // Scrolling up - show header
        header.classList.remove('hidden');
    }
    
    lastScrollY = currentScrollY;
    ticking = false;
}

function requestTick() {
    if (!ticking) {
        requestAnimationFrame(updateHeader);
        ticking = true;
    }
}

// Initialize everything
document.addEventListener('DOMContentLoaded', function() {
    // Apply language theme
    langTheme.apply();
    
    // Setup header scroll
    window.addEventListener('scroll', requestTick);
    
    // Setup language toggles
    const toggleBtns = [
        document.getElementById('languageToggle'),
        document.getElementById('mobileDrawerLangToggle')
    ].filter(Boolean);
    
    toggleBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            langTheme.toggle();
        });
    });
    
    // AI Facts click handler
    const interactiveArea = document.querySelector('.interactive-area');
    if (interactiveArea) {
        interactiveArea.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            const rect = interactiveArea.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const facts = langTheme.getCurrentAiFacts();
            const fact = facts[langTheme.factIndex];
            langTheme.factIndex = (langTheme.factIndex + 1) % facts.length;
            
            const factBox = document.createElement('div');
            factBox.className = 'dynamic-fact-box';
            factBox.style.position = 'absolute';
            factBox.style.left = (x - 160) + 'px';
            factBox.style.top = (y - 100) + 'px';
            factBox.style.background = 'white';
            factBox.style.border = '2px solid black';
            factBox.style.padding = '22px';
            factBox.style.borderRadius = '8px';
            factBox.style.maxWidth = '320px';
            factBox.style.zIndex = '1000';
            factBox.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
            factBox.style.fontFamily = "'Press Start 2P', monospace";
            factBox.style.fontSize = '12px';
            factBox.style.lineHeight = '1.5';
            factBox.style.opacity = '0';
            factBox.style.transform = 'scale(0.8) translateY(20px)';
            factBox.style.transition = 'all 0.5s ease';
            
            factBox.innerHTML = `<div style="font-size: 13px; margin-bottom: 10px;">${fact.title}</div>${fact.text}<br><br><div style="font-size: 9px; opacity: 0.7;">${fact.source}</div>`;
            
            interactiveArea.appendChild(factBox);
            langTheme.activeFacts.push(factBox);
            
            setTimeout(() => {
                factBox.style.opacity = '1';
                factBox.style.transform = 'scale(1) translateY(0)';
            }, 10);
            
            setTimeout(() => {
                factBox.style.opacity = '0';
                factBox.style.transform = 'scale(0.8) translateY(-20px)';
                setTimeout(() => {
                    factBox.remove();
                    langTheme.activeFacts = langTheme.activeFacts.filter(f => f !== factBox);
                }, 500);
            }, 8000);
        });
    }
});