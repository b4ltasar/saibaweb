// SAIBA Website - Main JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // Theme Management
    const darkModeToggle = document.getElementById('darkModeToggle');
    const drawerDarkModeToggle = document.getElementById('drawerDarkModeToggle');
    const html = document.documentElement;
    
    // Initialize theme from localStorage
    const savedTheme = localStorage.getItem('theme') || 'light';
    html.classList.toggle('dark-mode', savedTheme === 'dark');
    
    // Theme toggle functionality
    function toggleTheme() {
        const isDark = html.classList.contains('dark-mode');
        const newTheme = isDark ? 'light' : 'dark';
        
        html.classList.toggle('dark-mode', newTheme === 'dark');
        localStorage.setItem('theme', newTheme);
    }
    
    if (darkModeToggle) {
        darkModeToggle.addEventListener('click', toggleTheme);
    }
    
    if (drawerDarkModeToggle) {
        drawerDarkModeToggle.addEventListener('click', toggleTheme);
    }
    
    // Nordic Reveal Animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
                
                // Stagger card animations
                if (entry.target.classList.contains('services-grid')) {
                    const cards = entry.target.querySelectorAll('.service-card');
                    cards.forEach((card, index) => {
                        setTimeout(() => {
                            card.classList.add('revealed');
                        }, index * 150);
                    });
                }
            }
        });
    }, observerOptions);
    
    // Observe sections and cards
    document.querySelectorAll('.section').forEach(section => {
        revealObserver.observe(section);
    });
    
    document.querySelectorAll('.service-card').forEach(card => {
        revealObserver.observe(card);
    });
    
    // Mobile Navigation
    const burger = document.getElementById('burger');
    const mobileDrawer = document.getElementById('mobileDrawer');
    const mobileDrawerClose = document.getElementById('mobileDrawerClose');
    const mobileDrawerOverlay = document.getElementById('mobileDrawerOverlay');
    
    function openMobileDrawer() {
        mobileDrawer.classList.add('active');
        document.body.classList.add('mobile-drawer-open');
        document.body.style.overflow = 'hidden';
    }
    
    function closeMobileDrawer() {
        mobileDrawer.classList.remove('active');
        document.body.classList.remove('mobile-drawer-open');
        document.body.style.overflow = '';
    }
    
    // Burger menu click
    if (burger) {
        burger.addEventListener('click', function(e) {
            e.preventDefault();
            e.stopPropagation();
            openMobileDrawer();
        });
        
        // Also add touch events
        burger.addEventListener('touchstart', function(e) {
            e.preventDefault();
            e.stopPropagation();
            openMobileDrawer();
        });
    }
    
    // Close drawer
    if (mobileDrawerClose) {
        mobileDrawerClose.addEventListener('click', closeMobileDrawer);
    }
    
    if (mobileDrawerOverlay) {
        mobileDrawerOverlay.addEventListener('click', closeMobileDrawer);
    }
    
    // Close drawer when clicking navigation links
    const mobileDrawerLinks = document.querySelectorAll('.mobile-drawer-link');
    mobileDrawerLinks.forEach(link => {
        link.addEventListener('click', closeMobileDrawer);
    });
    
    // Interactive AI Facts Section
    const aiFactsSection = document.querySelector('.ai-facts');
    const aiFactsTitle = document.getElementById('aiFactsTitle');
    const interactiveArea = document.querySelector('.interactive-area');
    const factBoxesContainer = document.querySelector('.fact-boxes-container');
    
    // AI Facts elements
    
    let currentFactBox = null;
    let factIndex = 0;
    
    // Typewriter effect for AI Facts title
    // Smooth typewriter using requestAnimationFrame
    function typeWriter(element, text, cps = 16) { // characters per second
        const frameInterval = 1000 / 60; // 60fps
        const charsPerFrame = cps / 60;
        let shown = 0;
        element.textContent = '';
        element.style.borderRight = '2px solid currentColor';
        let rafId;
        const step = () => {
            shown += charsPerFrame;
            const next = Math.min(text.length, Math.floor(shown));
            element.textContent = text.slice(0, next);
            if (next < text.length) {
                rafId = requestAnimationFrame(step);
            } else {
                setTimeout(() => { element.style.borderRight = 'none'; }, 300);
                cancelAnimationFrame(rafId);
            }
        };
        rafId = requestAnimationFrame(step);
    }
    
    // Observe AI Facts section for reveal
    if (aiFactsSection && aiFactsTitle) {
        const aiFactsObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    aiFactsTitle.classList.add('revealed');
                    if (interactiveArea) {
                        interactiveArea.classList.add('revealed');
                    }
                    // Start smoother typewriter effect
                    setTimeout(() => {
                        typeWriter(aiFactsTitle, 'Klik og se hvorfor AI kan forbedre din virksomhed', 18);
                    }, 150);
                    aiFactsObserver.unobserve(entry.target);
                }
            });
        }, { threshold: 0.2 });
        
        aiFactsObserver.observe(aiFactsSection);
    }
    
    // AI Facts data (this would normally come from Jekyll)
    const aiFacts = [
        { title: "Produktivitet", text: "AI kan øge produktiviteten med op til 40% i administrative opgaver", source: "McKinsey Global Institute" },
        { title: "Omkostninger", text: "61% af virksomheder rapporterer betydelige omkostningsbesparelser efter AI-implementering", source: "MIT Sloan Management Review" },
        { title: "Kundetilfredshed", text: "Virksomheder med AI-integration har 23% højere kundetilfredshed", source: "Salesforce Research" },
        { title: "Beslutninger", text: "AI accelererer beslutningsprocesser med op til 25% hurtigere workflows", source: "Deloitte Insights" },
        { title: "Tidsbesparelse", text: "AI-automation kan frigøre op til 30% af medarbejdernes tid til strategiske opgaver", source: "World Economic Forum" },
        { title: "Fejlreduktion", text: "AI reducerer fejlraten med 85% i dataanalyse og rapportering", source: "IBM Institute for Business Value" },
        { title: "ROI", text: "Virksomheder med AI har 35% bedre ROI på deres digitale investeringer", source: "Accenture Research" },
        { title: "Forudsigelse", text: "AI kan forudsige kundeadfærd med 95% nøjagtighed", source: "Forrester Research" },
        { title: "Operationer", text: "Implementering af AI resulterer i 20% reduktion i operationelle omkostninger", source: "PwC Global AI Survey" },
        { title: "Innovation", text: "AI-driven virksomheder lancere produkter 50% hurtigere end traditionelle", source: "Harvard Business Review" },
        { title: "Markedsføring", text: "AI-optimerede kampagner har 3x højere konverteringsrater", source: "HubSpot Research" },
        { title: "Kundeservice", text: "AI chatbots reducerer support-omkostninger med 67%", source: "Oracle Research" },
        { title: "Analytik", text: "AI kan identificere mønstre i data 1000x hurtigere end mennesker", source: "Microsoft AI Lab" },
        { title: "Personale", text: "AI hjælper med at reducere rekrutteringsomkostninger med 43%", source: "LinkedIn Talent Solutions" },
        { title: "Konkurrence", text: "AI-adoptere har 23% højere markedsandele end ikke-adoptere", source: "Bain & Company" }
    ];
    
    function createFactBox(fact, x, y) {
        // Remove existing fact box
        if (currentFactBox) {
            currentFactBox.remove();
        }
        
        // Create new fact box
        const factBox = document.createElement('div');
        factBox.className = 'fact-box dynamic-fact-box';
        factBox.innerHTML = `
            <h4 class="fact-title">${fact.title}</h4>
            <p class="fact-text">${fact.text}</p>
            <p class="fact-source">${fact.source}</p>
        `;
        
        // Get the interactive area bounds
        const interactiveArea = aiFactsSection.querySelector('.interactive-area');
        const rect = interactiveArea.getBoundingClientRect();
        
        // Position relative to the interactive area
        const relativeX = x - rect.left;
        const relativeY = y - rect.top;
        
        // Smart positioning to avoid clipping
        const boxWidth = 280;
        const boxHeight = 160;
        const padding = 15;
        
        // Calculate optimal position (center on click)
        let finalX = relativeX - boxWidth / 2;
        let finalY = relativeY - boxHeight / 2;
        
        // Smart boundary adjustment - allow closer to edges
        if (finalX < padding) {
            finalX = padding;
        } else if (finalX + boxWidth > rect.width - padding) {
            finalX = rect.width - boxWidth - padding;
        }
        
        if (finalY < padding) {
            finalY = padding;
        } else if (finalY + boxHeight > rect.height - padding) {
            finalY = rect.height - boxHeight - padding;
        }
        
        // Ensure fact box doesn't overlap with title box
        if (finalY < 120) {
            finalY = 120;
        }
        
        factBox.style.left = finalX + 'px';
        factBox.style.top = finalY + 'px';
        factBox.style.position = 'absolute';
        factBox.style.zIndex = '1000';
        
        // Add to container
        factBoxesContainer.appendChild(factBox);
        
        // Animate in
        setTimeout(() => {
            factBox.classList.add('show');
        }, 100);
        
        currentFactBox = factBox;
        
        // Auto-remove after 6 seconds
        setTimeout(() => {
            if (factBox && factBox.parentNode) {
                factBox.classList.remove('show');
                setTimeout(() => {
                    if (factBox.parentNode) {
                        factBox.remove();
                    }
                }, 500);
            }
        }, 6000);
    }
    
    function showFactAtPosition(x, y) {
        const fact = aiFacts[factIndex];
        createFactBox(fact, x, y);
        factIndex = (factIndex + 1) % aiFacts.length;
    }
    
    // Click handler for interactive area is handled in fix.js to avoid duplicates
    
    // Mouse Trail for AI Facts Section Only
    let mouseTrailEnabled = false;
    
    function createMouseTrail(e) {
        if (!mouseTrailEnabled) return;
        
        const trail = document.createElement('div');
        trail.className = 'mouse-trail';
        trail.style.left = e.clientX - 10 + 'px';
        trail.style.top = e.clientY - 10 + 'px';
        
        document.body.appendChild(trail);
        
        setTimeout(() => {
            trail.remove();
        }, 500);
    }
    
    function enableMouseTrail() {
        mouseTrailEnabled = true;
        aiFactsSection.style.cursor = 'none';
    }
    
    function disableMouseTrail() {
        mouseTrailEnabled = false;
        aiFactsSection.style.cursor = 'default';
    }
    
    // Add mouse trail only in AI Facts section
    if (aiFactsSection) {
        aiFactsSection.addEventListener('mouseenter', enableMouseTrail);
        aiFactsSection.addEventListener('mouseleave', disableMouseTrail);
        aiFactsSection.addEventListener('mousemove', createMouseTrail);
    }
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            const targetId = this.getAttribute('href');
            
            // Skip if it's just "#"
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                e.preventDefault();
                
                const header = document.querySelector('.site-header');
                const headerHeight = header ? header.offsetHeight : 0;
                const targetPosition = targetElement.offsetTop - headerHeight - 20;
                
                window.scrollTo({
                    top: targetPosition,
                    behavior: 'smooth'
                });
            }
        });
    });
    
    // Contact form handling
    const contactForm = document.querySelector('.contact-form');
    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            const formData = new FormData(this);
            const submitButton = this.querySelector('.form-submit');
            const originalText = submitButton.textContent;
            
            // Show loading state
            submitButton.textContent = 'Sender...';
            submitButton.disabled = true;
            
            // Simulate form submission (replace with actual form handling)
            setTimeout(() => {
                submitButton.textContent = '✓ Sendt!';
                submitButton.style.background = '#22c55e';
                
                // Reset form
                this.reset();
                
                // Reset button after 3 seconds
                setTimeout(() => {
                    submitButton.textContent = originalText;
                    submitButton.style.background = '';
                    submitButton.disabled = false;
                }, 3000);
            }, 2000);
        });
    }
    
    // Intersection Observer for animations (reuse earlier observerOptions)
    const animatedElements = document.querySelectorAll('.service-card, .team-member, .fact-popup');
    if (animatedElements.length) {
        const observer = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.style.opacity = '1';
                    entry.target.style.transform = 'translateY(0)';
                }
            });
        }, observerOptions);
        
        animatedElements.forEach(el => {
            el.style.opacity = '0';
            el.style.transform = 'translateY(30px)';
            el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
            observer.observe(el);
        });
    }
    
    // Header scroll effect
    const header = document.querySelector('.site-header');
    let lastScrollY = window.scrollY;
    
    if (header) {
        window.addEventListener('scroll', () => {
            const currentScrollY = window.scrollY;
            
            if (currentScrollY > 100) {
                header.style.background = 'rgba(255, 255, 255, 0.95)';
                header.style.backdropFilter = 'blur(10px)';
                header.style.boxShadow = '0 2px 8px rgba(0, 0, 0, 0.05)';
            } else {
                header.style.background = 'var(--bg)';
                header.style.backdropFilter = 'none';
                header.style.boxShadow = 'none';
            }
            
            lastScrollY = currentScrollY;
        });
    }
    
    // Service cards hover effect is handled by CSS
    
    // Team member cards hover effect
    const teamMembers = document.querySelectorAll('.team-member');
    teamMembers.forEach(member => {
        member.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px)';
        });
        
        member.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0)';
        });
    });
    
    // Keyboard navigation support
    document.addEventListener('keydown', function(e) {
        // ESC key closes mobile drawer
        if (e.key === 'Escape' && mobileDrawer && mobileDrawer.classList.contains('active')) {
            closeMobileDrawer();
        }
    });
    
    // Performance optimization: Debounce scroll events
    function debounce(func, wait) {
        let timeout;
        return function executedFunction(...args) {
            const later = () => {
                clearTimeout(timeout);
                func(...args);
            };
            clearTimeout(timeout);
            timeout = setTimeout(later, wait);
        };
    }
    
    // Apply debouncing to scroll events
    const debouncedScrollHandler = debounce(() => {
        // Any expensive scroll operations can go here
    }, 16); // ~60fps
    
    window.addEventListener('scroll', debouncedScrollHandler);
    
    // Internationalization
    const translations = {
        da: {
            'team.cta': 'TEAM',
            'team.cta.expanded': 'TEAM',
            'team.gustav.competencies': 'Gustav har arbejdet med blockchain og open-source teknologi siden 2016 og har bidraget til projekter som BrainBot (Ethereum), Linkdrop og NEAR Foundation. Han kombinerer dyb teknisk indsigt med erfaring inden for produktstrategi og forretningsudvikling i internationale miljøer. Hos SAIBA leder Gustav den tekniske og strategiske udvikling med fokus på, hvordan AI og ny teknologi kan omsættes til løsninger, der skaber målbar værdi for virksomheder og organisationer.',
            'team.peter.competencies': 'Peter har arbejdet med blockchain, AI og digitale produkter siden 2021 og har været en central del af NEAR-økosystemet – først i NEAR Foundation og siden som stifter af NEARWEEK. Han har solid erfaring med produktudvikling, strategi og positionering samt i at bygge bro mellem teknologi, brand og brugeroplevelse. Hos SAIBA arbejder Peter med forretningsstrategi og produktretning med fokus på at forene teknologisk innovation med klare kommunikations- og markedsmål.',
            'team.frederik.competencies': 'Frederik har arbejdet med blockchain og AI siden 2020 og kombinerer kreativ tænkning med en strategisk forståelse for, hvordan teknologi kan styrke forretning og organisation. Han har mere end ti års erfaring fra modebranchen, herunder som COO for Revolver Trade Show. Hos SAIBA arbejder Frederik med strategi, udvikling og ledelse med fokus på, at teknologi implementeres med tydelig retning, effekt og forretningsmæssig værdi.',
            'team.jens.competencies': 'Jens har en baggrund som snedker og kunsthistoriker og har siden 2021 arbejdet med blockchain og AI – særligt inden for marketing, design og regenerative AI-projekter. Han forener håndværksmæssig præcision med kreativ forståelse og evnen til at omsætte idéer til klare visuelle koncepter. Hos SAIBA arbejder Jens med konceptudvikling, visuel retning og anvendelsen af AI i kreative og kommunikative processer.'
        },
        en: {
            'team.cta': 'TEAM',
            'team.cta.expanded': 'TEAM',
            'team.gustav.competencies': 'Gustav has worked with blockchain and open-source technology since 2016 and has contributed to projects like BrainBot (Ethereum), Linkdrop and NEAR Foundation. He combines deep technical insight with experience in product strategy and business development in international environments. At SAIBA, Gustav leads technical and strategic development with a focus on how AI and new technology can be translated into solutions that create measurable value for companies and organizations.',
            'team.peter.competencies': 'Peter has worked with blockchain, AI and digital products since 2021 and has been a central part of the NEAR ecosystem – first at NEAR Foundation and later as founder of NEARWEEK. He has solid experience with product development, strategy and positioning as well as building bridges between technology, brand and user experience. At SAIBA, Peter works with business strategy and product direction with a focus on uniting technological innovation with clear communication and marketing goals.',
            'team.frederik.competencies': 'Frederik has worked with blockchain and AI since 2020 and combines creative thinking with a strategic understanding of how technology can strengthen business and organization. He has more than ten years of experience from the fashion industry, including as COO for Revolver Trade Show. At SAIBA, Frederik works with strategy, development and leadership with a focus on technology being implemented with clear direction, effect and business value.',
            'team.jens.competencies': 'Jens has a background as a carpenter and art historian and has since 2021 worked with blockchain and AI – particularly within marketing, design and regenerative AI projects. He combines craft precision with creative understanding and the ability to translate ideas into clear visual concepts. At SAIBA, Jens works with concept development, visual direction and the application of AI in creative and communicative processes.'
        }
    };
    
    function getCurrentLanguage() {
        // Check if dark mode is enabled to determine language
        const isDark = html.classList.contains('dark-mode');
        return isDark ? 'en' : 'da'; // Assuming dark mode = English, light mode = Danish
    }
    
    // Update all translations when theme changes
    function updateTranslations() {
        const elements = document.querySelectorAll('[data-i18n]');
        elements.forEach(element => {
            const key = element.getAttribute('data-i18n');
            if (translations[getCurrentLanguage()] && translations[getCurrentLanguage()][key]) {
                element.textContent = translations[getCurrentLanguage()][key];
            }
        });
    }
    
    function translate(key) {
        const lang = getCurrentLanguage();
        return translations[lang] && translations[lang][key] ? translations[lang][key] : translations['da'][key] || key;
    }


    // Team Section Expand/Collapse
    const teamExpandBtn = document.getElementById('teamExpandBtn');
    const teamGrid = document.getElementById('teamGrid');
    const teamDivider = document.getElementById('teamDivider');
    
    if (teamExpandBtn && teamGrid) {
        let isExpanded = false;
        
        teamExpandBtn.addEventListener('click', function() {
            isExpanded = !isExpanded;
            
            if (isExpanded) {
                teamGrid.classList.add('expanded');
                teamExpandBtn.classList.add('expanded');
                if (teamDivider) teamDivider.classList.add('expanded');
            } else {
                teamGrid.classList.remove('expanded');
                teamExpandBtn.classList.remove('expanded');
                if (teamDivider) teamDivider.classList.remove('expanded');
            }
        });
    }

    // Team Member Competencies Expand/Collapse - Only one at a time
    function initTeamExpansion() {
        const teamExpandBtns = document.querySelectorAll('.team-expand-btn');
        console.log('Found team expand buttons:', teamExpandBtns.length);
        
        teamExpandBtns.forEach((btn, index) => {
            btn.addEventListener('click', function(e) {
                e.preventDefault();
                e.stopPropagation();
                
                console.log('Clicked team member button:', index);
                
                const content = this.parentElement.querySelector('.team-competencies-content');
                const isCurrentlyExpanded = content.classList.contains('expanded');
                
                // ALWAYS close all team members first
                teamExpandBtns.forEach((otherBtn, otherIndex) => {
                    const otherContent = otherBtn.parentElement.querySelector('.team-competencies-content');
                    otherContent.classList.remove('expanded');
                    otherBtn.classList.remove('expanded');
                    console.log('Closed team member:', otherIndex);
                });
                
                // Only expand the clicked one if it wasn't already expanded
                if (!isCurrentlyExpanded) {
                    content.classList.add('expanded');
                    this.classList.add('expanded');
                    console.log('Expanded team member:', index);
                } else {
                    console.log('Collapsed team member:', index);
                }
            });
        });
    }
    
    // Initialize team expansion after DOM is ready
    initTeamExpansion();

    // Initialize translations on page load
    updateTranslations();
    
    // Ensure translations are applied before showing page
    setTimeout(function() {
      updateTranslations();
    }, 10);
    
    // Wait for fonts to load before showing page
    if (document.fonts && document.fonts.ready) {
      document.fonts.ready.then(function() {
        updateTranslations();
      });
    }

    // SAIBA website initialized successfully! 🚀
});
