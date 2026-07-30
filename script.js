document.addEventListener("DOMContentLoaded", () => {
    console.log("Scriptet har laddats!");

    const menuAbout = document.getElementById('menu-about');
    const menuContact = document.getElementById('menu-contact');
    
    const aboutCard = document.getElementById('about-card');
    const contactCard = document.getElementById('contact-card');
    
    const closeAbout = document.getElementById('close-about');
    const closeContact = document.getElementById('close-contact');

    // Hjälpfunktion för att dölja alla kort
    function closeAll() {
        if (aboutCard) aboutCard.classList.add('hidden');
        if (contactCard) contactCard.classList.add('hidden');
    }

    // ABOUT CLICK
    if (menuAbout && aboutCard) {
        menuAbout.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const isHidden = aboutCard.classList.contains('hidden');
            closeAll();
            if (isHidden) {
                aboutCard.classList.remove('hidden');
            }
        });
    } else {
        console.error("Hittade inte menu-about eller about-card i HTML.");
    }

    // CONTACT CLICK
    if (menuContact && contactCard) {
        menuContact.addEventListener('click', (e) => {
            e.preventDefault();
            e.stopPropagation();
            const isHidden = contactCard.classList.contains('hidden');
            closeAll();
            if (isHidden) {
                contactCard.classList.remove('hidden');
            }
        });
    } else {
        console.error("Hittade inte menu-contact eller contact-card i HTML.");
    }

    // STÄNG-KNAPPAR
    if (closeAbout) {
        closeAbout.addEventListener('click', (e) => {
            e.preventDefault();
            aboutCard.classList.add('hidden');
        });
    }

    if (closeContact) {
        closeContact.addEventListener('click', (e) => {
            e.preventDefault();
            contactCard.classList.add('hidden');
        });
    }

    // STÄNG MED ESCAPE
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeAll();
        }
    });
});
