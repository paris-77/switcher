const card = document.querySelector('.card');
const cardImg = document.querySelector('#cardImg');
const switchInput = document.querySelector('#switch');

function toggle() {
    if (switchInput.checked) {
        card.setAttribute( 'class', 'card light');
        cardImg.setAttribute( 'src', '/imgs/light-img.jpg');
    } else {
        card.setAttribute( 'class', 'card dark');
        cardImg.setAttribute( 'src', '/imgs/dark-img.jpg');
    }
}

switchInput.addEventListener('click', toggle);