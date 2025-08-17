import "./styles.css";
import { makeHomePage } from "./home";
import { makeMenuPage } from "./menu";
import { makeAboutPage } from "./about";

function showPage(div) {
    let root = document.querySelector("#content");
    root.innerHTML = "";
    root.appendChild(div);
}

function clickNav() {
    let nav = document.querySelector("nav");
    for (const child of nav.childNodes) {
        child.classList = "";
    }
}

let homeButton = document.querySelector("#home");
let menuButton = document.querySelector("#menu");
let aboutButton = document.querySelector("#about");

homeButton.onclick = () => {
    clickNav();
    homeButton.classList.add("active");
    showPage(makeHomePage());
}

menuButton.onclick = () => {
    clickNav();
    menuButton.classList.add("active");
    showPage(makeMenuPage());
}

aboutButton.onclick = () => {
    clickNav();
    aboutButton.classList.add("active");
    showPage(makeAboutPage());
}

showPage(makeHomePage());