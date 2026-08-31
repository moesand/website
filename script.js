document.addEventListener("DOMContentLoaded", () => {
    
    // --- POPUP-KORT & MENYHANTERING ---
    const menuItems = [
        { btnId: 'menu-about',        cardId: 'about-card',        closeId: 'close-about' },
        { btnId: 'menu-projects',     cardId: 'projects-card',     closeId: 'close-projects' },
        { btnId: 'menu-illustrations', cardId: 'illustrations-card', closeId: 'close-illustrations' },
        { btnId: 'menu-consult',      cardId: 'consult-card',      closeId: 'close-consult' },
        { btnId: 'menu-contact',      cardId: 'contact-card',      closeId: 'close-contact' }
    ];

    const projectsCard = document.getElementById('projects-card');
    const projectsInitial = document.getElementById('projects-initial-view');
    const projectsDetail = document.getElementById('projects-detail-view');
    const backBtn = document.getElementById('back-to-symbols');

    function closeAllCards() {
        menuItems.forEach(item => {
            const card = document.getElementById(item.cardId);
            if (card) {
                card.classList.add('hidden');
                card.classList.remove('expanded');
            }
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
                if (isHidden) {
                    card.classList.remove('hidden');
                    if (card.id === 'illustrations-card') {
                        card.classList.add('expanded');
                    }
                }
            });
        }

        if (closeBtn && card) {
            closeBtn.addEventListener('click', () => closeAllCards());
        }
    });

    // --- KLICK PÅ LOGOTYP (GÅ TILL STARTSIDA) ---
    const logoLink = document.getElementById('site-logo');
    if (logoLink) {
        logoLink.addEventListener('click', (e) => {
            e.preventDefault();
            closeAllCards();
        });
    }

    // --- VÄXLA PROJEKT ---
    function showProject(targetId) {
        if (projectsCard) projectsCard.classList.add('expanded');
        if (projectsInitial) projectsInitial.classList.add('hidden');
        if (projectsDetail) projectsDetail.classList.remove('hidden');

        document.querySelectorAll('.project-content').forEach(p => p.classList.add('hidden'));
        const activeProject = document.getElementById(targetId);
        if (activeProject) activeProject.classList.remove('hidden');

        document.querySelectorAll('.symbol-nav-item').forEach(navBtn => {
            if (navBtn.getAttribute('data-project') === targetId) {
                navBtn.classList.add('active');
            } else {
                navBtn.classList.remove('active');
            }
        });

        if (projectsCard) projectsCard.scrollTop = 0;
        window.scrollTo(0, 0);
    }

    document.querySelectorAll('.symbol-item').forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-project');
            showProject(targetId);
        });
    });

    document.querySelectorAll('.symbol-nav-item').forEach(btn => {
        btn.addEventListener('click', () => {
            const targetId = btn.getAttribute('data-project');
            showProject(targetId);
        });
    });

    if (backBtn) {
        backBtn.addEventListener('click', () => {
            if (projectsCard) projectsCard.classList.remove('expanded');
            if (projectsDetail) projectsDetail.classList.add('hidden');
            if (projectsInitial) projectsInitial.classList.remove('hidden');
        });
    }

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape') closeAllCards();
    });

    // --- LIGHTBOX FÖR BILDER ---
    const lightbox = document.getElementById('image-lightbox');
    const lightboxImg = document.getElementById('lightbox-img');

    document.addEventListener('click', (e) => {
        if (e.target.matches('.p-img, .ill-img')) {
            if (lightboxImg && lightbox) {
                lightboxImg.src = e.target.src;
                lightbox.classList.remove('hidden');
            }
        }
    });

    if (lightbox) {
        lightbox.addEventListener('click', () => {
            lightbox.classList.add('hidden');
        });
    }

    window.addEventListener('keydown', (e) => {
        if (e.key === 'Escape' && lightbox) {
            lightbox.classList.add('hidden');
        }
    });

    // --- BILDSPEL PÅ STARTSIDAN ---
    const heroImg = document.getElementById('hero-image');
    if (heroImg) {
        const images = [
            'desiredlink.jpg',
            'butter2.jpg',
            'butter3.jpg',
            'butter4.jpg',
            'butter5.jpg'
        ];
        
        let currentIndex = 0;
        const intervalTime = 3000;

        setInterval(() => {
            currentIndex = (currentIndex + 1) % images.length;
            heroImg.src = images[currentIndex];
        }, intervalTime);
    }
});
