// Smooth scrolling for navbar links
document.querySelectorAll('nav a').forEach(anchor => {
    anchor.addEventListener('click', function(event) {
        event.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        window.scrollTo({
            top: targetSection.offsetTop - 50,
            behavior: 'smooth'
        });
    });
});

// Image Slider Logic
let slides = document.querySelectorAll('.slide');
let index = 0;

function showSlides() {
    slides.forEach(slide => slide.style.display = 'none');
    index = (index + 1) % slides.length;
    slides[index].style.display = 'block';
}

setInterval(showSlides, 2000);
