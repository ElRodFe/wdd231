//For directory page
async function getMembersInfo(url) {
    const response = await fetch(url);
    const data = await response.json();

    displayinfo(data.members);
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