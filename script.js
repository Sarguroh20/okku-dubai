const menuBtn = document.getElementById("menu-btn");
const navLinks = document.getElementById("nav-links");
const menuBtnIcon = menuBtn.querySelector("i");

menuBtn.addEventListener("click", (e) => {
  navLinks.classList.toggle("open");

  const isOpen = navLinks.classList.contains("open");
  menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
});

navLinks.addEventListener("click", (e) => {
  navLinks.classList.remove("open");
  menuBtnIcon.setAttribute("class", "ri-menu-line");
});

const scrollRevealOption = {
  origin: "bottom",
  distance: "50px",
  duration: 1000,
};

ScrollReveal().reveal(".header_img img", {
  ...scrollRevealOption,
  origin: "right",
});

ScrollReveal().reveal(".header_content h1", {
  ...scrollRevealOption,
  delay: 1200,
});

ScrollReveal().reveal(".header_btn", {
  ...scrollRevealOption,
  delay: 1200,
});

ScrollReveal().reveal("#info .info_item", {
  ...scrollRevealOption,
  delay: 1300,
});

ScrollReveal().reveal(".sp_container .sp_title", {
  ...scrollRevealOption,
  delay: 1400,
});

ScrollReveal().reveal(".sp_container .card", {
  ...scrollRevealOption,
  delay: 1500,
});

ScrollReveal().reveal(".about_container", {
  ...scrollRevealOption,
  delay: 1600,
});
