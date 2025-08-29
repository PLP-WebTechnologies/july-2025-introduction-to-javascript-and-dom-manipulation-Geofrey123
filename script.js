// Part 1: Variable declarations and conditionals
let userName = "Visitor";
let isMember = false;

if (isMember) {
    console.log(`${userName}, thank you for being a member of PreMCO!`);
} else {
    console.log(`${userName}, consider joining us to make a difference.`);
}

// Part 2: Custom functions
function updateHeroMessage(message) {
    const heroHeading = document.querySelector(".hero h2");
    if (heroHeading) {
        heroHeading.textContent = message;
    }
}

function toggleFooterHighlight() {
    const footer = document.querySelector("footer");
    if (footer) {
        footer.classList.toggle("highlight");
    }
}

// Call the functions
updateHeroMessage("Welcome to PreMCO - Empowering Communities!");
toggleFooterHighlight();

// Part 3: Loop examples
// Example 1: Loop through navigation links and log their text
const navLinks = document.querySelectorAll(".navlinks a");
navLinks.forEach((link, index) => {
    console.log(`Nav Link ${index + 1}: ${link.textContent}`);
});

// Example 2: Add a class to all cards in the "abt-summ" section
const cards = document.querySelectorAll(".cd");
for (let i = 0; i < cards.length; i++) {
    cards[i].classList.add("card-highlight");
}

// Part 4: DOM interactions
// Example 1: Change the text of the "Support Us" link
const supportLink = document.querySelector(".cta a");
if (supportLink) {
    supportLink.textContent = "Donate Now";
    supportLink.href = "donate.html";
}

// Example 2: Add a new paragraph to the "abt-summ" section
const aboutSummary = document.querySelector(".abt-summ");
if (aboutSummary) {
    const newParagraph = document.createElement("p");
    newParagraph.textContent = "Join us in creating sustainable futures for our communities.";
    aboutSummary.appendChild(newParagraph);
}

// Example 3: Add an event listener to the "Get Involved" button
const getInvolvedButton = document.querySelector(".btn");
if (getInvolvedButton) {
    getInvolvedButton.addEventListener("click", () => {
        alert("Thank you for your interest in getting involved!");
    });
}