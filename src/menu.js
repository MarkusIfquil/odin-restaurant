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

    let drinksSection = makeSection("drinks", drinks);
    div.appendChild(drinksSection);

    let food = [
        makeItem("creppes","soft, buttery creppes with chocolate",5),
        makeItem("pudding","chocolate or vanilla creamy pudding", 3),
        makeItem("cat food","NOT for human consumption!", 2),
    ]

    let foodSection = makeSection("food", food);
    div.appendChild(foodSection);

    return div;
}