// Körs så fort sidan laddats
document.addEventListener("DOMContentLoaded", () => {
    
    // Lista på alla dina menyval och deras popup-kort
    const menuItems = [
        { btnId: 'menu-about',   cardId: 'about-card',   closeId: 'close-about' },
        { btnId: 'menu-consult', cardId: 'consult-card', closeId: 'close-consult' },
        { btnId: 'menu-contact', cardId: 'contact-card', closeId: 'close-contact' }
    ];

    // Funktion för att dölja ALLA popup-kort
    function closeAllCards() {
        menuItems.forEach(item => {
            const card = document.getElementById(item.cardId);
            if (card) {
                card.classList.add('hidden');
            }
        });
    }

    // Koppla ihop varje knapp med sitt kort
    menuItems.forEach(item => {
        const btn = document.getElementById(item.btnId);
        const card = document.getElementById(item.cardId);
        const closeBtn = document.getElementById(item.closeId);

        // Klick på menyval
        if (btn && card) {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();

                const isHidden = card.classList.contains('hidden');
                closeAllCards(); // Stäng alla andra först

                if (isHidden) {
                    card.classList.remove('hidden');
                }
            });
        }

        // Klick på kryss/stängningsknapp
        if (closeBtn && card) {
            closeBtn.addEventListener('click', (e) => {
                e.preventDefault();
                card.classList.add('hidden');
            });
        }
    });

    // Stäng alla popups om man trycker på ESC
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeAllCards();
        }
    });
});
