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
            
            // Create simple fact box
            const factBox = document.createElement('div');
            factBox.style.position = 'absolute';
            factBox.style.left = e.clientX + 'px';
            factBox.style.top = e.clientY + 'px';
            factBox.style.background = 'white';
            factBox.style.border = '2px solid black';
            factBox.style.padding = '15px';
            factBox.style.borderRadius = '8px';
            factBox.style.maxWidth = '250px';
            factBox.style.fontSize = '14px';
            factBox.style.zIndex = '1000';
            factBox.innerHTML = 'AI kan øge produktiviteten med op til 40%';
            
            document.body.appendChild(factBox);
            
            // Remove after 4 seconds
            setTimeout(() => {
                factBox.remove();
            }, 4000);
        });
    }
});
