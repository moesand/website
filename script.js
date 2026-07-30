document.addEventListener("DOMContentLoaded", () => {
    
    // Alla menyval och deras kort/modaler
    const menuItems = [
        { btnId: 'menu-about',    cardId: 'about-card',    closeId: 'close-about' },
        { btnId: 'menu-projects', cardId: 'projects-card', closeId: 'close-projects' },
        { btnId: 'menu-consult',  cardId: 'consult-card',  closeId: 'close-consult' },
        { btnId: 'menu-contact',  cardId: 'contact-card',  closeId: 'close-contact' }
    ];

    // Funktion för att dölja alla fönster
    function closeAllCards() {
        menuItems.forEach(item => {
            const card = document.getElementById(item.cardId);
            if (card) {
                card.classList.add('hidden');
            }
        });
    }

    // Koppla ihop menyknappar och stängningsknappar
    menuItems.forEach(item => {
        const btn = document.getElementById(item.btnId);
        const card = document.getElementById(item.cardId);
        const closeBtn = document.getElementById(item.closeId);

        if (btn && card) {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                e.stopPropagation();

                const isHidden = card.classList.contains('hidden');
                closeAllCards();

                if (isHidden) {
                    card.classList.remove('hidden');
                }
            });
        }

        if (closeBtn && card) {
            closeBtn.addEventListener('click', (e) => {
                e.preventDefault();
                card.classList.add('hidden');
            });
        }
    });

    // --- PROJEKTVÄXLARE (PROJEKT-SYMBOLER) ---
    const symbolBtns = document.querySelectorAll('.symbol-btn');
    const projectViews = document.querySelectorAll('.project-view');

    symbolBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetProjectId = btn.getAttribute('data-project');

            // 1. Markera klickad symbol som aktiv
            symbolBtns.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');

            // 2. Visa motsvarande projekt-text
            projectViews.forEach(view => {
                if (view.id === targetProjectId) {
                    view.classList.add('active');
                } else {
                    view.classList.remove('active');
                }
            });

            // 3. Scrolla upp till toppen av projektrutan vid byte
            const container = document.querySelector('.project-details-container');
            if (container) {
                container.scrollTop = 0;
            }
        });
    });

    // Stäng alla fönster med ESC-tangenten
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') {
            closeAllCards();
        }
    });
});
