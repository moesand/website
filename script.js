document.addEventListener("DOMContentLoaded", () => {
    // Om du lägger till fler kategorier senare, lägg till dem i dessa listor
    const sections = [
        { btn: 'menu-about', card: 'about-card', close: 'close-about' },
        { btn: 'menu-contact', card: 'contact-card', close: 'close-contact' }
    ];

    function closeAllCards() {
        sections.forEach(section => {
            const card = document.getElementById(section.card);
            if (card) card.classList.add('hidden');
        });
    }

    sections.forEach(section => {
        const btn = document.getElementById(section.btn);
        const card = document.getElementById(section.card);
        const close = document.getElementById(section.close);

        if (btn && card) {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const isHidden = card.classList.contains('hidden');
                closeAllCards(); // Stäng andra om de är öppna
                if (isHidden) card.classList.remove('hidden');
            });
        }

        if (close && card) {
            close.addEventListener('click', () => {
                card.classList.add('hidden');
            });
        }
    });

    // Stäng med Escape
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeAllCards();
        }
    });
});
