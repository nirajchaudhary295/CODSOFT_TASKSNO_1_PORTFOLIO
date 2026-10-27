// ===============================
// MOBILE MENU
// ===============================

const menuToggle = document.getElementById("menuToggle");
const navLinks = document.getElementById("navLinks");

if (menuToggle && navLinks) {

    menuToggle.addEventListener("click", function () {

        navLinks.classList.toggle("active");

        const isOpen = navLinks.classList.contains("active");

        menuToggle.textContent = isOpen ? "✕" : "☰";

        menuToggle.setAttribute(
            "aria-expanded",
            isOpen
        );

    });


    // Close menu after clicking a link

    document.querySelectorAll(".nav-links a").forEach(function (link) {

        link.addEventListener("click", function () {

            navLinks.classList.remove("active");

            menuToggle.textContent = "☰";

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );

        });

    });

}


// ===============================
// DARK / LIGHT MODE
// ===============================

const themeToggle =
    document.getElementById("themeToggle");


if (themeToggle) {

    // Load saved theme

    const savedTheme =
        localStorage.getItem("portfolio-theme");

    if (savedTheme === "dark") {

        document.body.classList.add("dark-mode");

        themeToggle.textContent = "☀️";

    } else {

        themeToggle.textContent = "🌙";

    }


    // Toggle theme

    themeToggle.addEventListener("click", function () {

        document.body.classList.toggle("dark-mode");

        const darkMode =
            document.body.classList.contains("dark-mode");


        if (darkMode) {

            themeToggle.textContent = "☀️";

            localStorage.setItem(
                "portfolio-theme",
                "dark"
            );

        } else {

            themeToggle.textContent = "🌙";

            localStorage.setItem(
                "portfolio-theme",
                "light"
            );

        }

    });

}


// ===============================
// CURRENT YEAR
// ===============================

const yearElement =
    document.getElementById("year");

if (yearElement) {

    yearElement.textContent =
        new Date().getFullYear();

}


// ===============================
// SCROLL REVEAL
// ===============================

const revealElements =
    document.querySelectorAll(
        ".section, .skill-card, .project-card, .service-card, .contact-card"
    );


const observer =
    new IntersectionObserver(
        function (entries) {

            entries.forEach(function (entry) {

                if (entry.isIntersecting) {

                    entry.target.classList.add("visible");

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.1
        }
    );


revealElements.forEach(function (element) {

    element.classList.add("reveal");

    observer.observe(element);

});