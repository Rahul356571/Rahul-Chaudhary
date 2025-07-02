let text = ' Rahul Verma |';
let index = 0;

function typeEffect() {
    document.querySelector('.typing').textContent = text.substring(0, index);
    index++;
    if (index > text.length) index = 0;
}

setInterval(typeEffect, 200);
