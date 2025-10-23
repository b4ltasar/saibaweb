// Theme Management Module
export class ThemeManager {
    constructor() {
        this.themeToggle = document.getElementById('theme-toggle');
        this.drawerThemeToggle = document.getElementById('drawer-theme-toggle');
        this.html = document.documentElement;
        
        this.init();
    }
    
    init() {
        // Initialize theme from localStorage
        const savedTheme = localStorage.getItem('theme') || 'light';
        this.html.setAttribute('data-theme', savedTheme);
        
        // Bind event listeners
        if (this.themeToggle) {
            this.themeToggle.addEventListener('click', () => this.toggleTheme());
        }
        
        if (this.drawerThemeToggle) {
            this.drawerThemeToggle.addEventListener('click', () => this.toggleTheme());
        }
    }
    
    toggleTheme() {
        const currentTheme = this.html.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        this.html.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
    }
    
    // Keyboard support
    handleKeyboard(e) {
        if ((e.key === ' ' || e.key === 'Enter') && 
            (document.activeElement === this.themeToggle || document.activeElement === this.drawerThemeToggle)) {
            e.preventDefault();
            this.toggleTheme();
        }
    }
}