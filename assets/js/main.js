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
    const mainClickBox = document.querySelector('.main-click-box');
    const factBoxes = document.querySelectorAll('.fact-box');
    const aiFactsSection = document.querySelector('.ai-facts');
    
    let factsVisible = false;
    
    function toggleFactBoxes() {
        if (factsVisible) {
            // Hide all fact boxes
            factBoxes.forEach((box, index) => {
                setTimeout(() => {
                    box.classList.remove('show');
                }, index * 100);
            });
            factsVisible = false;
        } else {
            // Show all fact boxes with staggered animation
            factBoxes.forEach((box, index) => {
                setTimeout(() => {
                    box.classList.add('show');
                }, index * 200);
            });
            factsVisible = true;
        }
    }
    
    if (mainClickBox) {
        mainClickBox.addEventListener('click', toggleFactBoxes);
    }
    
    // Add click handlers to individual fact boxes for better UX
    factBoxes.forEach(box => {
        box.addEventListener('click', function() {
            // Optional: Add individual box interactions here
            console.log('Fact box clicked:', this.querySelector('.fact-text').textContent);
        });
    });
    
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
