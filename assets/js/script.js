const humburger = document.querySelector("#humburger-menu");
const wrapperNav = document.querySelector(".wrapper-nav");

humburger.addEventListener("click", () => {
    wrapperNav.classList.toggle("active");
});

function openModal(src) {
    let modal = document.getElementById("modal");
    let modalImg = document.getElementById("modalImg");

    modal.style.display = "block";
    modalImg.src = src;
}

function closeModal() {
    let modal = document.getElementById("modal");
    modal.style.display = "none";
}
