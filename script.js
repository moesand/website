document.addEventListener("DOMContentLoaded", () => {
    const menuAbout = document.getElementById('menu-about');
    const aboutCard = document.getElementById('about-card');
    const closeAbout = document.getElementById('close-about');

    // Öppna när man trycker på About
    if (menuAbout && aboutCard) {
        menuAbout.addEventListener('click', (e) => {
            e.preventDefault();
            aboutCard.classList.remove('hidden');
        });
    }

    // Stäng när man trycker på krysset
    if (closeAbout && aboutCard) {
        closeAbout.addEventListener('click', () => {
            aboutCard.classList.add('hidden');
        });
    }

    // Stäng med Escape-tangenten
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && aboutCard) {
            aboutCard.classList.add('hidden');
        }
    });
});
