// Particles animation
function createParticles() {
    const particlesContainer = document.getElementById('particles');
    const particleCount = 30;

    for (let i = 0; i < particleCount; i++) {
        const particle = document.createElement('div');
        particle.classList.add('particle');

        // Random size between 2px and 5px
        const size = Math.random() * 3 + 2;
        particle.style.width = `${size}px`;
        particle.style.height = `${size}px`;

        // Random position
        particle.style.left = `${Math.random() * 100}%`;
        particle.style.top = `${Math.random() * 100}%`;

        // Random animation duration between 10s and 20s
        const duration = Math.random() * 10 + 10;
        particle.style.animationDuration = `${duration}s`;

        particlesContainer.appendChild(particle);
    }
}

// Header scroll effect
window.addEventListener('scroll', function() {
    const header = document.getElementById('header');
    if (window.scrollY > 100) {
        header.classList.add('scrolled');
    } else {
        header.classList.remove('scrolled');
    }
});

// Scroll reveal animation
function scrollReveal() {
    const reveals = document.querySelectorAll('.reveal');

    for (let i = 0; i < reveals.length; i++) {
        const windowHeight = window.innerHeight;
        const revealTop = reveals[i].getBoundingClientRect().top;
        const revealPoint = 100;

        if (revealTop < windowHeight - revealPoint) {
            reveals[i].classList.add('active');
        } else {
            reveals[i].classList.remove('active');
        }
    }
}

// Timeline animation
function animateTimeline() {
    const timelineItems = document.querySelectorAll('.timeline-item');

    timelineItems.forEach((item, index) => {
        const rect = item.getBoundingClientRect();
        const isVisible = (rect.top <= window.innerHeight && rect.bottom >= 0);

        if (isVisible) {
            item.classList.add('visible');
        }
    });
}

// Smooth scrolling for anchor links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});

// Initialize
window.addEventListener('load', function() {
    createParticles();
    scrollReveal();
    animateTimeline();
});

window.addEventListener('scroll', function() {
    scrollReveal();
    animateTimeline();
});

function showContact(type) {
    const contactDisplay = document.getElementById('contact-info');
    let html = '';

    switch(type) {
        case 'github':
            html = `
                <h3>Мой GitHub</h3>
                <p>Тут вы можете посмотреть мои проекты и код:</p>
                <a href="https://github.com/yourusername" target="_blank">github.com/Ivanchello5001</a>
            `;
            break;
        case 'telegram':
            html = `
                <h3>Мой Telegram</h3>
                <p>Свяжитесь со мной в Telegram:</p>
                <a href="https://t.me/yourusername" target="_blank">@C0smicEmberr</a>
            `;
            break;
        case 'email':
            html = `
                <h3>Моя электронная почта</h3>
                <p>Пишите мне на email:</p>
                <a href="mailto:your.email@example.com">ivanivanchello2006@gmail.com</a>
            `;
            break;
    }

    contactDisplay.innerHTML = html;
    contactDisplay.classList.add('active');

    // Auto-hide after 10 seconds
    setTimeout(() => {
        contactDisplay.classList.remove('active');
    }, 10000);
}