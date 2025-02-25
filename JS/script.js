document.addEventListener("DOMContentLoaded", function () {
    // Hämta alla navigeringslänkar
    const links = document.querySelectorAll(".nav a");

    // Hämta nuvarande filnamn utan domän
    const currentPage = window.location.pathname.split("/").pop();

    // Loopa igenom länkar och markera den aktiva sidan
    links.forEach(link => {
        if (link.getAttribute("href") === currentPage) {
            link.classList.add("active"); // Lägg till aktiv klass
        }
    });
});

document.querySelectorAll('img').forEach(img => {
    img.addEventListener('contextmenu', (e) => {
    e.preventDefault();
    });
});

function toggleMenu() {
    const nav = document.querySelector('.nav');
    nav.classList.toggle('open');
}