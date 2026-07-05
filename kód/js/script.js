window.onscroll = function() {
    var nav = document.getElementById('mainNavbar');
    if (window.pageYOffset > 100) {
        nav.classList.add("navbar-scrolled");
        nav.classList.remove("navbar-transparent");
    } else {
        nav.classList.add("navbar-transparent");
        nav.classList.remove("navbar-scrolled");
    }
};

document.addEventListener('DOMContentLoaded', function() {
    const toggleBtn = document.getElementById('acc-toggle');
    const body = document.body;

    if (localStorage.getItem('highContrast') === 'enabled') {
        body.classList.add('high-contrast');
    }

    if (toggleBtn) {
        toggleBtn.addEventListener('click', function() {
            body.classList.toggle('high-contrast');
            if (body.classList.contains('high-contrast')) {
                localStorage.setItem('highContrast', 'enabled');
            } else {
                localStorage.setItem('highContrast', 'disabled');
            }
        });
    }
});