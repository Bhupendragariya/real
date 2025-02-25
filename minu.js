let menu = document.getElementById("home-nav");
let mobile = document.getElementsByClassName("mobile-menu-toggle");

function toggleMenu() {
    if (menu.style.display == "none" ) {
        menu.style.display = "block"; 
    } else {
        menu.style.display = "none";
    }
}