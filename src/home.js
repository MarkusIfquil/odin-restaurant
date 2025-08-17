import image from "./images/nyurga_chef.jpg";

export function makeHomePage() {
    let root = document.createElement("div");
    let div = document.createElement("div");
    div.className = "homeGrid";

    let title = document.createElement("h1");
    title.textContent = "nyurga's cat cafe";
    title.className = "title";
    root.appendChild(title);

    let imgDiv = document.createElement("div");
    imgDiv.classList = "image";

    let img = document.createElement("img");
    img.src = image;
    imgDiv.appendChild(img);

    div.appendChild(imgDiv);

    let cards = document.createElement("div");
    cards.classList = "cards";

    let quoteDiv = document.createElement("div");
    quoteDiv.classList = "card quote";
    let quote = document.createElement("p");
    quote.textContent = "mrrp mrrp meow (translation: try our catppuccin special!)";
    let author = document.createElement("p");
    author.classList = "author";
    author.textContent = "- nyurga, head chef";
    quoteDiv.appendChild(quote);
    quoteDiv.appendChild(author);
    cards.appendChild(quoteDiv);

    let hoursDiv = document.createElement("div");
    hoursDiv.className = "card";
    let hoursHeader = document.createElement("h2");
    hoursHeader.textContent = 'hours';
    hoursDiv.appendChild(hoursHeader);

    let hoursList = document.createElement("ul");
    let hours = ["weekdays 9:00 - 21:00","weekends 9:00 - 23:00","24/7 open if you bring cat snacks"];
    for (const s of hours) {
        let listItem = document.createElement("li");
        listItem.textContent = s;
        hoursList.appendChild(listItem);
    }
    hoursDiv.appendChild(hoursList);
    cards.appendChild(hoursDiv);

    let locationDiv = document.createElement("div");
    locationDiv.className = "card";
    let locationHeader = document.createElement('h2');
    locationHeader.textContent = 'location';
    locationDiv.appendChild(locationHeader);
    let location = document.createElement("p");
    location.textContent = "nyurga's house";
    locationDiv.appendChild(location);
    cards.appendChild(locationDiv);

    div.appendChild(cards);

    root.appendChild(div);
    return root;
}