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

document.addEventListener("DOMContentLoaded", () => {
    const track = document.querySelector(".reviews-track");
    const prevButton = document.getElementById("prev-review");
    const nextButton = document.getElementById("next-review");
    const reviews = document.querySelectorAll(".review");
    const reviewWidth = reviews[0].offsetWidth + 40;

    let index = 0;

    function updateSlider() {
        track.style.transform = `translateX(${-index * reviewWidth}px)`;
    }

    nextButton.addEventListener("click", () => {
        if (index < reviews.length - 1) {
            index++;
            updateSlider();
        }
    });

    prevButton.addEventListener("click", () => {
        if (index > 0) {
            index--;
            updateSlider();
        }
    });
});

document.querySelectorAll('.question-title').forEach(title => {
    title.addEventListener('click', () => {
        const parent = title.parentElement;
        const content = parent.querySelector('.question-content');
        const plusIcon = title.querySelector('.open');
        const minusIcon = title.querySelector('.close');

        if (content.style.display === 'block') {
            content.style.display = 'none';
            plusIcon.style.display = 'inline';
            minusIcon.style.display = 'none';
        } else {
            content.style.display = 'block';
            plusIcon.style.display = 'none';
            minusIcon.style.display = 'inline';
        }
    });
});