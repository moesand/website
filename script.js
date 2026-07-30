document.addEventListener("DOMContentLoaded", () => {
    
    const menuItems = [
        { btnId: 'menu-about',    cardId: 'about-card',    closeId: 'close-about' },
        { btnId: 'menu-projects', cardId: 'projects-card', closeId: 'close-projects' },
        { btnId: 'menu-consult',  cardId: 'consult-card',  closeId: 'close-consult' },
        { btnId: 'menu-contact',  cardId: 'contact-card',  closeId: 'close-contact' }
    ];

    const projectsCard = document.getElementById('projects-card');
    const projectsInitial = document.getElementById('projects-initial-view');
    const projectsDetail = document.getElementById('projects-detail-view');
    const backBtn = document.getElementById('back-to-symbols');

    function closeAllCards() {
        menuItems.forEach(item => {
            const card = document.getElementById(item.cardId);
            if (card) card.classList.add('hidden');
        });
        // Återställ projects om det stängs
        projectsCard.classList.remove('expanded');
        projectsInitial.classList.remove('hidden');
        projectsDetail.classList.add('hidden');
    }

    menuItems.forEach(item => {
        const btn = document.getElementById(item.btnId);
        const card = document.getElementById(item.cardId);
        const closeBtn = document.getElementById(item.closeId);

        if (btn) {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                closeAllCards();
                card.classList.remove('hidden');
            });
        }

        if (closeBtn) {
            closeBtn.addEventListener('click', () => closeAllCards());
        }
    });

    // --- PROJEKT LOGIK ---

    // Klicka på symbol för att "dyka in"
    const symbolBtns = document.querySelectorAll('.symbol-item');
    symbolBtns.forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-project');
            
            // 1. Expandera rutan
            projectsCard.classList.add('expanded');
            
            // 2. Växla innehåll efter en kort delay (för snyggare animation)
            setTimeout(() => {
                projectsInitial.classList.add('hidden');
                projectsDetail.classList.remove('hidden');
                
                // Visa rätt projekt-text
                document.querySelectorAll('.project-content').forEach(p => p.classList.add('hidden'));
                document.getElementById(targetId).classList.remove('hidden');
                
                // Scrolla till toppen
                document.querySelector('.project-scroll-area').scrollTop = 0;
            }, 300);
        });
    });

    // Back-knapp inuti fönstret
    backBtn.addEventListener('click', () => {
        projectsCard.classList.remove('expanded');
        projectsDetail.classList.add('hidden');
        projectsInitial.classList.remove('hidden');
    });

    // ESC för att stänga allt
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeAllCards();
    });
});
