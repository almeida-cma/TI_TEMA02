// === MENU MOBILE ===
document.querySelector('.mobile-menu-btn').addEventListener('click', () => {
    const navLinks = document.querySelector('.nav-links');
    navLinks.classList.toggle('active');
});

// === CARROSSEL ===
let currentSlide = 0;
const slides = document.querySelector('.carousel-slide');
const totalSlides = slides.children.length;

document.querySelector('.carousel-next').addEventListener('click', () => {
    currentSlide = (currentSlide + 1) % totalSlides;
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
});

document.querySelector('.carousel-prev').addEventListener('click', () => {
    currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
    slides.style.transform = `translateX(-${currentSlide * 100}%)`;
});

// === FAQ (TOGGLE RESPOSTAS) ===
document.querySelectorAll('.faq-question').forEach(button => {
    button.addEventListener('click', () => {
        const answer = button.nextElementSibling;
        answer.classList.toggle('active');
    });
});

// === TEMA ESCURO/CLARO ===
document.querySelector('.theme-toggle-btn').addEventListener('click', () => {
    document.body.classList.toggle('theme-dark');
});

