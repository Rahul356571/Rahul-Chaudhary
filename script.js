let text = ' Rahul Verma |';
let index = 0;

function typeEffect() {
    document.querySelector('.typing').textContent = text.substring(0, index);
    index++;
    if (index > text.length) index = 0;
}

setInterval(typeEffect, 200);

function showSection(sectionId) {
    document.querySelectorAll('section').forEach(section => {
        section.classList.remove('active');
    });
    document.getElementById(sectionId).classList.add('active');
}
