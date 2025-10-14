// Simple fix for burger menu and AI facts
document.addEventListener('DOMContentLoaded', function() {
    console.log('Fix script loaded');
    
    // Section reveal animations
    const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
    };
    
    const revealObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('revealed');
            }
        });
    }, observerOptions);
    
    // Observe all sections
    document.querySelectorAll('.section').forEach(section => {
        revealObserver.observe(section);
    });
    
    // Burger menu fix
    const burger = document.getElementById('burger');
    const drawer = document.getElementById('drawer');
    const close = document.getElementById('drawer-close');
    
    console.log('Burger found:', !!burger);
    console.log('Drawer found:', !!drawer);
    
    if (burger && drawer) {
        burger.addEventListener('click', function() {
            console.log('Burger clicked');
            drawer.style.display = 'block';
            drawer.setAttribute('aria-hidden', 'false');
        });
    }
    
    if (close) {
        close.addEventListener('click', function() {
            console.log('Close clicked');
            drawer.style.display = 'none';
            drawer.setAttribute('aria-hidden', 'true');
        });
    }
    
    // AI Facts fix
    const interactiveArea = document.querySelector('.interactive-area');
    console.log('Interactive area found:', !!interactiveArea);
    
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
        { title: "INNOVATION", text: "AI-driven virksomheder lancere produkter 50% hurtigere end traditionelle", source: "Harvard Business Review" }
    ];
    
    let factIndex = 0;
    
    if (interactiveArea) {
        interactiveArea.addEventListener('click', function(e) {
            console.log('AI Facts area clicked');
            
            // Remove existing fact boxes
            const existingBoxes = document.querySelectorAll('.dynamic-fact-box');
            existingBoxes.forEach(box => box.remove());
            
            // Get click position relative to interactive area
            const rect = interactiveArea.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Get current fact
            const fact = aiFacts[factIndex];
            factIndex = (factIndex + 1) % aiFacts.length;
            
            // Create fact box positioned within interactive area
            const factBox = document.createElement('div');
            factBox.className = 'dynamic-fact-box';
            factBox.style.position = 'absolute';
            factBox.style.left = Math.max(20, Math.min(x - 125, rect.width - 270)) + 'px';
            factBox.style.top = Math.max(20, Math.min(y - 80, rect.height - 180)) + 'px';
            factBox.style.background = 'white';
            factBox.style.border = '2px solid black';
            factBox.style.padding = '16px';
            factBox.style.borderRadius = '8px';
            factBox.style.maxWidth = '250px';
            factBox.style.zIndex = '1000';
            factBox.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
            factBox.style.fontFamily = "'Press Start 2P', monospace";
            factBox.style.fontSize = '11px';
            factBox.style.lineHeight = '1.4';
            factBox.style.opacity = '0';
            factBox.style.transform = 'scale(0.8) translateY(20px)';
            factBox.style.transition = 'all 0.5s ease';
            
            factBox.innerHTML = `<div style="font-size: 12px; margin-bottom: 8px;">${fact.title}</div>${fact.text}<br><br><div style="font-size: 8px; opacity: 0.7;">${fact.source}</div>`;
            
            interactiveArea.appendChild(factBox);
            
            // Animate in
            setTimeout(() => {
                factBox.style.opacity = '1';
                factBox.style.transform = 'scale(1) translateY(0)';
            }, 10);
            
            // Remove after 6 seconds
            setTimeout(() => {
                factBox.style.opacity = '0';
                factBox.style.transform = 'scale(0.8) translateY(-20px)';
                setTimeout(() => factBox.remove(), 500);
            }, 6000);
        });
    }
});
