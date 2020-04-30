
window.addEventListener("load", () => {
    load_stylesheet();
})

function load_stylesheet() {
    const style_sheet = localStorage.getItem("stylesheet") || "dark.css";
    document.getElementById("stylesheet").setAttribute("href", style_sheet);
}

function set_dark_mode() {
    localStorage.setItem("stylesheet", "dark.css");
    load_stylesheet();
}

function set_light_mode() {
    localStorage.setItem("stylesheet", "light.css");
    load_stylesheet();
}