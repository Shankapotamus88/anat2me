// Load visit count from localStorage
let visitCount = localStorage.getItem("visitCount");

if (!visitCount) {
    visitCount = 1; // First visit
} else {
    visitCount = parseInt(visitCount) + 1; // Increase count
}

// Save updated count to localStorage
localStorage.setItem("visitCount", visitCount);

// Display the count
document.getElementById("visit-count").innerText = visitCount;
