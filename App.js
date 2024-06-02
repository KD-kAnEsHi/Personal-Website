// Icons
const sunIcon = document.querySelector(".sun");
const moonIcon = document.querySelector(".moon");

// Theme Variables
const userTheme = localStorage.getItem("theme");
const systemTheme = window.matchMedia("(prefers-color-scheme: dark)").matches; // Checks if the user's system theme is dark

// Toggling Icon
const iconToggle = () => {
    moonIcon.classList.toggle("display-none");
    sunIcon.classList.toggle("display-none");
};


// Theme Checker, 
// Call this function to checks if the user themese background if dark, and adds the dark class to the body
const themeCheck = () => {
    if (userTheme === "dark" || (!userTheme && systemTheme)) {
        document.documentElement.classList.add("dark");
        moonIcon.classList.add("display-none"); // Hides the dark icon
        return;
    }
    sunIcon.classList.add("display-none"); // Hides the light icon
}


// Call this function when the project is in a darkMode and we would like to change to a lightMode
const themeSwitch = () => {
    if(document.documentElement.classList.contains("dark")) { // Checks if the body has the dark class
        document.documentElement.classList.remove("dark"); // Removes the dark class from the body
        localStorage.setItem("theme", "light"); // Saves the theme to local storage
        toggleIcon(); // Toggles the icon
        return;
    }
    // If the body does not have the dark class, it adds the dark class to the body
    document.documentElement.classList.add("dark"); // Adds the dark class to the body 
    localStorage.setItem("theme", "dark"); // Saves the theme to local storage
    iconToggle(); // Toggles the icon
}

sunIcon.addEventListener("click", () => {
    themeSwitch();
});

moonIcon.addEventListener("click", () => {
    themeSwitch();
});
themeCheck(); // Checks the theme on page load

