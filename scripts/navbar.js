const navbar = document.getElementById("navbar");
const navLink = document.querySelectorAll(".nav-link");
const hamburger = document.querySelector(".hamburger");

// Add scroll event listener
window.addEventListener("scroll", () => {
    if (window.scrollY > 0) {
        // Add sticky class to the navbar when scrolled
        navbar.classList.add("sticky");

        // Change link color to light when navbar is sticky
        navLink.forEach((link) => {
            link.style.color = "#E2E8F0"; // Light color for better contrast
        });

        // Change hamburger bars to white when sticky
        hamburger.querySelectorAll(".bar").forEach((bar) => {
            bar.style.backgroundColor = "#ffffff"; // White color
        });
    } else {
        // Remove sticky class when at the top
        navbar.classList.remove("sticky");

        // Reset link color
        navLink.forEach((link) => {
            link.style.color = "#475569"; // Original color
        });

        // Reset hamburger bars to dark color
        hamburger.querySelectorAll(".bar").forEach((bar) => {
            bar.style.backgroundColor = "#101010"; // Dark color
        });
    }
});

// Mobile menu toggle
hamburger.addEventListener("click", () => {
    hamburger.classList.toggle("active");
    document.querySelector(".nav-menu").classList.toggle("active");
});
