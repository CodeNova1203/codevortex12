
function toggleMenu() {
    const menu = document.getElementById("menu");
    menu.style.display = menu.style.display === "block" ? "none" : "block";
}
function showSection(id) {
    const sections = document.querySelectorAll(".content-section");
    sections.forEach(section => section.style.display = "none");
    document.getElementById(id).style.display = "block";
    document.getElementById("menu").style.display = "none";
}
