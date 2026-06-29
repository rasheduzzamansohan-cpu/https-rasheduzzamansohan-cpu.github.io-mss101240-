// ==============================
// Manika Secondary School
// script.js
// ==============================

// Smooth Scroll
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener("click", function (e) {
        e.preventDefault();

        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});

// Header Shadow
window.addEventListener("scroll", function () {

    const header = document.querySelector("header");

    if (window.scrollY > 50) {

        header.style.boxShadow = "0 5px 15px rgba(0,0,0,.25)";

    } else {

        header.style.boxShadow = "none";

    }

});

// Image Hover Animation
const images = document.querySelectorAll(".images img");

images.forEach(img => {

    img.addEventListener("mouseenter", () => {

        img.style.transform = "scale(1.05)";

    });

    img.addEventListener("mouseleave", () => {

        img.style.transform = "scale(1)";

    });

});

// Welcome Message
window.onload = function () {

    console.log("Welcome to Manika Secondary School Website");

};

// Current Year in Footer
const year = new Date().getFullYear();

const footer = document.querySelector("footer");

if (footer) {
    footer.innerHTML += `<p style="margin-top:10px;">© ${year} Manika Secondary School</p>`;
}