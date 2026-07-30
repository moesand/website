document.addEventListener("DOMContentLoaded", () => {
    const menuAbout = document.getElementById('menu-about');
    const menuContact = document.getElementById('menu-contact');
    const menuConsult = document.getElementById('menu-consult');
    
    const aboutCard = document.getElementById('about-card');
    const contactCard = document.getElementById('contact-card');
    const consultCard = document.getElementById('consult-card');
    
    const closeAbout = document.getElementById('close-about');
    const closeContact = document.getElementById('close-contact');
    const closeConsult = document.getElementById('close-consult');

    // Hjälpfunktion för att dölja alla kort
    function closeAll() {
        if (aboutCard) aboutCard.classList.add('hidden');
        if (contactCard) contactCard.classList.add('hidden');
        if (consultCard) consultCard.classList.add('hidden');
    }

    // ABOUT CLICK
    if (menuAbout && aboutCard) {
        menuAbout.addEventListener('click', (e) => {
            e.preventDefault();
            const isHidden = aboutCard.classList.contains('hidden');
            closeAll();
            if (isHidden) aboutCard.classList.remove('hidden');
        });
    }

    // CONTACT CLICK
    if (menuContact && contactCard) {
        menuContact.addEventListener('click', (e) => {
            e.preventDefault();
            const isHidden = contactCard.classList.contains('hidden');
            closeAll();
            if (isHidden) contactCard.classList.remove('hidden');
        });
    }

    // CONSULT CLICK
    if (menuConsult && consultCard) {
        menuConsult.addEventListener('click', (e) => {
            e.preventDefault();
            const isHidden = consultCard.classList.contains('hidden');
            closeAll();
            if (isHidden) consultCard.classList.remove('hidden');
        });
    }

    // STÄNG-KNAPPAR
    if (closeAbout) closeAbout.addEventListener('click', () => aboutCard.classList.add('hidden'));
    if (closeContact) closeContact.addEventListener('click', () => contactCard.classList.add('hidden'));
    if (closeConsult) closeConsult.addEventListener('click', () => consultCard.classList.add('hidden'));

    // STÄNG MED ESCAPE
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeAll();
    });
});
