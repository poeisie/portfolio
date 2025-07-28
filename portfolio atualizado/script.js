const themeToggle = document.getElementById('theme-toggle');
const moonIcon = themeToggle.querySelector('.material-symbols-outlined:first-child');
const sunIcon = themeToggle.querySelector('.material-symbols-outlined:last-child');
const head = document.head;

function setTheme(theme) {
    document.body.classList.remove('dark-mode');
    let darkCssLink = document.getElementById('dark-css');

    if (theme === 'dark') {
        if (!darkCssLink) {
            darkCssLink = document.createElement('link');
            darkCssLink.rel = 'stylesheet';
            darkCssLink.href = 'dark.css';
            darkCssLink.id = 'dark-css';
            head.appendChild(darkCssLink);
        }
        moonIcon.style.display = 'none';
        sunIcon.style.display = 'inline-block';
    } else {
        if (darkCssLink) {
            head.removeChild(darkCssLink);
        }
        moonIcon.style.display = 'inline-block';
        sunIcon.style.display = 'none';
    }
    localStorage.setItem('theme', theme);
}

const savedTheme = localStorage.getItem('theme');
const prefersDark = window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches;

if (savedTheme) {
    setTheme(savedTheme);
} else if (prefersDark) {
    setTheme('dark');
} else {
    setTheme('light');
}

themeToggle.addEventListener('click', () => {
    const currentTheme = localStorage.getItem('theme');
    if (currentTheme === 'dark') {
        setTheme('light');
    } else {
        setTheme('dark');
    }
});

document.querySelectorAll('nav a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const header = document.querySelector('header');
        const headerHeight = header.offsetHeight;

        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);

        if (targetElement) {
            const scrollPosition = targetElement.offsetTop - headerHeight - 20;
            window.scrollTo({
                top: scrollPosition,
                behavior: 'smooth'
            });
        }
        document.querySelectorAll('nav a').forEach(item => {
            item.classList.remove('active');
        });
        this.classList.add('active');
    });
});

window.addEventListener('scroll', () => {
    const sections = document.querySelectorAll('section');
    const navLinks = document.querySelectorAll('nav a');
    const header = document.querySelector('header');
    const headerHeight = header.offsetHeight;

    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop - headerHeight - 50;
        const sectionHeight = section.clientHeight;
        if (pageYOffset >= sectionTop && pageYOffset < sectionTop + sectionHeight) {
            current = section.getAttribute('id');
        }
    });

    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.href.includes(current) && current !== '') {
            link.classList.add('active');
        }
    });
});

document.addEventListener('DOMContentLoaded', () => {
    const carouselWrapper = document.querySelector('.carousel-wrapper');
    const carouselTrack = document.querySelector('.carousel-track');
    const projectCards = Array.from(carouselTrack.children);
    const carouselDotsContainer = document.querySelector('.carousel-dots');

    let currentIndex = 0;
    let autoSlideInterval;
    const slideIntervalTime = 5000;

    function startAutoSlide() {
        stopAutoSlide();
        autoSlideInterval = setInterval(() => {
            currentIndex++;
            updateCarousel();
        }, slideIntervalTime);
    }

    function stopAutoSlide() {
        clearInterval(autoSlideInterval);
    }

    function createDots() {
        carouselDotsContainer.innerHTML = '';
        for (let i = 0; i < projectCards.length; i++) {
            const dot = document.createElement('span');
            dot.classList.add('dot');
            dot.dataset.index = i;
            dot.addEventListener('click', () => {
                currentIndex = i;
                updateCarousel();
                stopAutoSlide();
                startAutoSlide();
            });
            carouselDotsContainer.appendChild(dot);
        }
    }

    function updateCarousel() {
        if (projectCards.length === 0) return;

        if (currentIndex < 0) {
            currentIndex = projectCards.length - 1;
        } else if (currentIndex >= projectCards.length) {
            currentIndex = 0;
        }

        const cardWidth = projectCards[0].offsetWidth;
        const cardMarginRight = parseFloat(getComputedStyle(projectCards[0]).marginRight);
        const itemFullWidth = cardWidth + cardMarginRight;

        carouselTrack.style.transform = `translateX(-${currentIndex * itemFullWidth}px)`;

        const dots = document.querySelectorAll('.carousel-dots .dot');
        dots.forEach((dot, index) => {
            if (index === currentIndex) {
                dot.classList.add('active');
            } else {
                dot.classList.remove('active');
            }
        });
    }

    carouselWrapper.addEventListener('mouseover', stopAutoSlide);
    carouselWrapper.addEventListener('mouseleave', startAutoSlide);

    createDots();
    updateCarousel();
    startAutoSlide();

    window.addEventListener('resize', updateCarousel);
});