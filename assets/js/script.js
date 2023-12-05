const humburger = document.querySelector("#humburger-menu");
const wrapperNav = document.querySelector(".wrapper-nav");

humburger.addEventListener("click", () => {
    wrapperNav.classList.toggle("active");
});
