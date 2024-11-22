class Bear {
    constructor() {
        this.element = document.createElement('div');
        this.element.className = 'floating-bear';
        
        // Random size between 30px and 80px
        this.size = Math.random() * 50 + 30;
        this.element.style.width = `${this.size}px`;
        this.element.style.height = `${this.size}px`;
        
        // Speed based on size (bigger bears move faster)
        this.duration = (15 - (this.size - 30) / 50 * 7) * 1000; // 8-15 seconds
        
        // Random position outside content area
        const contentWidth = 800; // matches CSS var(--content-width)
        const windowWidth = window.innerWidth;
        const sideSpace = (windowWidth - contentWidth) / 2;
        
        // 70% chance to spawn in wider side areas, 30% chance to spawn in gaps between content
        let x;
        if (Math.random() < 0.7) {
            // Spawn in side areas
            x = Math.random() < 0.5 ? 
                Math.random() * (sideSpace - this.size) : // Left side
                windowWidth - sideSpace + Math.random() * (sideSpace - this.size); // Right side
        } else {
            // Spawn in gaps between content (if any)
            x = Math.random() * (windowWidth - this.size);
        }
        
        // Start below screen
        this.element.style.left = `${x}px`;
        this.element.style.top = `${window.innerHeight + this.size}px`;
        
        // Add slight wobble
        this.wobbleAmount = Math.random() * 30 - 15; // -15 to 15 pixels
        this.wobbleSpeed = Math.random() * 2 + 1; // 1-3 seconds
        
        document.body.appendChild(this.element);
        this.animate();
    }
    
    animate() {
        const keyframes = [
            { 
                top: `${window.innerHeight + this.size}px`,
                transform: 'translateX(0)'
            },
            { 
                top: '0px',
                transform: `translateX(${this.wobbleAmount}px)`
            },
            { 
                top: `${-this.size}px`,
                transform: 'translateX(0)'
            }
        ];
        
        const animation = this.element.animate(keyframes, {
            duration: this.duration,
            easing: 'linear'
        });
        
        animation.onfinish = () => {
            this.element.remove();
        };
    }
}

function spawnBear() {
    new Bear();
    // Random delay between 100ms and 2000ms for next bear
    setTimeout(spawnBear, Math.random() * 1900 + 100);
}

// Start spawning bears when the page loads
window.addEventListener('load', () => {
    spawnBear();
});
