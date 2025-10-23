// Interactive Elements Module
export class InteractionsManager {
    constructor() {
        this.interactiveButton = document.querySelector('.interactive-button');
        this.factPopup = document.querySelector('.fact-popup');
        this.aiFactsSection = document.querySelector('.ai-facts');
        this.contactForm = document.querySelector('.contact-form');
        
        this.aiFacts = [
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
        
        this.mouseTrailEnabled = false;
        
        this.init();
    }
    
    init() {
        this.setupAIFacts();
        this.setupMouseTrail();
        this.setupContactForm();
        this.setupAnimations();
        this.setupServiceCardEffects();
    }
    
    setupAIFacts() {
        if (this.interactiveButton) {
            this.interactiveButton.addEventListener('click', () => this.showRandomFact());
        }
    }
    
    showRandomFact() {
        if (!this.factPopup) return;
        
        // Get random fact
        const randomIndex = Math.floor(Math.random() * this.aiFacts.length);
        const fact = this.aiFacts[randomIndex];
        
        // Update popup content
        const factText = this.factPopup.querySelector('.fact-text');
        const factSource = this.factPopup.querySelector('.fact-source');
        
        if (factText) factText.textContent = fact.text;
        if (factSource) factSource.textContent = `Kilde: ${fact.source}`;
        
        // Show popup with animation
        this.factPopup.classList.add('show');
        
        // Hide popup after 5 seconds
        setTimeout(() => {
            this.factPopup.classList.remove('show');
        }, 5000);
    }
    
    setupMouseTrail() {
        if (!this.aiFactsSection) return;
        
        this.aiFactsSection.addEventListener('mouseenter', () => this.enableMouseTrail());
        this.aiFactsSection.addEventListener('mouseleave', () => this.disableMouseTrail());
        this.aiFactsSection.addEventListener('mousemove', (e) => this.createMouseTrail(e));
    }
    
    enableMouseTrail() {
        this.mouseTrailEnabled = true;
        this.aiFactsSection.style.cursor = 'none';
    }
    
    disableMouseTrail() {
        this.mouseTrailEnabled = false;
        this.aiFactsSection.style.cursor = 'default';
    }
    
    createMouseTrail(e) {
        if (!this.mouseTrailEnabled) return;
        
        const trail = document.createElement('div');
        trail.className = 'mouse-trail';
        trail.style.left = e.clientX - 10 + 'px';
        trail.style.top = e.clientY - 10 + 'px';
        
        document.body.appendChild(trail);
        
        setTimeout(() => {
            trail.remove();
        }, 500);
    }
    
    setupContactForm() {
        if (!this.contactForm) return;
        
        this.contactForm.addEventListener('submit', (e) => {
            e.preventDefault();
            
            const submitButton = this.contactForm.querySelector('.form-submit');
            const originalText = submitButton.textContent;
            
            // Show loading state
            submitButton.textContent = 'Sender...';
            submitButton.disabled = true;
            
            // Simulate form submission (replace with actual form handling)
            setTimeout(() => {
                submitButton.textContent = '✓ Sendt!';
                submitButton.style.background = '#22c55e';
                
                // Reset form
                this.contactForm.reset();
                
                // Reset button after 3 seconds
                setTimeout(() => {
                    submitButton.textContent = originalText;
                    submitButton.style.background = '';
                    submitButton.disabled = false;
                }, 3000);
            }, 2000);
        });
    }
    
    setupAnimations() {
        // Intersection Observer for animations
        const observerOptions = {
            threshold: 0.1,
            rootMargin: '0px 0px -50px 0px'
        };
        
        const observer = new IntersectionObserver((entries) => {
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
    }
    
    setupServiceCardEffects() {
        const serviceCards = document.querySelectorAll('.service-card');
        serviceCards.forEach(card => {
            card.addEventListener('mouseenter', function() {
                this.style.transform = 'translateY(-8px) scale(1.02)';
            });
            
            card.addEventListener('mouseleave', function() {
                this.style.transform = 'translateY(0) scale(1)';
            });
        });
    }
}