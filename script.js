document.addEventListener("DOMContentLoaded", () => {
    
    // --- POPUP/KORT HANTERING ---
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

    // --- VÄXLA ENKILDA PROJEKT ---
    function showProject(targetId) {
        // Expandera projektfönstret
        projectsCard.classList.add('expanded');
        projectsInitial.classList.add('hidden');
        projectsDetail.classList.remove('hidden');

        // Visa rätt projekt-innehåll
        document.querySelectorAll('.project-content').forEach(p => p.classList.add('hidden'));
        const activeProject = document.getElementById(targetId);
        if (activeProject) activeProject.classList.remove('hidden');

        // Markera den valda symbolen i toppraden
        document.querySelectorAll('.symbol-nav-item').forEach(navBtn => {
            if (navBtn.getAttribute('data-project') === targetId) {
                navBtn.classList.add('active');
            } else {
                navBtn.classList.remove('active');
            }
        });

        // Nollställ scroll för bildspalten när man byter projekt
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

    // Back-knapp för att gå tillbaka till symbolerna
    if (backBtn) {
        backBtn.addEventListener('click', () => {
            projectsCard.classList.remove('expanded');
            projectsDetail.classList.add('hidden');
            projectsInitial.classList.remove('hidden');
        });
    }

    // Stäng kort med ESC-tangenten
    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeAllCards();
    });


    // --- FÖRSTORINGSGLAS FÖR STARTSIDANS BILD ---
    const wrapper = document.getElementById('img-wrapper');
    const img = document.getElementById('main-img');
    const glass = document.getElementById('magnifier-glass');

    if (wrapper && img && glass) {
        const zoomLevel = 2; // Förstoringsgrad (2x zoom)

        wrapper.addEventListener('mouseenter', () => {
            glass.style.display = 'block';
            glass.style.backgroundImage = `url('${img.src}')`;
            glass.style.backgroundSize = `${img.width * zoomLevel}px ${img.height * zoomLevel}px`;
        });

        wrapper.addEventListener('mouseleave', () => {
            glass.style.display = 'none';
        });

        wrapper.addEventListener('mousemove', (e) => {
            const rect = img.getBoundingClientRect();
            const x = e.clientX - rect.left;
            const y = e.clientY - rect.top;

            // Centrera förstoringslinsen på muspekaren
            const glassWidth = glass.offsetWidth / 2;
            const glassHeight = glass.offsetHeight / 2;

            glass.style.left = `${x - glassWidth}px`;
            glass.style.top = `${y - glassHeight}px`;

            // Justera bakgrundsbilden inuti linsen för zoom-effekt
            const bgX = (x * zoomLevel) - glassWidth;
            const bgY = (y * zoomLevel) - glassHeight;

            glass.style.backgroundPosition = `-${bgX}px -${bgY}px`;
        });
    }
});
