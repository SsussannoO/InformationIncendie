const slides = document.querySelector('.slides');
const slideItems = document.querySelectorAll('.slide');
const prev = document.querySelector('.prev');
const next = document.querySelector('.next');

let index = 0;
const total = slideItems.length;
let isAnimating = false; // empêche les clics rapides

// Fonction d'affichage
function goToSlide(i) {
    if (isAnimating) return;

    isAnimating = true;
    index = (i + total) % total;

    slides.style.transform = `translateX(-${index * 100}%)`;

    // On débloque après la transition
    setTimeout(() => {
        isAnimating = false;
    }, 500);
}

next.onclick = () => goToSlide(index + 1);
prev.onclick = () => goToSlide(index - 1);

// --- SWIPE MOBILE ---
let startX = 0;

slides.addEventListener('touchstart', e => {
    startX = e.touches[0].clientX;
});

slides.addEventListener('touchend', e => {
    let endX = e.changedTouches[0].clientX;

    if (endX < startX - 50) goToSlide(index + 1);
    if (endX > startX + 50) goToSlide(index - 1);
});

// Initialisation
goToSlide(0);
