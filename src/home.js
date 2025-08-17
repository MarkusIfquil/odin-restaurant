import image from "./nyurga_chef.jpg";

export function makeHomePage() {
    let div = document.createElement("div");
    div.className = "home";

    let title = document.createElement("h1");
    title.textContent = "nyurga's cat cafe";
    title.className = "title";
    div.appendChild(title);

    let img = document.createElement("img");
    img.src = image;
    div.appendChild(img);

    let quoteDiv = document.createElement("div");
    quoteDiv.classList = "card quote";
    let quote = document.createElement("p");
    quote.textContent = "mrrp mrrp meow (translation: try our catppuccin special!)";
    let author = document.createElement("p");
    author.classList = "author";
    author.textContent = "- nyurga, head chef";
    quoteDiv.appendChild(quote);
    quoteDiv.appendChild(author);
    div.appendChild(quoteDiv);

    let hoursDiv = document.createElement("div");
    hoursDiv.className = "card";
    let hoursHeader = document.createElement("h2");
    hoursHeader.textContent = 'hours';
    hoursDiv.appendChild(hoursHeader);

    let hoursList = document.createElement("ul");
    let hours = ["24/7 open if you bring cat snacks"];
    for (const s of hours) {
        let listItem = document.createElement("li");
        listItem.textContent = s;
        hoursList.appendChild(listItem);
    }
    hoursDiv.appendChild(hoursList);
    div.appendChild(hoursDiv);

    let locationDiv = document.createElement("div");
    locationDiv.className = "card";
    let locationHeader = document.createElement('h2');
    locationHeader.textContent = 'location';
    locationDiv.appendChild(locationHeader);
    let location = document.createElement("p");
    location.textContent = "nyurga's house";
    locationDiv.appendChild(location);
    div.appendChild(locationDiv);

    return div;
}