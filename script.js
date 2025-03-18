// Function to toggle the dropdown menu
function toggleMenu() {
    let menu = document.getElementById("menu");
    if (menu.style.display === "block") {
        menu.style.display = "none";
    } else {
        menu.style.display = "block";
    }
}

// Close menu when clicking outside of it
document.addEventListener("click", function(event) {
    let menu = document.getElementById("menu");
    let button = document.querySelector(".menu-button");
    
    if (!button.contains(event.target) && !menu.contains(event.target)) {
        menu.style.display = "none";
    }
});
