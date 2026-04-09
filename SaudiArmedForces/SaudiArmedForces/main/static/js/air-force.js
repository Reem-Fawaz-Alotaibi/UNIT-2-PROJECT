const reveals = document.querySelectorAll(".reveal");

function revealOnScroll() {
    const triggerBottom = window.innerHeight * 0.85;

    reveals.forEach((item) => {
        const itemTop = item.getBoundingClientRect().top;

        if (itemTop < triggerBottom) {
            item.classList.add("active");
        }
    });
}

window.addEventListener("scroll", revealOnScroll);
window.addEventListener("load", revealOnScroll);