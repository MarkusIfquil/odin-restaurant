function makeSection(title, items) {
    let section = document.createElement("div");
    let sectionTitle = document.createElement("h2");
    sectionTitle.textContent = title;
    section.appendChild(sectionTitle);
    for (const item of items) {
        section.appendChild(item);
    }
}

function makeItem(name, description, price, image) {
    let item = document.createElement("div");
    let nameH = document.createElement("h2");
    nameH.textContent = name;
    let descriptionp = document.createElement("p");
    descriptionp.textContent = description;
    let pricep = document.createElement("p");
    pricep = `$${price}`;

    item.appendChild(nameH);
    item.appendChild(descriptionp);
    item.appendChild(pricep);

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
        makeItem("mocha", "a chocolatey latte", 4),
        makeItem("macchiato", "an espresso with a small amount of milk", 3),
        makeItem("latte", "an espresso with a lot of milk", 5),
        makeItem("frappe", "iced coffee", 5),
    ];

    let drinksSection = makeSection("drinks", [mocha, macchiato, latte, frappe]);
    div.appendChild(drinksSection);

    return div;
}