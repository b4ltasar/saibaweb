// SAIBA Website - Main JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // Theme Management
    const darkModeToggle = document.getElementById('darkModeToggle');
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
    
    if (drawerThemeToggle) {
        drawerThemeToggle.addEventListener('click', toggleTheme);
    }
    
    // Mobile Navigation
    const burger = document.getElementById('burger');
    const drawer = document.getElementById('drawer');
    const drawerClose = document.getElementById('drawer-close');
    const drawerBackdrop = document.querySelector('.drawer-backdrop');
    
    function openDrawer() {
        drawer.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }
    
    function closeDrawer() {
        drawer.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }
    
    if (burger) {
        burger.addEventListener('click', openDrawer);
    }
    
    if (drawerClose) {
        drawerClose.addEventListener('click', closeDrawer);
    }
    
    if (drawerBackdrop) {
        drawerBackdrop.addEventListener('click', closeDrawer);
    }
    
    // Close drawer when clicking navigation links
    const drawerNavLinks = document.querySelectorAll('.drawer-nav a');
    drawerNavLinks.forEach(link => {
        link.addEventListener('click', closeDrawer);
    });
    
    // Interactive AI Facts Section
    const aiFactsSection = document.querySelector('.ai-facts');
    const factBoxesContainer = document.querySelector('.fact-boxes-container');
    
    let currentFactBox = null;
    let factIndex = 0;
    
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
    
    // Add click handler to the interactive area only
    if (aiFactsSection) {
        const interactiveArea = aiFactsSection.querySelector('.interactive-area');
        if (interactiveArea) {
            interactiveArea.addEventListener('click', function(e) {
                // Don't trigger if clicking on the main click box or existing fact boxes
                if (e.target.closest('.main-click-box') || e.target.closest('.fact-box')) {
                    return;
                }
                
                showFactAtPosition(e.clientX, e.clientY);
            });
        }
    }
    
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
    
    // Intersection Observer for animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const observer = new IntersectionObserver(function(entries) {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, observerOptions);
    
    // Observe elements for animation
    const animatedElements = document.querySelectorAll('.service-card, .team-member, .fact-popup');
    animatedElements.forEach(el => {
        el.style.opacity = '0';
        el.style.transform = 'translateY(30px)';
        el.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        observer.observe(el);
    });
    
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
    
    // Service cards hover effect
    const serviceCards = document.querySelectorAll('.service-card');
    serviceCards.forEach(card => {
        card.addEventListener('mouseenter', function() {
            this.style.transform = 'translateY(-8px) scale(1.02)';
        });
        
        card.addEventListener('mouseleave', function() {
            this.style.transform = 'translateY(0) scale(1)';
        });
    });
    
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
        // ESC key closes drawer
        if (e.key === 'Escape' && drawer && drawer.getAttribute('aria-hidden') === 'false') {
            closeDrawer();
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
    
    console.log('SAIBA website initialized successfully! 🚀');
});
