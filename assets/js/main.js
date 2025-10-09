// SAIBA Website - Main JavaScript
document.addEventListener('DOMContentLoaded', function() {
    
    // Theme Management
    const themeToggle = document.getElementById('theme-toggle');
    const drawerThemeToggle = document.getElementById('drawer-theme-toggle');
    const html = document.documentElement;
    
    // Initialize theme from localStorage
    const savedTheme = localStorage.getItem('theme') || 'light';
    html.setAttribute('data-theme', savedTheme);
    
    // Theme toggle functionality
    function toggleTheme() {
        const currentTheme = html.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    }
    
    if (themeToggle) {
        themeToggle.addEventListener('click', toggleTheme);
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
    const interactiveButton = document.querySelector('.interactive-button');
    const factPopup = document.querySelector('.fact-popup');
    
    // AI Facts data
    const aiFacts = [
        {
            text: "61% af virksomheder der implementerer AI rapporterer betydelige omkostningsbesparelser",
            source: "MIT Sloan Management Review"
        },
        {
            text: "AI kan øge produktiviteten med op til 40% i administrative opgaver",
            source: "McKinsey Global Institute"
        },
        {
            text: "Virksomheder med AI-integration har 23% højere kundetilfredshed",
            source: "Salesforce Research"
        },
        {
            text: "AI reducerer fejlraten med 85% i dataanalyse og rapportering",
            source: "IBM Institute for Business Value"
        },
        {
            text: "Virksomheder der bruger AI har 25% hurtigere beslutningsprocesser",
            source: "Deloitte Insights"
        },
        {
            text: "AI kan identificere mønstre i data 1000x hurtigere end mennesker",
            source: "Harvard Business Review"
        }
    ];
    
    let currentFactIndex = 0;
    
    function showRandomFact() {
        if (!factPopup) return;
        
        // Get random fact
        const randomIndex = Math.floor(Math.random() * aiFacts.length);
        const fact = aiFacts[randomIndex];
        
        // Update popup content
        const factText = factPopup.querySelector('.fact-text');
        const factSource = factPopup.querySelector('.fact-source');
        
        if (factText) factText.textContent = fact.text;
        if (factSource) factSource.textContent = `Kilde: ${fact.source}`;
        
        // Show popup with animation
        factPopup.classList.add('show');
        
        // Hide popup after 5 seconds
        setTimeout(() => {
            factPopup.classList.remove('show');
        }, 5000);
    }
    
    if (interactiveButton) {
        interactiveButton.addEventListener('click', showRandomFact);
    }
    
    // Smooth scrolling for navigation links
    const navLinks = document.querySelectorAll('a[href^="#"]');
    navLinks.forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            const targetElement = document.querySelector(targetId);
            
            if (targetElement) {
                const headerHeight = document.querySelector('.header').offsetHeight;
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
    const header = document.querySelector('.header');
    let lastScrollY = window.scrollY;
    
    window.addEventListener('scroll', () => {
        const currentScrollY = window.scrollY;
        
        if (currentScrollY > 100) {
            header.style.background = 'rgba(255, 255, 255, 0.95)';
            header.style.backdropFilter = 'blur(10px)';
        } else {
            header.style.background = 'var(--bg)';
            header.style.backdropFilter = 'none';
        }
        
        lastScrollY = currentScrollY;
    });
    
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
        if (e.key === 'Escape' && drawer.getAttribute('aria-hidden') === 'false') {
            closeDrawer();
        }
        
        // Space or Enter on theme toggle
        if ((e.key === ' ' || e.key === 'Enter') && 
            (document.activeElement === themeToggle || document.activeElement === drawerThemeToggle)) {
            e.preventDefault();
            toggleTheme();
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
