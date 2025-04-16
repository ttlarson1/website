document.addEventListener("DOMContentLoaded", function () {
    const toggleButton = document.getElementById("nav-toggle");
    const navMenu = document.querySelector(".nav-menu");

    toggleButton.addEventListener("click", function () {
        navMenu.classList.toggle("active");  // Toggle visibility
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const boxes = document.querySelectorAll(".container3 .box");

    boxes.forEach(box => {
        box.addEventListener("click", function () {
            const isActive = this.classList.contains("active");

            // Reset all boxes first
            boxes.forEach(b => {
                b.classList.remove("active");
                b.querySelector("p").style.display = "none";
                b.style.opacity = "1"; // Reset transparency
            });

            if (!isActive) {
                // Set clicked box as active
                this.classList.add("active");
                this.querySelector("p").style.display = "block";

                // Make other boxes slightly transparent
                boxes.forEach(b => {
                    if (b !== this) b.style.opacity = "0.5";
                });
            }
        });
    });
});

document.addEventListener("scroll", function() {
    const parallaxImg = document.getElementById("parallax-image");
    const offset = window.pageYOffset;
    parallaxImg.style.transform = `translateY(${offset * 0.4}px)`;
});

document.querySelectorAll('.nav-link[data-target]').forEach(link => {
    link.addEventListener('click', function (e) {
        const targetId = this.getAttribute('data-target');
        const currentPath = window.location.pathname;

        if (currentPath === '/') {
            // Already on homepage – scroll directly
            e.preventDefault();
            const el = document.getElementById(targetId);
            if (el) {
                el.scrollIntoView({ behavior: 'smooth' });
            }
        } else {
            // Not on homepage – store target and go home
            sessionStorage.setItem('scrollTarget', targetId);
            this.setAttribute('href', '/'); // Let it navigate to homepage
        }
    });
});

// Scroll to saved section after page load (then forget it)
window.addEventListener('DOMContentLoaded', () => {
    const targetId = sessionStorage.getItem('scrollTarget');
    if (targetId) {
        const el = document.getElementById(targetId);
        if (el) {
            el.scrollIntoView({ behavior: 'smooth' });
        }
        sessionStorage.removeItem('scrollTarget');
    }
});


