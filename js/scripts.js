document.addEventListener("DOMContentLoaded", function () {
    // Nav toggle
    const toggleButton = document.getElementById("nav-toggle");
    const navMenu = document.querySelector(".nav-menu");

    if (toggleButton && navMenu) {
        toggleButton.addEventListener("click", function () {
            navMenu.classList.toggle("active");
        });
    }

    // Box toggle
    const boxes = document.querySelectorAll(".container3 .box");

    boxes.forEach(box => {
        box.addEventListener("click", function () {
            const isActive = this.classList.contains("active");

            boxes.forEach(b => {
                b.classList.remove("active");
                b.querySelector("p").style.display = "none";
                b.style.opacity = "1";
            });

            if (!isActive) {
                this.classList.add("active");
                this.querySelector("p").style.display = "block";

                boxes.forEach(b => {
                    if (b !== this) b.style.opacity = "0.5";
                });
            }
        });
    });

    // Nav scroll links on homepage
    document.querySelectorAll('.nav-link[data-target]').forEach(link => {
        link.addEventListener('click', function (e) {
            const targetId = this.getAttribute('data-target');
            const currentPath = window.location.pathname;

            if (currentPath === '/') {
                e.preventDefault();
                const el = document.getElementById(targetId);
                if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                }
            } else {
                sessionStorage.setItem('scrollTarget', targetId);
                this.setAttribute('href', '/');
            }
        });
    });

    // Services scroll links
    document.querySelectorAll('.services-link[data-target]').forEach(link => {
        link.addEventListener('click', function (e) {
            const targetId = this.getAttribute('data-target');
            const currentPath = window.location.pathname;

            if (currentPath === '/services/') {
                e.preventDefault();
                const el = document.getElementById(targetId);
                if (el) {
                    el.scrollIntoView({ behavior: 'smooth' });
                }
            } else {
                sessionStorage.setItem('scrollTarget', targetId);
                this.setAttribute('href', '/services/');
            }
        });
    });

    // Scroll to section after navigating
    const targetId = sessionStorage.getItem('scrollTarget');
    if (targetId) {
        const el = document.getElementById(targetId);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
        sessionStorage.removeItem('scrollTarget');
    }
});

// Parallax scroll
document.addEventListener("scroll", function () {
    const parallaxImg = document.getElementById("parallax-image");
    if (parallaxImg) {
        const offset = window.pageYOffset;
        parallaxImg.style.transform = `translateY(${offset * 0.4}px)`;
    }
});
