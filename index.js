window.addEventListener('DOMContentLoaded', () => {
    VANTA.BIRDS({
        el: "#vanta",
        mouseControls: true,
        touchControls: true,
        gyroControls: false,
        minHeight: 200.00,
        minWidth: 200.00,
        scale: 1.00,
        scaleMobile: 1.00,
        birdSize: 1.10,
        wingSpan: 27.00,
        speedLimit: 4.00,
        separation: 28.00,
        alignment: 23.00,
        cohesion: 21.00,
        quantity: 3.00,
        backgroundAlpha: 0.0
    })
    
    setTimeout(() => {
        const main = document.querySelector('main')
        main.style.opacity = 1
    }, 1000)
})



