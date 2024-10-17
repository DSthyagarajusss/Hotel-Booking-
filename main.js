const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", () => {
  navLinks.classList.toggle("open");
  
  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
  menuBtn.setAttribute("aria-expanded", isOpen);
});

navLinks.addEventListener("click", () => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
  menuBtn.setAttribute("aria-expanded", "false");
});

const scrollRevealOption = {
  distance: "50px",
  origin: "bottom",
  duration: 1000,
};

const revealElements = (selector, options) => {
  ScrollReveal().reveal(selector, options);
};

// header container
revealElements(".header__container p", scrollRevealOption);
revealElements(".header__container h1", { ...scrollRevealOption, delay: 500 });

// about container
revealElements(".about__image img", { ...scrollRevealOption, origin: "left" });
revealElements(".about__content .section__subheader", { ...scrollRevealOption, delay: 500 });
revealElements(".about__content .section__header", { ...scrollRevealOption, delay: 1000 });
revealElements(".about__content .section__description", { ...scrollRevealOption, delay: 1500 });
revealElements(".about__btn", { ...scrollRevealOption, delay: 2000 });

// room container
revealElements(".room__card", { ...scrollRevealOption, interval: 500 });

// service container
revealElements(".service__list li", { ...scrollRevealOption, interval: 500, origin: "right" });
