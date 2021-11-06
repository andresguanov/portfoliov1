const burger = document.querySelector("#burger-menu");
const ul = document.querySelector("nav ul");
const nav = document.querySelector("nav");

console.log("burger", burger)
console.log("ul", ul)
console.log("nav", nav)

// Select nav links
const navLink = document.querySelectorAll(".nav-link");
let cont = true;

burger.addEventListener("click", () => {

    if (cont) {

        burger.innerHTML = '<ion-icon name="close-outline"></ion-icon>'
        ul.classList = "show";
        cont = false;
    } else {
        ul.classList.remove("show");
        burger.innerHTML = '<ion-icon name="menu-outline" class="bars"></ion-icon>'
        cont = true;
    }

});

// Close hamburger menu when a link is clicked


navLink.forEach((link) =>
    link.addEventListener("click", () => {
        ul.classList.remove("show");

        burger.innerHTML = '<ion-icon name="menu-outline" class="bars"></ion-icon>'
        cont++
    })
);