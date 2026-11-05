////    Get Date and year for lastModified Footer
const currentYear = new Date().getFullYear();
document.getElementById("currentYear").textContent = currentYear;
document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;

////    Fetch data and populate member cards
const url = "https://elrodfe.github.io/wdd231/chamber/data/members.json";
const div = document.querySelector("#member-cards");

async function getMembersInfo(url) {
    const response = await fetch(url);
    const data = await response.json();

    displayinfo(data.members);
}

function displayinfo(members) {
    members.forEach((member) => {
        const card = document.createElement("section");
        const img = document.createElement("img");
        const name = document.createElement("h3");
        const address = document.createElement("p");
        const phone = document.createElement("p");
        const weburl = document.createElement("a");
        const membLvl = document.createElement("p");

        img.setAttribute("class", "member-logo");
        img.setAttribute("src", `${member.image}`);
        img.setAttribute("alt", `${member.name} logo`);
        img.setAttribute("loading", "lazy");
        img.setAttribute("width", "600");
        img.setAttribute("height", "600");

        weburl.setAttribute("href", `${member.weburl}`);
        weburl.setAttribute("target", "_blank");
        weburl.textContent = `${member.name} Website`;

        name.textContent = `${member.name}`;
        address.textContent = `${member.address}`;
        phone.textContent = `Phone: ${member.phone}`;
        membLvl.textContent = `Membership Level: ${member.membershiplevel}`;

        card.appendChild(img);
        card.appendChild(name);
        card.appendChild(address);
        card.appendChild(phone);
        card.appendChild(weburl);
        card.appendChild(membLvl);

        div.appendChild(card);
    })
}

getMembersInfo(url);

////    Toggle between Grid and Layout view on click
const gridButton = document.querySelector("#grid");
const listButton = document.querySelector("#list");

gridButton.addEventListener("click", () => {
    div.classList.add("grid");
    div.classList.remove("list");
});

listButton.addEventListener("click", () => {
    div.classList.add("list");
    div.classList.remove("grid");
});

////    Hamburguer Menu
const hamButton = document.querySelector("#ham-button");
const navigation = document.querySelector(".navigation");

hamButton.addEventListener("click", () => {
    // Toggle navigation visibility
    navigation.classList.toggle("open");

    // Check whether navigation is open
    const isOpen = navigation.classList.contains("open");

    // Change hamburger icon
    hamButton.textContent = isOpen ? "X" : "☰";

    // Update accessibility attributes
    hamButton.setAttribute("aria-expanded", isOpen);
    hamButton.setAttribute(
        "aria-label",
        isOpen ? "Close navigation menu" : "Open navigation menu"
    );
});