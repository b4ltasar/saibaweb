// SAIBA Website - Fix Script
document.addEventListener('DOMContentLoaded', function() {
    
    // Mobile scroll fix
    if (window.innerWidth <= 768) {
        window.scrollTo(0, 0);
        // Clear any hash from URL on mobile to prevent unwanted scrolling
        if (window.location.hash) {
            window.history.replaceState('', document.title, window.location.pathname);
            window.scrollTo(0, 0);
        }
    }
    
    // Header scroll logic
    const header = document.querySelector('.site-header');
    const hero = document.querySelector('.hero');
    let lastScrollY = window.scrollY;
    let isScrollingDown = false;
    
    function updateHeader() {
        const scrollY = window.scrollY;
        const heroHeight = hero ? hero.offsetHeight : 0;
        
        // Over hero section: transparent background, white text
        if (scrollY < heroHeight) {
            header.classList.remove('scrolled');
            header.classList.add('hero-overlay');
        } else {
            // Past hero section: white background, black text, hide on scroll down
            header.classList.remove('hero-overlay');
            header.classList.add('scrolled');
            
            // Hide/show header based on scroll direction
            isScrollingDown = scrollY > lastScrollY;
            
            if (scrollY > 100) {
                if (isScrollingDown) {
                    header.style.transform = 'translateY(-100%)';
                } else {
                    header.style.transform = 'translateY(0)';
                }
            } else {
                header.style.transform = 'translateY(0)';
            }
        }
        
        lastScrollY = scrollY;
    }
    
    window.addEventListener('scroll', updateHeader);
    updateHeader();
    
    // Enhanced section reveal animations
    const observerOptions = {
        threshold: 0.15,
        rootMargin: '0px 0px -100px 0px'
    };
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                
                // Add staggered animation to child elements
                const cards = entry.target.querySelectorAll('.service-card, .team-member, .client-logo');
                cards.forEach((card, index) => {
                    card.style.setProperty('--index', index);
                    setTimeout(() => {
                        card.style.opacity = '1';
                        card.style.transform = 'translateY(0)';
                    }, index * 100);
                });
            }
        });
    }, observerOptions);
    
    // Observe all sections
    document.querySelectorAll('.section').forEach(section => {
        revealObserver.observe(section);
    });
    
    // Add page load reveal effect
    window.addEventListener('load', () => {
        // Trigger reveal for sections that are already visible
        document.querySelectorAll('.section').forEach(section => {
            const rect = section.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                section.classList.add('revealed');
            }
        });
    });
    
    // Typewriter effect for optimization title with continuous looping
    const optimizationTitle = document.getElementById('optimizationTitle');
    if (optimizationTitle) {
        const originalText = optimizationTitle.textContent;
        let isAnimating = false;
        let typewriterTimeout;
        
        function startTypewriterAnimation() {
            if (isAnimating) return;
            isAnimating = true;
            
            let charIndex = 0;
            aiFactsTitle.textContent = '';
            
            function typeNextChar() {
                if (charIndex < originalText.length) {
                    aiFactsTitle.textContent = originalText.substring(0, charIndex + 1);
                    charIndex++;
                    typewriterTimeout = setTimeout(typeNextChar, 80); // Faster typing
                } else {
                    // Wait before restarting
                    typewriterTimeout = setTimeout(() => {
                        isAnimating = false;
                        startTypewriterAnimation();
                    }, 3000);
                }
            }
            
            typeNextChar();
        }
        
        function stopTypewriterAnimation() {
            isAnimating = false;
            if (typewriterTimeout) {
                clearTimeout(typewriterTimeout);
            }
            optimizationTitle.textContent = originalText;
        }
        
        const titleObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    setTimeout(() => {
                        startTypewriterAnimation();
                    }, 500);
                } else {
                    stopTypewriterAnimation();
                }
            });
        }, { threshold: 0.3 });
        
        titleObserver.observe(optimizationTitle);
        
        // Cleanup on page unload
        window.addEventListener('beforeunload', stopTypewriterAnimation);
    }
    
// Language toggle functionality
const languageToggle = document.getElementById('languageToggle');
const langText = document.querySelector('.lang-text');
    const drawerLanguageToggle = document.getElementById('mobileDrawerLangToggle');
    const drawerLangText = document.querySelector('.mobile-drawer-lang-text');

if ((languageToggle && langText) || (drawerLanguageToggle && drawerLangText)) {
    let isEnglish = false;
    
    const translations = {
        da: {
            'Ydelser': 'Services',
            'Team': 'Team', 
            'Kunder': 'Clients',
            'Kontakt': 'Contact',
            'Get in touch': 'Kontakt',
            'Book et møde': 'Book a meeting',
            'Kontakt os for at høre mere om hvordan vi kan hjælpe din virksomhed med AI-implementering.': 'Contact us to hear more about how we can help your company with AI implementation.',
            'Telefon:': 'Phone:',
            'Email:': 'Email:',
            'Adresse:': 'Address:',
            'Navn *': 'Name *',
            'Dit navn': 'Your name',
            'Email *': 'Email *',
            'din.email@example.com': 'your.email@example.com',
            'Telefon (valgfri)': 'Phone (optional)',
            'Dit telefonnummer': 'Your phone number',
            'Besked *': 'Message *',
            'Hvordan kan vi hjælpe dig?': 'How can we help you?',
            'Send': 'Send',
            'Ved at indsende denne formular accepterer du vores privatlivspolitik og servicevilkår.': 'By submitting this form you accept our privacy policy and terms of service.',
            'Vi gentænker måden, vi arbejder på. Med mennesker i centrum og teknologi som motor.': 'We rethink the way we work. With people at the center and technology as the engine.',
            'Fra hverdagens rutiner til ekstraordinære superkræfter med AI for dine medarbejdere': 'From everyday routines to extraordinary superpowers with AI for your employees',
            'Vi hjælper virksomheder med at implementere AI-teknologi på en menneskelig og bæredygtig måde.': 'We help companies implement AI technology in a human and sustainable way.',
            'Vores ydelser': 'Our services',
            'AI-konsulent': 'AI consultant',
            'Vi hjælper med at identificere og implementere de rigtige AI-løsninger for din virksomhed.': 'We help identify and implement the right AI solutions for your company.',
            'Uddannelse og træning': 'Education and training',
            'Vi træner dine medarbejdere i at arbejde med AI-teknologi på en sikker og effektiv måde.': 'We train your employees to work with AI technology in a safe and effective way.',
            'Support og vedligeholdelse': 'Support and maintenance',
            'Vi sikrer, at din AI-implementering fungerer optimalt og udvikler sig med din virksomhed.': 'We ensure that your AI implementation works optimally and evolves with your company.',
            'Vores team': 'Our team',
            'Mød de eksperter, der hjælper dig med at implementere AI i din virksomhed.': 'Meet the experts who help you implement AI in your company.',
            'Vores kunder': 'Our clients',
            'Vi er stolte af at arbejde med førende virksomheder i forskellige brancher.': 'We are proud to work with leading companies in various industries.',
            'Kontakt os': 'Contact us',
            'AI Facts': 'AI Facts',
            'Hvad er AI?': 'What is AI?',
            'Kunstig intelligens (AI) er teknologi, der kan lære og træffe beslutninger som mennesker.': 'Artificial intelligence (AI) is technology that can learn and make decisions like humans.',
            'Hvorfor er AI vigtigt?': 'Why is AI important?',
            'AI kan automatisere rutineopgaver og frigøre tid til mere kreativt arbejde.': 'AI can automate routine tasks and free up time for more creative work.',
            'Hvordan implementerer vi AI?': 'How do we implement AI?',
            'Vi starter med at forstå jeres behov og finder den rigtige AI-løsning.': 'We start by understanding your needs and finding the right AI solution.',
            'Hvad koster AI-implementering?': 'What does AI implementation cost?',
            'Prisen afhænger af jeres behov og den valgte løsning. Vi giver et gratis tilbud.': 'The price depends on your needs and the chosen solution. We provide a free quote.',
            'Hvor lang tid tager det?': 'How long does it take?',
            'Typisk 2-6 måneder afhængigt af kompleksiteten af projektet.': 'Typically 2-6 months depending on the complexity of the project.',
            'Hvad er jeres erfaring?': 'What is your experience?',
            'Vi har implementeret AI i over 50 virksomheder i de sidste 3 år.': 'We have implemented AI in over 50 companies in the last 3 years.',
            'Kan I hjælpe med træning?': 'Can you help with training?',
            'Ja, vi træner jeres medarbejdere i at bruge de nye AI-værktøjer.': 'Yes, we train your employees to use the new AI tools.',
            'Hvad med support?': 'What about support?',
            'Vi tilbyder løbende support og vedligeholdelse af jeres AI-løsninger.': 'We offer ongoing support and maintenance of your AI solutions.',
            'Er AI sikkert?': 'Is AI safe?',
            'Vi implementerer kun sikre og testede AI-løsninger med fokus på databeskyttelse.': 'We only implement safe and tested AI solutions with focus on data protection.',
            'Hvad er jeres tilgang?': 'What is your approach?',
            'Vi sætter mennesker i centrum og bruger teknologi som værktøj til forbedring.': 'We put people at the center and use technology as a tool for improvement.',
            'Kan I hjælpe alle brancher?': 'Can you help all industries?',
            'Ja, vi har erfaring med AI-implementering på tværs af alle brancher.': 'Yes, we have experience with AI implementation across all industries.',
            'Hvad er jeres succesrate?': 'What is your success rate?',
            '95% af vores projekter leverer de forventede resultater inden for tidsrammen.': '95% of our projects deliver the expected results within the timeframe.',
            'Hvordan starter vi?': 'How do we start?',
            'Kontakt os for et gratis konsultationsmøde hvor vi diskuterer jeres behov.': 'Contact us for a free consultation meeting where we discuss your needs.',
            'Produktudvikling': 'Product development',
            'Vi udvikler og bygger AI-løsninger med jer': 'We develop and build AI solutions with you',
            'Strategi og rådgivning': 'Strategy and consulting',
            'Vi hjælper med at udvikle en AI-strategi der passer til jeres virksomhed': 'We help develop an AI strategy that fits your company',
            'Implementering': 'Implementation',
            'Vi implementerer AI-løsninger på en sikker og effektiv måde': 'We implement AI solutions in a safe and effective way',
            'Træning og support': 'Training and support',
            'Vi sikrer at jeres team kan bruge AI-værktøjerne optimalt': 'We ensure your team can use AI tools optimally'
        },
        en: {
            'Services': 'Ydelser',
            'Team': 'Team',
            'Clients': 'Kunder', 
            'Contact': 'Kontakt',
            'Get in touch': 'Kontakt',
            'Book a meeting': 'Book et møde',
            'Contact us to hear more about how we can help your company with AI implementation.': 'Kontakt os for at høre mere om hvordan vi kan hjælpe din virksomhed med AI-implementering.',
            'Phone:': 'Telefon:',
            'Email:': 'Email:',
            'Address:': 'Adresse:',
            'Name *': 'Navn *',
            'Your name': 'Dit navn',
            'Email *': 'Email *',
            'your.email@example.com': 'din.email@example.com',
            'Phone (optional)': 'Telefon (valgfri)',
            'Your phone number': 'Dit telefonnummer',
            'Message *': 'Besked *',
            'How can we help you?': 'Hvordan kan vi hjælpe dig?',
            'Send': 'Send',
            'By submitting this form you accept our privacy policy and terms of service.': 'Ved at indsende denne formular accepterer du vores privatlivspolitik og servicevilkår.',
            'We rethink the way we work. With people at the center and technology as the engine.': 'Vi gentænker måden, vi arbejder på. Med mennesker i centrum og teknologi som motor.',
            'From everyday routines to extraordinary superpowers with AI for your employees': 'Fra hverdagens rutiner til ekstraordinære superkræfter med AI for dine medarbejdere',
            'We help companies implement AI technology in a human and sustainable way.': 'Vi hjælper virksomheder med at implementere AI-teknologi på en menneskelig og bæredygtig måde.',
            'Our services': 'Vores ydelser',
            'AI consultant': 'AI-konsulent',
            'We help identify and implement the right AI solutions for your company.': 'Vi hjælper med at identificere og implementere de rigtige AI-løsninger for din virksomhed.',
            'Education and training': 'Uddannelse og træning',
            'We train your employees to work with AI technology in a safe and effective way.': 'Vi træner dine medarbejdere i at arbejde med AI-teknologi på en sikker og effektiv måde.',
            'Support and maintenance': 'Support og vedligeholdelse',
            'We ensure that your AI implementation works optimally and evolves with your company.': 'Vi sikrer, at din AI-implementering fungerer optimalt og udvikler sig med din virksomhed.',
            'Our team': 'Vores team',
            'Meet the experts who help you implement AI in your company.': 'Mød de eksperter, der hjælper dig med at implementere AI i din virksomhed.',
            'Our clients': 'Vores kunder',
            'We are proud to work with leading companies in various industries.': 'Vi er stolte af at arbejde med førende virksomheder i forskellige brancher.',
            'Contact us': 'Kontakt os',
            'AI Facts': 'AI Facts',
            'What is AI?': 'Hvad er AI?',
            'Artificial intelligence (AI) is technology that can learn and make decisions like humans.': 'Kunstig intelligens (AI) er teknologi, der kan lære og træffe beslutninger som mennesker.',
            'Why is AI important?': 'Hvorfor er AI vigtigt?',
            'AI can automate routine tasks and free up time for more creative work.': 'AI kan automatisere rutineopgaver og frigøre tid til mere kreativt arbejde.',
            'How do we implement AI?': 'Hvordan implementerer vi AI?',
            'We start by understanding your needs and finding the right AI solution.': 'Vi starter med at forstå jeres behov og finder den rigtige AI-løsning.',
            'What does AI implementation cost?': 'Hvad koster AI-implementering?',
            'The price depends on your needs and the chosen solution. We provide a free quote.': 'Prisen afhænger af jeres behov og den valgte løsning. Vi giver et gratis tilbud.',
            'How long does it take?': 'Hvor lang tid tager det?',
            'Typically 2-6 months depending on the complexity of the project.': 'Typisk 2-6 måneder afhængigt af kompleksiteten af projektet.',
            'What is your experience?': 'Hvad er jeres erfaring?',
            'We have implemented AI in over 50 companies in the last 3 years.': 'Vi har implementeret AI i over 50 virksomheder i de sidste 3 år.',
            'Can you help with training?': 'Kan I hjælpe med træning?',
            'Yes, we train your employees to use the new AI tools.': 'Ja, vi træner jeres medarbejdere i at bruge de nye AI-værktøjer.',
            'What about support?': 'Hvad med support?',
            'We offer ongoing support and maintenance of your AI solutions.': 'Vi tilbyder løbende support og vedligeholdelse af jeres AI-løsninger.',
            'Is AI safe?': 'Er AI sikkert?',
            'We only implement safe and tested AI solutions with focus on data protection.': 'Vi implementerer kun sikre og testede AI-løsninger med fokus på databeskyttelse.',
            'What is your approach?': 'Hvad er jeres tilgang?',
            'We put people at the center and use technology as a tool for improvement.': 'Vi sætter mennesker i centrum og bruger teknologi som værktøj til forbedring.',
            'Can you help all industries?': 'Kan I hjælpe alle brancher?',
            'Yes, we have experience with AI implementation across all industries.': 'Ja, vi har erfaring med AI-implementering på tværs af alle brancher.',
            'What is your success rate?': 'Hvad er jeres succesrate?',
            '95% of our projects deliver the expected results within the timeframe.': '95% af vores projekter leverer de forventede resultater inden for tidsrammen.',
            'How do we start?': 'Hvordan starter vi?',
            'Contact us for a free consultation meeting where we discuss your needs.': 'Kontakt os for et gratis konsultationsmøde hvor vi diskuterer jeres behov.',
            'Product development': 'Produktudvikling',
            'We develop and build AI solutions with you': 'Vi udvikler og bygger AI-løsninger med jer',
            'Strategy and consulting': 'Strategi og rådgivning',
            'We help develop an AI strategy that fits your company': 'Vi hjælper med at udvikle en AI-strategi der passer til jeres virksomhed',
            'Implementation': 'Implementering',
            'We implement AI solutions in a safe and effective way': 'Vi implementerer AI-løsninger på en sikker og effektiv måde',
            'Training and support': 'Træning og support',
            'We ensure your team can use AI tools optimally': 'Vi sikrer at jeres team kan bruge AI-værktøjerne optimalt',
            'Meet the experts_': 'Mød eksperterne_',
            'who transform your AI journey': 'der transformerer jeres AI-rejse',
            'Identify your': 'Identificer jeres',
            'AI potential': 'AI-potentiale',
            'Accelerate your progress': 'Accelerer jeres fremgang',
            'with AI expertise': 'med AI-ekspertise',
            'SAIBA\'s experienced team of AI consultants and technology experts is dedicated to helping you overcome your business challenges and unlock AI\'s full potential for your company.': 'SAIBA\'s erfarne team af AI-konsulenter og teknologiske eksperter er dedikeret til at hjælpe jer med at overvinde jeres forretningsudfordringer og frigøre AI\'s fulde potentiale for jeres virksomhed.',
            'See our team': 'Se vores team',
            'Hide team': 'Skjul team',
            'Product Development': 'Produktudvikling',
            'We develop and build AI solutions with you': 'Vi udvikler og bygger AI-løsninger med jer',
            'Click and see why AI can improve your business': 'Klik og se hvorfor AI kan forbedre din virksomhed',
            'Optimization': 'Optimering',
            'Optimize your': 'Optimér jeres',
            'business processes': 'forretningsprocesser',
            'Explore AI\'s potential': 'Udforsk AI\'s potentiale',
            'through interactive cases': 'gennem interaktive cases',
            'Click around the area below and see concrete examples of how AI can optimize your specific business areas. From productivity to customer service - each case shows measurable results.': 'Klik rundt i området nedenfor og se konkrete eksempler på, hvordan AI kan optimere jeres specifikke forretningsområder. Fra produktivitet til kundeservice - hver case viser målbare resultater.',
            'AI strategy and technological innovation': 'AI strategi og teknologisk innovation',
            'Product development and implementation': 'Produktudvikling og implementering',
            'Business development and customer experience': 'Forretningsudvikling og kundeoplevelse',
            'Technical architecture and scalability': 'Teknisk arkitektur og skalerbarhed',
            'Workshops & Bootcamps': 'Workshops & Bootcamps',
            'Få overblik og indsigt i AI-teknologiens potentiale': 'Get an overview and insight into AI technology\'s potential',
            'Skræddersyede Forløb': 'Tailored Courses',
            'Fra viden til konkrete use cases i din virksomhed': 'From knowledge to concrete use cases in your business',
            'Strategi & Implementering': 'Strategy & Implementation',
            'Omsæt teknologi til konkrete resultater og værdi': 'Translate technology into concrete results and value',
            'Produktudvikling': 'Product Development',
            'Vi udvikler og bygger AI-løsninger med jer': 'We develop and build AI solutions with you',
            'Get an overview and insight into AI technology\'s potential': 'Få overblik og indsigt i AI-teknologiens potentiale',
            'Tailored Courses': 'Skræddersyede Forløb',
            'From knowledge to concrete use cases in your business': 'Fra viden til konkrete use cases i din virksomhed',
            'Strategy & Implementation': 'Strategi & Implementering',
            'Translate technology into concrete results and value': 'Omsæt teknologi til konkrete resultater og værdi',
            'Klik og se hvorfor AI kan forbedre din virksomhed': 'Click and see why AI can improve your business',
            'Optimering': 'Optimization',
            'Optimér jeres': 'Optimize your',
            'forretningsprocesser': 'business processes',
            'Udforsk AI\'s potentiale': 'Explore AI\'s potential',
            'gennem interaktive cases': 'through interactive cases',
            'Klik rundt i området nedenfor og se konkrete eksempler på, hvordan AI kan optimere jeres specifikke forretningsområder. Fra produktivitet til kundeservice - hver case viser målbare resultater.': 'Click around the area below and see concrete examples of how AI can optimize your specific business areas. From productivity to customer service - each case shows measurable results.',
            'Mød eksperterne_': 'Meet the experts_',
            'der transformerer jeres AI-rejse': 'who transform your AI journey',
            'Identificer jeres': 'Identify your',
            'AI-potentiale': 'AI potential',
            'Accelerer jeres fremgang': 'Accelerate your progress',
            'med AI-ekspertise': 'with AI expertise',
            'SAIBA\'s erfarne team af AI-konsulenter og teknologiske eksperter er dedikeret til at hjælpe jer med at overvinde jeres forretningsudfordringer og frigøre AI\'s fulde potentiale for jeres virksomhed.': 'SAIBA\'s experienced team of AI consultants and technology experts is dedicated to helping you overcome your business challenges and unlock AI\'s full potential for your company.',
            'Se vores team': 'See our team',
            'Skjul team': 'Hide team',
            'Få overblik og indsigt i AI-teknologiens potentiale': 'Get an overview and insight into AI technology\'s potential',
            'Skræddersyede Forløb': 'Tailored Courses',
            'Fra viden til konkrete use cases i din virksomhed': 'From knowledge to concrete use cases in your business',
            'Strategi & Implementering': 'Strategy & Implementation',
            'Omsæt teknologi til konkrete resultater og værdi': 'Translate technology into concrete results and value',
            'AI Facts': 'AI Facts',
            'What is AI?': 'Hvad er AI?',
            'Artificial intelligence (AI) is technology that can learn and make decisions like humans.': 'Kunstig intelligens (AI) er teknologi, der kan lære og træffe beslutninger som mennesker.',
            'Why is AI important?': 'Hvorfor er AI vigtigt?',
            'AI can automate routine tasks and free up time for more creative work.': 'AI kan automatisere rutineopgaver og frigøre tid til mere kreativt arbejde.',
            'How do we implement AI?': 'Hvordan implementerer vi AI?',
            'We start by understanding your needs and finding the right AI solution.': 'Vi starter med at forstå jeres behov og finder den rigtige AI-løsning.',
            'What does AI implementation cost?': 'Hvad koster AI-implementering?',
            'The price depends on your needs and the chosen solution. We provide a free quote.': 'Prisen afhænger af jeres behov og den valgte løsning. Vi giver et gratis tilbud.',
            'How long does it take?': 'Hvor lang tid tager det?',
            'Typically 2-6 months depending on the complexity of the project.': 'Typisk 2-6 måneder afhængigt af kompleksiteten af projektet.',
            'What is your experience?': 'Hvad er jeres erfaring?',
            'We have implemented AI in over 50 companies in the last 3 years.': 'Vi har implementeret AI i over 50 virksomheder i de sidste 3 år.',
            'Can you help with training?': 'Kan I hjælpe med træning?',
            'Yes, we train your employees to use the new AI tools.': 'Ja, vi træner jeres medarbejdere i at bruge de nye AI-værktøjer.',
            'What about support?': 'Hvad med support?',
            'We offer ongoing support and maintenance of your AI solutions.': 'Vi tilbyder løbende support og vedligeholdelse af jeres AI-løsninger.',
            'Is AI safe?': 'Er AI sikkert?',
            'We only implement safe and tested AI solutions with focus on data protection.': 'Vi implementerer kun sikre og testede AI-løsninger med fokus på databeskyttelse.',
            'What is your approach?': 'Hvad er jeres tilgang?',
            'We put people at the center and use technology as a tool for improvement.': 'Vi sætter mennesker i centrum og bruger teknologi som værktøj til forbedring.',
            'Can you help all industries?': 'Kan I hjælpe alle brancher?',
            'Yes, we have experience with AI implementation across all industries.': 'Ja, vi har erfaring med AI-implementering på tværs af alle brancher.',
            'What is your success rate?': 'Hvad er jeres succesrate?',
            '95% of our projects deliver the expected results within the timeframe.': '95% af vores projekter leverer de forventede resultater inden for tidsrammen.',
            'How do we start?': 'Hvordan starter vi?',
            'Contact us for a free consultation meeting where we discuss your needs.': 'Kontakt os for et gratis konsultationsmøde hvor vi diskuterer jeres behov.',
            'Workshops & Bootcamps': 'Workshops & Bootcamps',
            'Få overblik og indsigt i AI-teknologiens potentiale': 'Get an overview and insight into AI technology\'s potential',
            'Skræddersyede Forløb': 'Tailored Courses',
            'Fra viden til konkrete use cases i din virksomhed': 'From knowledge to concrete use cases in your business',
            'Strategi & Implementering': 'Strategy & Implementation',
            'Omsæt teknologi til konkrete resultater og værdi': 'Translate technology into concrete results and value',
            'AI Facts': 'AI Facts',
            'Hvad er AI?': 'What is AI?',
            'Kunstig intelligens (AI) er teknologi, der kan lære og træffe beslutninger som mennesker.': 'Artificial intelligence (AI) is technology that can learn and make decisions like humans.',
            'Hvorfor er AI vigtigt?': 'Why is AI important?',
            'AI kan automatisere rutineopgaver og frigøre tid til mere kreativt arbejde.': 'AI can automate routine tasks and free up time for more creative work.',
            'Hvordan implementerer vi AI?': 'How do we implement AI?',
            'Vi starter med at forstå jeres behov og finder den rigtige AI-løsning.': 'We start by understanding your needs and finding the right AI solution.',
            'Hvad koster AI-implementering?': 'What does AI implementation cost?',
            'Prisen afhænger af jeres behov og den valgte løsning. Vi giver et gratis tilbud.': 'The price depends on your needs and the chosen solution. We provide a free quote.',
            'Hvor lang tid tager det?': 'How long does it take?',
            'Typisk 2-6 måneder afhængigt af kompleksiteten af projektet.': 'Typically 2-6 months depending on the complexity of the project.',
            'Hvad er jeres erfaring?': 'What is your experience?',
            'Vi har implementeret AI i over 50 virksomheder i de sidste 3 år.': 'We have implemented AI in over 50 companies in the last 3 years.',
            'Kan I hjælpe med træning?': 'Can you help with training?',
            'Ja, vi træner jeres medarbejdere i at bruge de nye AI-værktøjer.': 'Yes, we train your employees to use the new AI tools.',
            'Hvad med support?': 'What about support?',
            'Vi tilbyder løbende support og vedligeholdelse af jeres AI-løsninger.': 'We offer ongoing support and maintenance of your AI solutions.',
            'Er AI sikkert?': 'Is AI safe?',
            'Vi implementerer kun sikre og testede AI-løsninger med fokus på databeskyttelse.': 'We only implement safe and tested AI solutions with focus on data protection.',
            'Hvad er jeres tilgang?': 'What is your approach?',
            'Vi sætter mennesker i centrum og bruger teknologi som værktøj til forbedring.': 'We put people at the center and use technology as a tool for improvement.',
            'Kan I hjælpe alle brancher?': 'Can you help all industries?',
            'Ja, vi har erfaring med AI-implementering på tværs af alle brancher.': 'Yes, we have experience with AI implementation across all industries.',
            'Hvad er jeres succesrate?': 'What is your success rate?',
            '95% af vores projekter leverer de forventede resultater inden for tidsrammen.': '95% of our projects deliver the expected results within the timeframe.',
            'Hvordan starter vi?': 'How do we start?',
            'Kontakt os for et gratis konsultationsmøde hvor vi diskuterer jeres behov.': 'Contact us for a free consultation meeting where we discuss your needs.',
            'Optimering': 'Optimization',
            'Klik og se hvorfor AI kan forbedre din virksomhed': 'Click and see why AI can improve your business',
            'Ydelse →': 'Service →',
            'Book et møde': 'Book a meeting',
            'Mød eksperterne_': 'Meet the experts_',
            'der transformerer jeres AI-rejse': 'who transform your AI journey',
            'Identificer jeres': 'Identify your',
            'AI-potentiale': 'AI potential',
            'Accelerer jeres fremgang': 'Accelerate your progress',
            'med AI-ekspertise': 'with AI expertise',
            'SAIBA\'s erfarne team af AI-konsulenter og teknologiske eksperter er dedikeret til at hjælpe jer med at overvinde jeres forretningsudfordringer og frigøre AI\'s fulde potentiale for jeres virksomhed.': 'SAIBA\'s experienced team of AI consultants and technology experts is dedicated to helping you overcome your business challenges and unlock AI\'s full potential for your company.',
            'Se vores team': 'See our team',
            'Skjul team': 'Hide team',
            'Produktudvikling': 'Product Development',
            'Vi udvikler og bygger AI-løsninger med jer': 'We develop and build AI solutions with you',
            'Meet the experts_': 'Mød eksperterne_',
            'who transform your AI journey': 'der transformerer jeres AI-rejse',
            'Identify your': 'Identificer jeres',
            'AI potential': 'AI-potentiale',
            'Accelerate your progress': 'Accelerer jeres fremgang',
            'with AI expertise': 'med AI-ekspertise',
            'SAIBA\'s experienced team of AI consultants and technology experts is dedicated to helping you overcome your business challenges and unlock AI\'s full potential for your company.': 'SAIBA\'s erfarne team af AI-konsulenter og teknologiske eksperter er dedikeret til at hjælpe jer med at overvinde jeres forretningsudfordringer og frigøre AI\'s fulde potentiale for jeres virksomhed.',
            'See our team': 'Se vores team',
            'Hide team': 'Skjul team',
            'Product Development': 'Produktudvikling',
            'We develop and build AI solutions with you': 'Vi udvikler og bygger AI-løsninger med jer',
            'AI strategi og teknologisk innovation': 'AI strategy and technological innovation',
            'Produktudvikling og implementering': 'Product development and implementation',
            'Forretningsudvikling og kundeoplevelse': 'Business development and customer experience',
            'Teknisk arkitektur og skalerbarhed': 'Technical architecture and scalability',
            'Fra strategi til implementering': 'From strategy to implementation',
            'Vi leverer komplette AI-løsninger der passer til jeres specifikke behov og forretningsmål.': 'We deliver complete AI solutions that fit your specific needs and business goals.',
            'Optimér jeres forretningsprocesser': 'Optimize your business processes',
            'Udforsk AI\'s potentiale gennem interaktive cases. Klik rundt i området nedenfor og se konkrete eksempler på, hvordan AI kan optimere jeres specifikke forretningsområder.': 'Explore AI\'s potential through interactive cases. Click around in the area below and see concrete examples of how AI can optimize your specific business areas.',
            'Optimize your business processes': 'Optimér jeres forretningsprocesser',
            'Explore AI\'s potential through interactive cases. Click around in the area below and see concrete examples of how AI can optimize your specific business areas.': 'Udforsk AI\'s potentiale gennem interaktive cases. Klik rundt i området nedenfor og se konkrete eksempler på, hvordan AI kan optimere jeres specifikke forretningsområder.',
            'I samarbejde med': 'In collaboration with',
            'Vi stolte partnere der har valgt at transformere deres forretning med AI': 'Our trusted partners who have chosen to transform their business with AI'
        }
    };
    
    function translatePage() {
        const elements = document.querySelectorAll('a, button, h1, h2, h3, p, span, label, input, textarea, div, h4, h5, h6');
        let translatedCount = 0;
        
        elements.forEach(element => {
            // Skip if element has specific classes that shouldn't be translated
            if (element.classList.contains('mouse-trail-dot') || 
                element.classList.contains('fact-box') ||
                element.classList.contains('ai-facts-title') ||
                element.classList.contains('service-number') ||
                element.classList.contains('team-photo-img') ||
                element.classList.contains('client-logo-img')) {
                return;
            }
            
            // Only translate if element has text content and no child elements with text
            if (element.textContent.trim() && element.children.length === 0) {
                const text = element.textContent.trim();
                const translation = translations[isEnglish ? 'da' : 'en'][text];
                if (translation) {
                    element.textContent = translation;
                    translatedCount++;
                }
            }
        });
        
        // Also translate placeholder attributes
        const inputs = document.querySelectorAll('input, textarea');
        inputs.forEach(input => {
            if (input.placeholder) {
                const translation = translations[isEnglish ? 'da' : 'en'][input.placeholder];
                if (translation) {
                    input.placeholder = translation;
                    translatedCount++;
                }
            }
        });
        
        console.log(`Translated ${translatedCount} elements to ${isEnglish ? 'Danish' : 'English'}`);
    }
    
    if (languageToggle) {
        languageToggle.addEventListener('click', () => {
            isEnglish = !isEnglish;
            if (langText) langText.textContent = isEnglish ? 'DA' : 'EN';
            if (drawerLangText) drawerLangText.textContent = isEnglish ? 'DA' : 'EN';
            translatePage();
        });
    }
    
    if (drawerLanguageToggle) {
        drawerLanguageToggle.addEventListener('click', () => {
            isEnglish = !isEnglish;
            if (langText) langText.textContent = isEnglish ? 'DA' : 'EN';
            if (drawerLangText) drawerLangText.textContent = isEnglish ? 'DA' : 'EN';
            translatePage();
        });
    }
}
    
    // Burger menu is handled in main.js
    
    // Optimization Interactive Area
    const interactiveArea = document.querySelector('.interactive-area');
    
    // Mouse trail for AI facts area
    let mouseTrail = [];
    const maxTrailLength = 20;
    
    if (interactiveArea) {
        interactiveArea.addEventListener('mousemove', function(e) {
            const rect = interactiveArea.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Add new trail point
            mouseTrail.push({ x, y, time: Date.now() });
            
            // Remove old trail points
            mouseTrail = mouseTrail.filter(point => Date.now() - point.time < 800);
            
            // Limit trail length
            if (mouseTrail.length > maxTrailLength) {
                mouseTrail = mouseTrail.slice(-maxTrailLength);
            }
            
            // Update trail visualization
            updateMouseTrail();
        });
        
        interactiveArea.addEventListener('mouseleave', function() {
            mouseTrail = [];
            updateMouseTrail();
        });
    }
    
    function updateMouseTrail() {
        // Remove existing trail
        const existingTrail = document.querySelectorAll('.mouse-trail-dot');
        existingTrail.forEach(dot => dot.remove());
        
        // Add new trail
        mouseTrail.forEach((point, index) => {
            const dot = document.createElement('div');
            dot.className = 'mouse-trail-dot';
            dot.style.position = 'absolute';
            dot.style.left = point.x + 'px';
            dot.style.top = point.y + 'px';
            dot.style.width = '8px';
            dot.style.height = '8px';
            dot.style.background = 'rgba(0, 0, 0, 0.25)';
            dot.style.borderRadius = '2px';
            dot.style.imageRendering = 'pixelated';
            dot.style.pointerEvents = 'none';
            dot.style.zIndex = '1';
            dot.style.transform = 'translate(-50%, -50%)';
            dot.style.opacity = (index / mouseTrail.length) * 0.8;
            dot.style.filter = 'blur(0.5px)';
            
            interactiveArea.appendChild(dot);
        });
    }
    
    const aiFacts = [
        { title: "PRODUKTIVITET", text: "AI kan øge produktiviteten med op til 40% i administrative opgaver", source: "McKinsey Global Institute" },
        { title: "OMKOSTNINGER", text: "61% af virksomheder rapporterer betydelige omkostningsbesparelser efter AI-implementering", source: "MIT Sloan Management Review" },
        { title: "KUNDETILFREDS", text: "Virksomheder med AI-integration har 23% højere kundetilfredshed", source: "Salesforce Research" },
        { title: "BESLUTNINGER", text: "AI accelererer beslutningsprocesser med op til 25% hurtigere workflows", source: "Deloitte Insights" },
        { title: "TIDSBESPARELSE", text: "AI-automation kan frigøre op til 30% af medarbejdernes tid til strategiske opgaver", source: "World Economic Forum" },
        { title: "FEJLREDUKTION", text: "AI reducerer fejlraten med 85% i dataanalyse og rapportering", source: "IBM Institute for Business Value" },
        { title: "ROI", text: "Virksomheder med AI har 35% bedre ROI på deres digitale investeringer", source: "Accenture Research" },
        { title: "FORUDSIGELSE", text: "AI kan forudsige kundeadfærd med 95% nøjagtighed", source: "Forrester Research" },
        { title: "OPERATIONER", text: "Implementering af AI resulterer i 20% reduktion i operationelle omkostninger", source: "PwC Global AI Survey" },
        { title: "INNOVATION", text: "AI-driven virksomheder lancere produkter 50% hurtigere end traditionelle", source: "Harvard Business Review" },
        { title: "MARKEDSFORSTÅELSE", text: "AI kan analysere 73% mere kundedata end traditionelle metoder", source: "Gartner Research" },
        { title: "KVALITET", text: "AI-forbedrede processer har 92% højere kvalitetskontrol", source: "Capgemini Research" },
        { title: "ADAPTATION", text: "AI-systemer lærer og tilpasser sig 3x hurtigere end menneskelige processer", source: "MIT Technology Review" },
        { title: "KONKURRENCE", text: "Virksomheder med AI har 67% højere markedsandele end konkurrenter", source: "BCG Henderson Institute" },
        { title: "FREMTID", text: "85% af succesfulde virksomheder vil være AI-driven inden 2030", source: "World Economic Forum" },
        { title: "EFFEKTIVITET", text: "AI optimerer ressourceallokering med 45% bedre effektivitet", source: "McKinsey Digital" },
        { title: "KUNDESERVICE", text: "AI-powered chatbots håndterer 80% af kundeforespørgsler automatisk", source: "Oracle Research" },
        { title: "INNOVATION", text: "AI-genererede idéer har 40% højere implementeringsrate", source: "Harvard Business School" },
        { title: "SKALERING", text: "AI muliggør 10x hurtigere skalering af forretningsprocesser", source: "Stanford AI Index" },
        { title: "PRÆDIKTION", text: "AI forudsiger markedsbevægelser med 78% nøjagtighed", source: "JP Morgan Research" }
    ];
    
    let factIndex = 0;
    let activeFacts = [];
    
    function findNonOverlappingPosition(clickX, clickY, rect) {
        const factWidth = 320;
        const factHeight = 200;
        const margin = 20;
        
        // Start with click position, centered on the click point
        let bestX = clickX - factWidth/2;
        let bestY = clickY - factHeight/2;
        
        // Keep within bounds with more precise positioning
        bestX = Math.max(margin, Math.min(bestX, rect.width - factWidth - margin));
        bestY = Math.max(margin, Math.min(bestY, rect.height - factHeight - margin));
        
        // If we had to adjust position, try to maintain the click relationship
        if (bestX !== clickX - factWidth/2) {
            // If we hit the right edge, position from the right
            if (clickX > rect.width - factWidth/2 - margin) {
                bestX = rect.width - factWidth - margin;
            }
        }
        
        if (bestY !== clickY - factHeight/2) {
            // If we hit the bottom edge, position from the bottom
            if (clickY > rect.height - factHeight/2 - margin) {
                bestY = rect.height - factHeight - margin;
            }
        }
        
        return { x: bestX, y: bestY };
    }
    
    if (interactiveArea) {
        // Ensure only one click handler is bound
        interactiveArea.replaceWith(interactiveArea.cloneNode(true));
        const ia = document.querySelector('.interactive-area');
        ia.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            
            // Get click position relative to interactive area
            const rect = ia.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Get current fact
            const fact = aiFacts[factIndex];
            factIndex = (factIndex + 1) % aiFacts.length;
            
            // Find non-overlapping position using the correct rect reference
            const position = findNonOverlappingPosition(x, y, rect);
            
            // Create fact box positioned within interactive area
            const factBox = document.createElement('div');
            factBox.className = 'dynamic-fact-box';
            factBox.style.position = 'absolute';
            factBox.style.left = position.x + 'px';
            factBox.style.top = position.y + 'px';
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
            
            ia.appendChild(factBox);
            activeFacts.push(factBox);
            
            // Animate in
            setTimeout(() => {
                factBox.style.opacity = '1';
                factBox.style.transform = 'scale(1) translateY(0)';
            }, 10);
            
            // Remove after 8 seconds
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
});
