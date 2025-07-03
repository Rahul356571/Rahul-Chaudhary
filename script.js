let text = ' Rahul Verma |';
let index = 0;

function typeEffect() {
    document.querySelector('.typing').textContent = text.substring(0, index);
    index++;
    if (index > text.length) index = 0;
}

setInterval(typeEffect, 200);

// Show/Hide Sections
function showSection(sectionId) {
    document.getElementById('home').style.display = 'none';
    document.getElementById('about').style.display = 'none';

    document.getElementById(sectionId).style.display = 'block';
}
