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
        
        if (projectsCard) projectsCard.classList.remove('expanded');
        if (projectsInitial) projectsInitial.classList.remove('hidden');
        if (projectsDetail) projectsDetail.classList.add('hidden');
    }

    menuItems.forEach(item => {
        const btn = document.getElementById(item.btnId);
        const card = document.getElementById(item.cardId);
        const closeBtn = document.getElementById(item.closeId);

        if (btn && card) {
            btn.addEventListener('click', (e) => {
                e.preventDefault();
                const isHidden = card.classList.contains('hidden');
                closeAllCards();
                if (isHidden) card.classList.remove('hidden');
            });
        }

        if (closeBtn && card) {
            closeBtn.addEventListener('click', () => closeAllCards());
        }
    });

    // --- VÄXLA PROJEKT ---
    function showProject(targetId) {
        // Expandera kortet om det inte redan är expanderat
        projectsCard.classList.add('expanded');
        projectsInitial.classList.add('hidden');
        projectsDetail.classList.remove('hidden');

        // Visa rätt innehåll
        document.querySelectorAll('.project-content').forEach(p => p.classList.add('hidden'));
        const activeProject = document.getElementById(targetId);
        if (activeProject) activeProject.classList.remove('hidden');

        // Markera rätt symbol i topp-raden
        document.querySelectorAll('.symbol-nav-item').forEach(navBtn => {
            if (navBtn.getAttribute('data-project') === targetId) {
                navBtn.classList.add('active');
            } else {
                navBtn.classList.remove('active');
            }
        });

        // Nollställ scroll för bilderna
        const imgCol = activeProject ? activeProject.querySelector('.project-images-column') : null;
        if (imgCol) imgCol.scrollTop = 0;
    }

    // Klick från 2x2 symbolerna i första vyn
    document.querySelectorAll('.symbol-item').forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-project');
            showProject(targetId);
        });
    });

    // Klick från symbol-raden längst upp i projektdetaljvyn
    document.querySelectorAll('.symbol-nav-item').forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-project');
            showProject(targetId);
        });
    });

    // Back-knappen tar dig tillbaka till de 4 stora symbolerna
    if (backBtn) {
        backBtn.addEventListener('click', () => {
            projectsCard.classList.remove('expanded');
            projectsDetail.classList.add('hidden');
            projectsInitial.classList.remove('hidden');
        });
    }

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeAllCards();
    });
});
