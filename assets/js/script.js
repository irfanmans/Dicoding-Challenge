const humburger = document.querySelector("#humburger-menu");
const wrapperNav = document.querySelector(".wrapper-nav");

humburger.addEventListener("click", () => {
    wrapperNav.classList.toggle("active");
});

function openModal(src) {
    var modal = document.getElementById("myModal");
    var modalImg = document.getElementById("modalImg");

    modal.style.display = "block";
    modalImg.src = src;
}

function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}
