// SAIBA Website - Main JavaScript
// Modular Architecture with ES6 Modules

import { ThemeManager } from './modules/theme.js';
import { NavigationManager } from './modules/navigation.js';
import { TeamManager } from './modules/team.js';
import { InteractionsManager } from './modules/interactions.js';

class SAIBAWebsite {
    constructor() {
        this.themeManager = null;
        this.navigationManager = null;
        this.teamManager = null;
        this.interactionsManager = null;

        this.init();
    }

    init() {
        document.addEventListener('DOMContentLoaded', () => {
            this.initializeModules();
            this.bindGlobalEvents();
            this.logInitialization();
        });
    }

    initializeModules() {
        // Initialize all modules
        this.themeManager = new ThemeManager();
        this.navigationManager = new NavigationManager();
        this.teamManager = new TeamManager();
        this.interactionsManager = new InteractionsManager();
    }

    bindGlobalEvents() {
        // Global keyboard navigation support
        document.addEventListener('keydown', (e) => {
            this.themeManager.handleKeyboard(e);
            this.navigationManager.handleKeyboard(e);
            this.teamManager.handleKeyboard(e);
        });
    }

    logInitialization() {
        console.log('🚀 SAIBA website initialized successfully!');
        console.log('📦 Modules loaded:', {
            theme: !!this.themeManager,
            navigation: !!this.navigationManager,
            team: !!this.teamManager,
            interactions: !!this.interactionsManager
        });
    }
}

// Initialize the website
new SAIBAWebsite();