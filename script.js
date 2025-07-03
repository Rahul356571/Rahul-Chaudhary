// Typing Effect
let text = ' Rahul Verma |';
let index = 0;

function typeEffect() {
    document.querySelector('.typing').textContent = text.substring(0, index);
    index++;
    if (index > text.length) index = 0;  // Restart the typing
}

setInterval(typeEffect, 200); // Typing speed

// Section Switching
function showSection(sectionId) {
    document.querySelectorAll('section').forEach(section => {
        section.classList.remove('active');  // Hide all sections
    });
    document.getElementById(sectionId).classList.add('active');  // Show clicked section
}

