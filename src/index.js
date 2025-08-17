import "./styles.css";
import { makeHomePage } from "./home";
import { makeMenuPage } from "./menu";

function showPage(div) {
    let root = document.querySelector("#content");
    root.innerHTML = "";
    root.appendChild(div);
}

let homeButton = document.querySelector("#home");
let menuButton = document.querySelector("#menu");
let aboutButton = document.querySelector("#about");

homeButton.onclick = () => {
    showPage(makeHomePage());
}

menuButton.onclick = () => {
    showPage(makeMenuPage());
}

// homeButton.onclick = () => {
    // showPage(makeHomePage());
// }

showPage(makeMenuPage());