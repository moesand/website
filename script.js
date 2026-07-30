document.addEventListener("DOMContentLoaded", () => {
    const menuAbout = document.getElementById('menu-about');
    const aboutCard = document.getElementById('about-card');
    const closeAbout = document.getElementById('close-about');

    // Öppna kortet
    if (menuAbout && aboutCard) {
        menuAbout.addEventListener('click', (e) => {
            e.preventDefault();
            aboutCard.classList.remove('hidden');
        });
    }

    // Stäng kortet med krysset
    if (closeAbout && aboutCard) {
        closeAbout.addEventListener('click', () => {
            aboutCard.classList.add('hidden');
        });
    }

    // Stäng kortet med Escape-tangenten
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && aboutCard) {
            aboutCard.classList.add('hidden');
        }
    });
});
