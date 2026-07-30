document.addEventListener("DOMContentLoaded", () => {
    const menuAbout = document.getElementById('menu-about');
    const menuContact = document.getElementById('menu-contact');
    
    const aboutCard = document.getElementById('about-card');
    const contactCard = document.getElementById('contact-card');
    
    const closeAbout = document.getElementById('close-about');
    const closeContact = document.getElementById('close-contact');

    // Funktion för att dölja alla popups
    function closeAll() {
        if (aboutCard) aboutCard.classList.add('hidden');
        if (contactCard) contactCard.classList.add('hidden');
    }

    // Öppna/Växla ABOUT
    if (menuAbout && aboutCard) {
        menuAbout.addEventListener('click', (e) => {
            e.preventDefault();
            const isHidden = aboutCard.classList.contains('hidden');
            closeAll();
            if (isHidden) {
                aboutCard.classList.remove('hidden');
            }
        });
    }

    // Öppna/Växla CONTACT
    if (menuContact && contactCard) {
        menuContact.addEventListener('click', (e) => {
            e.preventDefault();
            const isHidden = contactCard.classList.contains('hidden');
            closeAll();
            if (isHidden) {
                contactCard.classList.remove('hidden');
            }
        });
    }

    // Stäng-knappar (krysset)
    if (closeAbout) {
        closeAbout.addEventListener('click', () => {
            aboutCard.classList.add('hidden');
        });
    }

    if (closeContact) {
        closeContact.addEventListener('click', () => {
            contactCard.classList.add('hidden');
        });
    }

    // Stäng med Escape-tangenten
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeAll();
        }
    });
});
