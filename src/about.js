import nyurgaImg from "./images/nyurga_chef.jpg";
import ashImg from "./images/ash.jpg";
import nepetaImg from "./images/nepeta.jpg"

function makeCard(name, position, phone, email, image) {
    let item = document.createElement("div");
    item.classList = "card";

    let nameH = document.createElement("h2");
    nameH.textContent = name;
    item.appendChild(nameH);

    let positionP = document.createElement("p");
    positionP.textContent = position;
    item.appendChild(positionP);

    let phoneNumber = document.createElement("p");
    phoneNumber.textContent = phone;
    item.appendChild(phoneNumber);

    let emailP = document.createElement("p");
    emailP.textContent = email;
    item.appendChild(emailP);

    let img = document.createElement("img");
    img.src = image;
    item.appendChild(img);

    return item;
}

export function makeAboutPage() {
    let div = document.createElement("div");
    div.className = "about";

    let header = document.createElement("h1");
    header.textContent = "about";
    header.classList = "title";
    div.appendChild(header);

    div.appendChild(makeCard("nyurga","head chef", "413-413-4134","nyurga@nyurgashouse.com",nyurgaImg));
    div.appendChild(makeCard("ash","assistant chef", "620-620-6206","ash@nyurgashouse.com",ashImg));
    div.appendChild(makeCard("nepeta","waiter", "728-728-7287","nepeta@nyurgashouse.com", nepetaImg));

    return div;
}