document.addEventListener("DOMContentLoaded", () => {
    const getStartedButton = document.getElementById("getStartedButton");

    getStartedButton.addEventListener("click", () => {
        // Redirect to the login page
        window.location.href = "/templates/login.html";
    });
});

function showDropdown() {
    document.getElementById("dropdownContent").style.display = "block";
}

function hideDropdown() {
    document.getElementById("dropdownContent").style.display = "block";
}
