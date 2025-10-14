// Simple fix for burger menu and AI facts
document.addEventListener('DOMContentLoaded', function() {
    console.log('Fix script loaded');
    
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
            factBox.style.fontSize = '14px';
            factBox.style.zIndex = '1000';
            factBox.style.boxShadow = '0 4px 15px rgba(0,0,0,0.1)';
            factBox.style.fontFamily = "'Press Start 2P', monospace";
            factBox.style.fontSize = '11px';
            factBox.style.lineHeight = '1.4';
            factBox.innerHTML = '<div style="font-size: 12px; margin-bottom: 8px;">PRODUKTIVITET</div>AI kan øge produktiviteten med op til 40% i administrative opgaver<br><br><div style="font-size: 8px; opacity: 0.7;">McKinsey Global Institute</div>';
            
            interactiveArea.appendChild(factBox);
            
            // Remove after 6 seconds
            setTimeout(() => {
                factBox.remove();
            }, 6000);
        });
    }
});
