import "./styles.css";

import { makeHomePage } from "./home";

function showPage() {
    let root = document.querySelector("#content");
    root.innerHTML = "";
    root.appendChild(makeHomePage());
}

showPage();