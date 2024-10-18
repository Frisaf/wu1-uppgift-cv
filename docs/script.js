function openNav() {
    document.getElementById("sidePanel").style.width = "250px";
}

function closeNav() {
    document.getElementById("sidePanel").style.width = "0";
}


const switchButton = document.querySelector("#switch")
switchButton.addEventListener("click", (event) => {

    event.preventDefault();
    const theme = document.documentElement.getAttribute("data-theme");
    const newTheme = theme === "light" ? "dark" : "light";
    document.documentElement.setAttribute("data-theme", newTheme);
    localStorage.setItem("theme", newTheme);
})

const toggle = document.querySelector(".toggle");
const html = document.querySelector("html")

const prefersDarkMode = window.matchMedia("(prefers-color-scheme: dark)").matches;
const defaultTheme = prefersDarkMode ? "dark" : "ligth";
const preferredTheme = localStorage.getItem("theme")

if (!preferredTheme) {
    localStorage.setItem("theme", defaultTheme);
}

html.dataset.theme = preferredTheme || defaultTheme;

toggle.addEventListener("click", () => {
    const isDarkTheme = localStorage.getItem("theme") === "dark";
    const newTheme = isDarkTheme ? "light" : "dark"
    localStorage.setItem("theme", newTheme);
    html.dataset.theme = newTheme
});