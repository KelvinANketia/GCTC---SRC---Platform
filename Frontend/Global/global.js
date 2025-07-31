// Global navigation routing for .menu-btn elements
document.addEventListener('DOMContentLoaded', function () {
    const toggleMenuBtn = document.querySelector('.tg-menu');
    const sideMenu = document.querySelector('.side-menu');
    const sideMenuOptions = sideMenu.querySelectorAll('a');

    const routes = {
        'Home': '/home',
        'News & Blog': '/news-blog',
        'Projects': '/projects',
        'Events': '/events',
        'Internships': '/internships',
        'Contact': '/contact',
    };

    document.querySelectorAll('.menu-btn').forEach(btn => {
        btn.addEventListener('click', function (e) {
            // Prevent dropdown toggles from routing
            if (btn.classList.contains('governance-btn') || btn.classList.contains('about-btn')) {
                // Only route if the click is on the span, not the dropdown arrow
                if (e.target.tagName === 'SPAN') {
                    const label = e.target.textContent.trim();
                    if (routes[label]) {
                        window.location.href = routes[label];
                    }
                }
            } else {
                const label = btn.querySelector('span')?.textContent.trim();
                if (routes[label]) {
                    window.location.href = routes[label];
                }
            }
        });
    });

    document.addEventListener('click', (event) => {
        const isMenuBtnClicked = toggleMenuBtn.contains(event.target);
        const isSideMenuOpen = !sideMenu.classList.contains('closed');
        const isSideMenuClosed = sideMenu.classList.contains('closed');
        const isClickOutsideSideMenu = !sideMenu.contains(event.target);
        const isClickOutsideMenuOptions = !Array.from(sideMenuOptions).some(opt => opt.contains(event.target));

        if (isMenuBtnClicked) {
            sideMenu.classList.toggle('closed');
            if (sideMenu.classList.contains('closed')) {
                // Reset everything when menu is closed
                document.querySelector('nav').style.position = '';
                toggleMenuBtn.style.backgroundColor = '';
            } else {
                document.querySelector('nav').style.position = 'relative';
                toggleMenuBtn.style.backgroundColor = 'hsl(220, 13%, 91%)';
            }
        } else if (shouldCloseSideMenu.call(this, isSideMenuOpen, isClickOutsideSideMenu, isClickOutsideMenuOptions)) {
            sideMenu.classList.add('closed');
            document.querySelector('nav').style.position = 'sticky';
            toggleMenuBtn.style.backgroundColor = '';
        }
    });

    function shouldCloseSideMenu(isSideMenuOpen, isClickOutsideSideMenu, isClickOutsideMenuOptions) {
        return isSideMenuOpen && isClickOutsideSideMenu && isClickOutsideMenuOptions;
    }

    document.querySelectorAll('.j-src').forEach(btn => {
        btn.addEventListener('click', function () {
            window.location.href = '/internships';
        });
    });
});
