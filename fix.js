// Simple fix for burger menu and AI facts
document.addEventListener('DOMContentLoaded', function() {
    console.log('Fix script loaded');
    
    // Header scroll logic
    const header = document.querySelector('.site-header');
    const hero = document.querySelector('.hero');
    let lastScrollY = window.scrollY;
    let isScrollingDown = false;
    
    function updateHeader() {
        const scrollY = window.scrollY;
        const heroHeight = hero ? hero.offsetHeight : 0;
        
        if (scrollY > heroHeight) {
            header.classList.add('scrolled');
        } else {
            header.classList.remove('scrolled');
        }
        
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
        
        lastScrollY = scrollY;
    }
    
    window.addEventListener('scroll', updateHeader);
    updateHeader();
    
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
    
    // Typewriter effect for AI facts title with looping
    const aiFactsTitle = document.getElementById('aiFactsTitle');
    if (aiFactsTitle) {
        let hasAnimated = false;
        
        const titleObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting && !hasAnimated) {
                    setTimeout(() => {
                        entry.target.classList.add('typewriter-active');
                        hasAnimated = true;
                    }, 200);
                }
            });
        }, { threshold: 0.3 });
        
        titleObserver.observe(aiFactsTitle);
        
        // Restart animation every 8 seconds
        setInterval(() => {
            if (hasAnimated) {
                aiFactsTitle.classList.remove('typewriter-active');
                setTimeout(() => {
                    aiFactsTitle.classList.add('typewriter-active');
                }, 100);
            }
        }, 8000);
    }
    
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
            dot.style.width = '4px';
            dot.style.height = '4px';
            dot.style.background = 'rgba(0, 0, 0, 0.3)';
            dot.style.borderRadius = '0';
            dot.style.imageRendering = 'pixelated';
            dot.style.pointerEvents = 'none';
            dot.style.zIndex = '1';
            dot.style.transform = 'translate(-50%, -50%)';
            dot.style.opacity = (index / mouseTrail.length) * 1.0;
            
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
        const factWidth = 270;
        const factHeight = 180;
        const margin = 20;
        
        let bestX = Math.max(margin, Math.min(clickX - factWidth/2, rect.width - factWidth - margin));
        let bestY = Math.max(margin, Math.min(clickY - factHeight/2, rect.height - factHeight - margin));
        
        // Check for overlaps with existing facts
        const existingBoxes = document.querySelectorAll('.dynamic-fact-box');
        let attempts = 0;
        const maxAttempts = 50;
        
        while (attempts < maxAttempts) {
            let hasOverlap = false;
            
            existingBoxes.forEach(box => {
                const boxRect = box.getBoundingClientRect();
                const relativeBoxRect = {
                    left: boxRect.left - rect.left,
                    top: boxRect.top - rect.top,
                    right: boxRect.right - rect.left,
                    bottom: boxRect.bottom - rect.top
                };
                
                // Check if new position overlaps with existing box
                if (bestX < relativeBoxRect.right + margin &&
                    bestX + factWidth > relativeBoxRect.left - margin &&
                    bestY < relativeBoxRect.bottom + margin &&
                    bestY + factHeight > relativeBoxRect.top - margin) {
                    hasOverlap = true;
                }
            });
            
            if (!hasOverlap) break;
            
            // Try a new position
            const angle = (attempts / maxAttempts) * 2 * Math.PI;
            const radius = 100 + (attempts * 10);
            bestX = Math.max(margin, Math.min(clickX + Math.cos(angle) * radius - factWidth/2, rect.width - factWidth - margin));
            bestY = Math.max(margin, Math.min(clickY + Math.sin(angle) * radius - factHeight/2, rect.height - factHeight - margin));
            attempts++;
        }
        
        return { x: bestX, y: bestY };
    }
    
    if (interactiveArea) {
        interactiveArea.addEventListener('click', function(e) {
            console.log('AI Facts area clicked');
            
            // Get click position relative to interactive area
            const rect = interactiveArea.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;
            
            // Get current fact
            const fact = aiFacts[factIndex];
            factIndex = (factIndex + 1) % aiFacts.length;
            
            // Find non-overlapping position
            const position = findNonOverlappingPosition(x, y, rect);
            
            // Create fact box positioned within interactive area
            const factBox = document.createElement('div');
            factBox.className = 'dynamic-fact-box';
            factBox.style.position = 'absolute';
            factBox.style.left = position.x + 'px';
            factBox.style.top = position.y + 'px';
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
