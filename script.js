const menuAbout = document.getElementById('menu-about');
const aboutCard = document.getElementById('about-card');
const closeAbout = document.getElementById('close-about');

// Öppna brev-rutan när man klickar på About
menuAbout.addEventListener('click', (e) => {
    e.preventDefault();
    aboutCard.classList.remove('hidden');
});

// Stäng brev-rutan när man klickar på X
closeAbout.addEventListener('click', () => {
    aboutCard.classList.add('hidden');
});

// Stäng rutan om man trycker på Escape-tangenten
window.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        aboutCard.classList.add('hidden');
    }
});
