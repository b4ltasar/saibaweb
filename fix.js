// Simple and clean language toggle system
let isEnglish = false;

// Essential translations only
const translations = {
    'Ydelser': 'Services',
    'Team': 'Team', 
    'Kunder': 'Clients',
    'Kontakt': 'Contact',
    'Get in touch': 'Kontakt',
    'Book et møde': 'Book a meeting',
    'Fra strategi til implementering': 'From strategy to implementation',
    'Vi leverer komplette AI-løsninger der passer til jeres specifikke behov og forretningsmål.': 'We deliver complete AI solutions that fit your specific needs and business goals.',
    'Optimér jeres forretningsprocesser': 'Optimize your business processes',
    'Udforsk AI\'s potentiale gennem interaktive cases. Klik rundt i området nedenfor og se konkrete eksempler på, hvordan AI kan optimere jeres specifikke forretningsområder.': 'Explore AI\'s potential through interactive cases. Click around in the area below and see concrete examples of how AI can optimize your specific business areas.',
    'Klik og se hvorfor AI kan forbedre din virksomhed': 'Click and see why AI can improve your business',
    'I samarbejde med': 'In collaboration with',
    'Vi stolte partnere der har valgt at transformere deres forretning med AI': 'Our trusted partners who have chosen to transform their business with AI',
    'Identificer jeres': 'Identify your',
    'AI-potentiale': 'AI potential',
    'Accelerer jeres fremgang': 'Accelerate your progress',
    'med AI-ekspertise': 'with AI expertise',
    'SAIBA\'s erfarne team af AI-konsulenter og teknologiske eksperter er dedikeret til at hjælpe jer med at overvinde jeres forretningsudfordringer og frigøre AI\'s fulde potentiale for jeres virksomhed.': 'SAIBA\'s experienced team of AI consultants and technology experts is dedicated to helping you overcome your business challenges and unlock AI\'s full potential for your company.',
    'Se vores team': 'See our team',
    'Skjul team': 'Hide team',
    'AI strategi og teknologisk innovation': 'AI strategy and technological innovation',
    'Produktudvikling og implementering': 'Product development and implementation',
    'Forretningsudvikling og kundeoplevelse': 'Business development and customer experience',
    'Teknisk arkitektur og skalerbarhed': 'Technical architecture and scalability'
};

// Reverse translations for English to Danish
const reverseTranslations = {};
for (const [da, en] of Object.entries(translations)) {
    reverseTranslations[en] = da;
}

function translatePage() {
    const elements = document.querySelectorAll('h1, h2, h3, h4, h5, h6, p, span, a, button, label');
    
    elements.forEach(element => {
        if (element.textContent.trim()) {
            const text = element.textContent.trim();
            const translation = isEnglish ? reverseTranslations[text] : translations[text];
            if (translation) {
                element.textContent = translation;
            }
        }
    });
}

// Setup language toggles
const languageToggle = document.getElementById('languageToggle');
const langText = document.querySelector('.lang-text');
const drawerLanguageToggle = document.getElementById('mobileDrawerLangToggle');
const drawerLangText = document.querySelector('.mobile-drawer-lang-text');

if (languageToggle && langText) {
    languageToggle.addEventListener('click', () => {
        isEnglish = !isEnglish;
        langText.textContent = isEnglish ? 'DA' : 'EN';
        translatePage();
    });
}

if (drawerLanguageToggle && drawerLangText) {
    drawerLanguageToggle.addEventListener('click', () => {
        isEnglish = !isEnglish;
        drawerLangText.textContent = isEnglish ? 'DA' : 'EN';
        translatePage();
    });
}

// AI Facts with language support
    const aiFacts = [
    { title: "PRODUKTIVITET", text: "AI kan øge produktiviteten med op til 40% i administrative opgaver", source: "McKinsey Global Institute", titleEn: "PRODUCTIVITY", textEn: "AI can increase productivity by up to 40% in administrative tasks" },
    { title: "OMKOSTNINGER", text: "61% af virksomheder rapporterer betydelige omkostningsbesparelser efter AI-implementering", source: "MIT Sloan Management Review", titleEn: "COSTS", textEn: "61% of companies report significant cost savings after AI implementation" },
    { title: "KUNDETILFREDS", text: "Virksomheder med AI-integration har 23% højere kundetilfredshed", source: "Salesforce Research", titleEn: "CUSTOMER SATISFACTION", textEn: "Companies with AI integration have 23% higher customer satisfaction" },
    { title: "BESLUTNINGER", text: "AI accelererer beslutningsprocesser med op til 25% hurtigere workflows", source: "Deloitte Insights", titleEn: "DECISIONS", textEn: "AI accelerates decision processes with up to 25% faster workflows" },
    { title: "TIDSBESPARELSE", text: "AI-automation kan frigøre op til 30% af medarbejdernes tid til strategiske opgaver", source: "World Economic Forum", titleEn: "TIME SAVINGS", textEn: "AI automation can free up to 30% of employees' time for strategic tasks" },
    { title: "FEJLREDUKTION", text: "AI reducerer fejlraten med 85% i dataanalyse og rapportering", source: "IBM Institute for Business Value", titleEn: "ERROR REDUCTION", textEn: "AI reduces error rates by 85% in data analysis and reporting" },
    { title: "ROI", text: "Virksomheder med AI har 35% bedre ROI på deres digitale investeringer", source: "Accenture Research", titleEn: "ROI", textEn: "Companies with AI have 35% better ROI on their digital investments" },
    { title: "FORUDSIGELSE", text: "AI kan forudsige kundeadfærd med 95% nøjagtighed", source: "Forrester Research", titleEn: "PREDICTION", textEn: "AI can predict customer behavior with 95% accuracy" },
    { title: "OPERATIONER", text: "Implementering af AI resulterer i 20% reduktion i operationelle omkostninger", source: "PwC Global AI Survey", titleEn: "OPERATIONS", textEn: "AI implementation results in 20% reduction in operational costs" },
    { title: "INNOVATION", text: "AI-driven virksomheder lancere produkter 50% hurtigere end traditionelle", source: "Harvard Business Review", titleEn: "INNOVATION", textEn: "AI-driven companies launch products 50% faster than traditional ones" }
    ];
    
    let factIndex = 0;
    let activeFacts = [];
    
// AI Facts click handler
const interactiveArea = document.querySelector('.interactive-area');
    if (interactiveArea) {
        interactiveArea.addEventListener('click', function(e) {
        e.preventDefault();
        e.stopPropagation();
            
            const rect = interactiveArea.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            const fact = aiFacts[factIndex];
            factIndex = (factIndex + 1) % aiFacts.length;
            
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
            
        const displayTitle = isEnglish ? (fact.titleEn || fact.title) : fact.title;
        const displayText = isEnglish ? (fact.textEn || fact.text) : fact.text;
        factBox.innerHTML = `<div style="font-size: 13px; margin-bottom: 10px;">${displayTitle}</div>${displayText}<br><br><div style="font-size: 9px; opacity: 0.7;">${fact.source}</div>`;
            
            interactiveArea.appendChild(factBox);
            activeFacts.push(factBox);
            
            setTimeout(() => {
                factBox.style.opacity = '1';
                factBox.style.transform = 'scale(1) translateY(0)';
            }, 10);
            
            setTimeout(() => {
                factBox.style.opacity = '0';
                factBox.style.transform = 'scale(0.8) translateY(-20px)';
                setTimeout(() => {
                    factBox.remove();
                    activeFacts = activeFacts.filter(f => f !== factBox);
                }, 500);
            }, 8000);
        });
    }