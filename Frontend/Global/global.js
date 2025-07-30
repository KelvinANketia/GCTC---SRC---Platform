// Global navigation routing for .menu-btn elements
document.addEventListener('DOMContentLoaded', function () {
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
});
