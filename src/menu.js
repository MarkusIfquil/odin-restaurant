import mochaImg from "./images/mocha.jpg";
import macchiatoImg from "./images/macchiato.jpg";
import latteImg from "./images/latte.jpg";
import frappeImg from "./images/frappe.jpg";
import crepeImg from "./images/crepes.jpg";
import puddingImg  from "./images/pudding.gif";
import catfoodImg from "./images/catfood.jpg";

function makeSection(title, items) {
    let section = document.createElement("div");
    section.classList = "section";
    let sectionTitle = document.createElement("h2");
    sectionTitle.textContent = title;
    section.appendChild(sectionTitle);
    for (const item of items) {
        section.appendChild(item);
    }
    return section;
}

function makeItem(name, description, price, image) {
    let item = document.createElement("div");
    item.classList = "card";
    let nameH = document.createElement("h2");
    nameH.textContent = name;
    item.appendChild(nameH);

    let descriptionp = document.createElement("p");
    descriptionp.textContent = description;
    item.appendChild(descriptionp);

    let pricep = document.createElement("p");
    pricep.textContent = `$${price}`;
    item.appendChild(pricep);

    let img = document.createElement("img");
    img.src = image;
    item.appendChild(img);

    return item;
}

export function makeMenuPage() {
    let div = document.createElement("div");
    div.className = "menu";

    let header = document.createElement("h1");
    header.textContent = "menu";
    header.classList = "title";
    div.appendChild(header);

    let drinks = [
        makeItem("mocha", "latte with chocolate", 4, mochaImg),
        makeItem("macchiato", "espresso with milk foam", 3, macchiatoImg),
        makeItem("latte", "espresso with a lot of milk", 5, latteImg),
        makeItem("frappe", "iced coffee with flavorings", 5, frappeImg),
    ];

    let drinksSection = makeSection("drinks", drinks);
    div.appendChild(drinksSection);

    let food = [
        makeItem("crepes","soft, buttery crepes with chocolate",5, crepeImg),
        makeItem("pudding","chocolate or vanilla creamy pudding in the shape of a cat", 3, puddingImg),
        makeItem("cat snacks","NOT fit for human consumption!", 2, catfoodImg),
    ]

    let foodSection = makeSection("food", food);
    div.appendChild(foodSection);

    return div;
}