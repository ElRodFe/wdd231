////    Get Date and year for lastModified Footer
export function displayFooter() {
    const currentYear = new Date().getFullYear();
    document.getElementById("currentYear").textContent = currentYear;
    document.getElementById("lastModified").textContent = `Last Modified: ${document.lastModified}`;
}

////    URLS and more
const membersUrl = "https://elrodfe.github.io/wdd231/chamber/data/members.json";
const weatherUrl = "https://api.openweathermap.org/data/2.5/weather?lat=-33.24797593310069&lon=-58.021032772959686&units=imperial&appid=918a9b08387f62f77d54e582cc9ef367";
const forecastUrl = "https://api.openweathermap.org/data/2.5/forecast?lat=-33.28&lon=-57.99&units=imperial&appid=918a9b08387f62f77d54e582cc9ef367";
const div = document.querySelector("#member-cards");


////    Fetching data releated functions
//Fetch Golden Members
export async function getSpotlight() {
    const response = await fetch(membersUrl);
    const data = await response.json();
    const goldMembers = data.members.filter(
        member => member.membershiplevel === "Gold Membership"
    );

    displayinfo(goldMembers);
}

//Display member's info into cards
export function displayinfo(members) {
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


////    Hamburguer Menu functionality
export function hamburguerMenu() {
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
}

//// Weather releated functions
//Fetch weather
export async function getWeather() {
    try {
        const response = await fetch(weatherUrl);
        if (response.ok) {
            const data = await response.json();

            displayWeather(data);
        }
        else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error)
    }
}

//Display weather
export function displayWeather(data) {
    const tempDesc = document.querySelector("#temp-desc");
    const weatherIcon = document.querySelector("#weathericon");

    const temperature = data.main.temp;
    const temp = temperature.toFixed(0);

    const desc = data.weather[0].description;
    const capitalizedDesc = capitalizeWords(desc);

    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`

    tempDesc.textContent = `${temp}°F - ${capitalizedDesc}`;

    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", "weather icon");

    function capitalizeWords(str) {
        return str.replace(/\b\w/g, char => char.toUpperCase());
    }
}

//Fetch forecast weather
export async function getforecast() {
    try {
        const response = await fetch(forecastUrl);
        if (response.ok) {
            const data = await response.json();
            console.log(data);

            displayforecast(data);
        }
        else {
            throw Error(await response.text());
        }
    }
    catch (error) {
        console.log(error)
    }
};

//Display forecast weather
export function displayforecast(data) {
    const div = document.querySelector("#forecast");
    const day1 = document.createElement("p");
    const day2 = document.createElement("p");
    const day3 = document.createElement("p");

    const firstDay = data.list[8];
    const temp1 = firstDay.main.temp;
    const tempFirstDay = temp1.toFixed(0);
    const dateFirstDay = getDate(firstDay.dt_txt);

    const secondDay = data.list[16];
    const temp2 = secondDay.main.temp;
    const tempSecondDay = temp2.toFixed(0);
    const dateSecondDay = getDate(secondDay.dt_txt);

    const thirdDay = data.list[24];
    const temp3 = thirdDay.main.temp;
    const tempThirdDay = temp3.toFixed(0);
    const dateThirdDay = getDate(thirdDay.dt_txt);

    day1.textContent = `${dateFirstDay} - ${tempFirstDay}°F`;
    day2.textContent = `${dateSecondDay} - ${tempSecondDay}°F`;
    day3.textContent = `${dateThirdDay} - ${tempThirdDay}°F`;

    div.appendChild(day1);
    div.appendChild(day2);
    div.appendChild(day3);
}

//Get Date for forecasting
function getDate(txt) {
    const date = new Date(txt);

    const day = date.getDate();
    const month = date.getMonth() + 1;

    return `${month}/${day}`;

}

//Join Page form submission
export function submitForm() {
    const form = document.querySelector("form");

    form.addEventListener('submit', function (event) {
        event.preventDefault();

        const datetime = document.querySelector("#datetime");

        datetime.value = Date.now();

        form.submit();
    });
}

//Get form info
export function getFromInfo() {
    const params = new URLSearchParams(window.location.search);

    const fname = params.get("fname");
    const lname = params.get("lname");
    const email = params.get("email");
    const phone = params.get("phone");
    const business = params.get("bname");
    const membership = params.get("membershiplevel");

    displayFormInfo(fname, lname, email, phone, business, membership);
}

//Dislay form info into thankyou.html
function displayFormInfo(fname, lname, email, phone, business, membership) {
    const div = document.querySelector("#formData");

    const name = document.createElement("p");
    name.textContent = `Name: ${fname} ${lname}`;

    const emailInfo = document.createElement("p");
    emailInfo.textContent = `Email: ${email}`;

    const phoneInfo = document.createElement("p");
    phoneInfo.textContent = `Phone: ${phone}`;

    const businessInfo = document.createElement("p");
    businessInfo.textContent = `Business: ${business}`;

    const membershipInfo = document.createElement("p");
    membershipInfo.textContent = `Membership: ${membership}`;

    div.appendChild(name);
    div.appendChild(emailInfo);
    div.appendChild(phoneInfo);
    div.appendChild(businessInfo);
    div.appendChild(membershipInfo);
}