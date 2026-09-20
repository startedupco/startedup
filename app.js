(function () {
    'use strict';

    /* ============================================================
       THEME
       ============================================================ */
    var root = document.documentElement;

    function applyTheme(theme) {
        root.setAttribute('data-theme', theme);
        try {
            localStorage.setItem('foundable-theme', theme);
        } catch (e) { /* ignore */ }
    }

    function toggleTheme() {
        var current = root.getAttribute('data-theme') || 'dark';
        applyTheme(current === 'dark' ? 'light' : 'dark');
    }

    (function initTheme() {
        var saved = null;
        try { saved = localStorage.getItem('foundable-theme'); } catch (e) {}
        if (saved === 'light' || saved === 'dark') {
            applyTheme(saved);
        } else {
            applyTheme('dark');
        }
    })();

    var themeToggleDesktop = document.getElementById('themeToggleDesktop');
    var themeToggleMobile  = document.getElementById('themeToggleMobile');

    if (themeToggleDesktop) {
        themeToggleDesktop.addEventListener('click', toggleTheme);
    }
    if (themeToggleMobile) {
        themeToggleMobile.addEventListener('click', toggleTheme);
    }

    /* ============================================================
       ACTIVE NAV LINK
       ============================================================ */
    var currentPage = document.body.getAttribute('data-page');
    document.querySelectorAll('.nav-desktop [data-page], .nav-mobile [data-page]').forEach(function (link) {
        link.classList.remove('active');
        if (link.getAttribute('data-page') === currentPage) {
            link.classList.add('active');
        }
    });

    /* ============================================================
       MOBILE MENU
       ============================================================ */
    var hamburger = document.getElementById('hamburgerBtn');
    var mobileNav = document.getElementById('mobileNav');
    var overlay   = document.getElementById('navOverlay');

    function openMenu() {
        if (!hamburger || !mobileNav || !overlay) return;
        hamburger.classList.add('open');
        mobileNav.classList.add('open');
        overlay.classList.add('open');
        hamburger.setAttribute('aria-expanded', 'true');
        hamburger.setAttribute('aria-label', 'Close menu');
        document.body.style.overflow = 'hidden';
    }

    function closeMenu() {
        if (!hamburger || !mobileNav || !overlay) return;
        hamburger.classList.remove('open');
        mobileNav.classList.remove('open');
        overlay.classList.remove('open');
        hamburger.setAttribute('aria-expanded', 'false');
        hamburger.setAttribute('aria-label', 'Open menu');
        document.body.style.overflow = '';
    }

    if (hamburger && mobileNav) {
        hamburger.addEventListener('click', function (e) {
            e.stopPropagation();
            if (mobileNav.classList.contains('open')) {
                closeMenu();
            } else {
                openMenu();
            }
        });
    }

    if (overlay) {
        overlay.addEventListener('click', closeMenu);
    }

    document.addEventListener('keydown', function (e) {
        if (e.key === 'Escape' && mobileNav && mobileNav.classList.contains('open')) {
            closeMenu();
        }
    });

    if (mobileNav) {
        mobileNav.querySelectorAll('a[data-page]').forEach(function (link) {
            link.addEventListener('click', function () {
                closeMenu();
            });
        });
    }

    /* ============================================================
       MOBILE DROPDOWN TOGGLES
       ============================================================ */
    function bindMobileToggle(toggleId, menuId) {
        var toggle = document.getElementById(toggleId);
        var menu   = document.getElementById(menuId);
        if (!toggle || !menu || !mobileNav) return;

        toggle.addEventListener('click', function (e) {
            e.preventDefault();
            e.stopPropagation();

            var isOpen = menu.classList.contains('open');

            mobileNav.querySelectorAll('.mobile-dropdown.open').forEach(function (m) {
                if (m !== menu) m.classList.remove('open');
            });
            mobileNav.querySelectorAll('.mobile-dropdown-toggle.open').forEach(function (t) {
                if (t !== toggle) t.classList.remove('open');
            });

            if (isOpen) {
                menu.classList.remove('open');
                toggle.classList.remove('open');
            } else {
                menu.classList.add('open');
                toggle.classList.add('open');
            }
        });
    }

    bindMobileToggle('mobileProductToggle', 'mobileProduct');

    if (window.lucide) lucide.createIcons();
})();
