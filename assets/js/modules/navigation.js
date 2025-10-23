// Navigation Module
export class NavigationManager {
    constructor() {
        this.burger = document.getElementById('burger');
        this.drawer = document.getElementById('drawer');
        this.drawerClose = document.getElementById('drawer-close');
        this.drawerBackdrop = document.querySelector('.drawer-backdrop');
        this.header = document.querySelector('.header');
        
        this.init();
    }
    
    init() {
        this.bindEvents();
        this.setupSmoothScrolling();
        this.setupHeaderScrollEffect();
    }
    
    bindEvents() {
        if (this.burger) {
            this.burger.addEventListener('click', () => this.openDrawer());
        }
        
        if (this.drawerClose) {
            this.drawerClose.addEventListener('click', () => this.closeDrawer());
        }
        
        if (this.drawerBackdrop) {
            this.drawerBackdrop.addEventListener('click', () => this.closeDrawer());
        }
        
        // Close drawer when clicking navigation links
        const drawerNavLinks = document.querySelectorAll('.drawer-nav a');
        drawerNavLinks.forEach(link => {
            link.addEventListener('click', () => this.closeDrawer());
        });
    }
    
    openDrawer() {
        this.drawer.setAttribute('aria-hidden', 'false');
        document.body.style.overflow = 'hidden';
    }
    
    closeDrawer() {
        this.drawer.setAttribute('aria-hidden', 'true');
        document.body.style.overflow = '';
    }
    
    setupSmoothScrolling() {
        const navLinks = document.querySelectorAll('a[href^="#"]');
        navLinks.forEach(link => {
            link.addEventListener('click', (e) => {
                e.preventDefault();
                
                const targetId = link.getAttribute('href');
                const targetElement = document.querySelector(targetId);
                
                if (targetElement) {
                    const headerHeight = this.header.offsetHeight;
                    const targetPosition = targetElement.offsetTop - headerHeight - 20;
                    
                    window.scrollTo({
                        top: targetPosition,
                        behavior: 'smooth'
                    });
                }
            });
        });
    }
    
    setupHeaderScrollEffect() {
        let lastScrollY = window.scrollY;
        
        window.addEventListener('scroll', this.debounce(() => {
            const currentScrollY = window.scrollY;
            
            if (currentScrollY > 100) {
                this.header.style.background = 'rgba(255, 255, 255, 0.95)';
                this.header.style.backdropFilter = 'blur(10px)';
            } else {
                this.header.style.background = 'var(--bg)';
                this.header.style.backdropFilter = 'none';
            }
            
            lastScrollY = currentScrollY;
        }, 16));
    }
    
    // Keyboard support
    handleKeyboard(e) {
        // ESC key closes drawer
        if (e.key === 'Escape' && this.drawer.getAttribute('aria-hidden') === 'false') {
            this.closeDrawer();
        }
    }
    
    // Utility function
    debounce(func, wait) {
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
}