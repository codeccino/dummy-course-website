document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('#mobile-menu');
    const navLinks = document.querySelector('.nav-links');

    hamburger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
        hamburger.classList.toggle('active');
    });
});


let slideIndex = 0;
const slides = document.querySelectorAll('.carousel-item');
const totalSlides = slides.length;

showSlide(slideIndex);

function showSlide(index) {
    slides.forEach((slide, i) => {
        slide.style.display = 'none';
        slide.classList.remove('active');
    });
    slides[index].style.display = 'flex';
    setTimeout(() => slides[index].classList.add('active'), 50); // delay to apply transition
}

function changeSlide(direction) {
    slideIndex = (slideIndex + direction + totalSlides) % totalSlides;
    showSlide(slideIndex);
}

setInterval(() => {
    changeSlide(1); 
}, 3000);


