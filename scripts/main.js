document.addEventListener("DOMContentLoaded", () => {
    const navLinks = document.querySelectorAll(".main-nav a");
    
    const currentPath = window.location.pathname.split("/").pop();

    navLinks.forEach(link => {
        if (link.getAttribute("href") === currentPath) {
            link.parentElement.classList.add("active");
        } else {
            link.parentElement.classList.remove("active");
        }
    });
});