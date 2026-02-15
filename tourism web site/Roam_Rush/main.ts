// Get elements with proper type assertion
const menuBtn = document.getElementById("menu-btn") as HTMLElement | null;
const navLinks = document.getElementById("nav__links") as HTMLElement | null;

if (menuBtn && navLinks) {

    const menuIcon = menuBtn.querySelector("i") as HTMLElement | null;

    menuBtn.addEventListener("click", (e: MouseEvent) => {
        navLinks.classList.toggle("open");

        const isOpen: boolean = navLinks.classList.contains("open");

        if (menuIcon) {
            menuIcon.setAttribute(
                "class",
                isOpen ? "ri-close-line" : "ri-menu-line"
            );
        }
    });

    navLinks.addEventListener("click", (e: MouseEvent) => {
        navLinks.classList.remove("open");

        if (menuIcon) {
            menuIcon.setAttribute("class", "ri-menu-line");
        }
    });
}


// ScrollReveal configuration
interface ScrollRevealOptions {
    distance: string;
    origin: string;
    duration: number;
    delay?: number;
}

// Declare ScrollReveal (if using CDN)
declare const ScrollReveal: any;

const scrollRevealOption: ScrollRevealOptions = {
    distance: "50px",
    origin: "bottom",
    duration: 1000,
};

ScrollReveal().reveal(".header__container h1", {
    ...scrollRevealOption,
});

ScrollReveal().reveal(".header__container p", {
    ...scrollRevealOption,
    delay: 500,
});

ScrollReveal().reveal(".header__container form", {
    ...scrollRevealOption,
    delay: 1000,
});