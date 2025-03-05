// Smooth Scroll with Offset
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute('href'));
        const headerOffset = document.querySelector('header').offsetHeight;
        const position = target.offsetTop - headerOffset;

        window.scrollTo({
            top: position,
            behavior: 'smooth'
        });
    });
});

// Copy Email to Clipboard
document.getElementById('copy-email-btn').addEventListener('click', function() {
    const email = 'calielfeijo@gmail.com';
    navigator.clipboard.writeText(email).then(() => {
        alert('Email copied to clipboard!');
    }).catch(err => {
        console.error('Could not copy email: ', err);
    });
});

// LinkedIn Button Redirect
document.getElementById('linkedin-btn').addEventListener('click', function() {
    window.open('https://linkedin.com/in/marianefeijo', '_blank');
});

// GitHub Button Redirect
document.getElementById('github-btn').addEventListener('click', function() {
    window.open('https://github.com/poeisie', '_blank');
});

// Scroll Animation
const sections = document.querySelectorAll('.secao');

function checkScroll() {
    sections.forEach(section => {
        const sectionPosition = section.getBoundingClientRect().top;
        const screenPosition = window.innerHeight / 1.3;

        if (sectionPosition < screenPosition) {
            section.classList.add('mostrar');
        }
    });
}

window.addEventListener('scroll', checkScroll);
checkScroll();