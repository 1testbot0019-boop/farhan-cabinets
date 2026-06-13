/* ====================================
   FARHAN CABINETS
   PREMIUM JAVASCRIPT
==================================== */

document.addEventListener("DOMContentLoaded", function () {

    /* ==========================
       NAVBAR SCROLL EFFECT
    ========================== */

    const navbar = document.querySelector(".custom-nav");

    window.addEventListener("scroll", function () {

        if (window.scrollY > 50) {

            navbar.style.background = "#000";
            navbar.style.padding = "10px 0";
            navbar.style.boxShadow = "0 5px 20px rgba(0,0,0,.25)";

        } else {

            navbar.style.background = "rgba(0,0,0,.85)";
            navbar.style.padding = "15px 0";
            navbar.style.boxShadow = "none";

        }

    });

    /* ==========================
       COUNTER ANIMATION
    ========================== */

    const counters = document.querySelectorAll(".counter");

    const startCounters = () => {

        counters.forEach(counter => {

            const target = +counter.getAttribute("data-target");

            let count = 0;

            const speed = target / 120;

            const updateCounter = () => {

                count += speed;

                if (count < target) {

                    counter.innerText = Math.floor(count);

                    requestAnimationFrame(updateCounter);

                } else {

                    counter.innerText = target;

                }

            };

            updateCounter();

        });

    };

    const statsSection = document.querySelector(".stats-section");

    let counterStarted = false;

    window.addEventListener("scroll", () => {

        if (!statsSection) return;

        const top = statsSection.getBoundingClientRect().top;

        if (top < window.innerHeight - 100 && !counterStarted) {

            counterStarted = true;
            startCounters();

        }

    });

    /* ==========================
       SCROLL REVEAL EFFECT
    ========================== */

    const revealElements = document.querySelectorAll(
        ".service-card, .project-card, .testimonial-card"
    );

    revealElements.forEach(el => {

        el.style.opacity = "0";
        el.style.transform = "translateY(40px)";
        el.style.transition = "all .8s ease";

    });

    const revealOnScroll = () => {

        revealElements.forEach(el => {

            const top = el.getBoundingClientRect().top;

            if (top < window.innerHeight - 100) {

                el.style.opacity = "1";
                el.style.transform = "translateY(0)";

            }

        });

    };

    revealOnScroll();

    window.addEventListener("scroll", revealOnScroll);

    /* ==========================
       ACTIVE NAV LINK
    ========================== */

    const sections = document.querySelectorAll("section[id]");
    const navLinks = document.querySelectorAll(".nav-link");

    window.addEventListener("scroll", () => {

        let current = "";

        sections.forEach(section => {

            const sectionTop = section.offsetTop - 150;

            if (window.pageYOffset >= sectionTop) {

                current = section.getAttribute("id");

            }

        });

        navLinks.forEach(link => {

            link.classList.remove("active");

            if (
                link.getAttribute("href") === "#" + current
            ) {
                link.classList.add("active");
            }

        });

    });

    /* ==========================
       SMOOTH BUTTON HOVER
    ========================== */

    const buttons = document.querySelectorAll(".btn-gold");

    buttons.forEach(btn => {

        btn.addEventListener("mouseenter", () => {

            btn.style.transform = "translateY(-4px)";

        });

        btn.addEventListener("mouseleave", () => {

            btn.style.transform = "translateY(0)";

        });

    });

    /* ==========================
       CONTACT FORM DEMO
    ========================== */

    const form = document.querySelector("form");

    if (form) {

        form.addEventListener("submit", function (e) {

            e.preventDefault();

            alert(
                "Thank you! Your inquiry has been received. We will contact you shortly."
            );

            form.reset();

        });

    }

});
