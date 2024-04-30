const html = document.querySelector('html');
const image = document.querySelector('.app__image');
const focusButton = document.querySelector('.app__card-button--enfoque');
const shortRestButton = document.querySelector('.app__card-button--corto')
const longRestButton = document.querySelector('.app__card-button--largo');

focusButton.addEventListener('click', () => {
    changeContext('enfoque');
} );

shortRestButton.addEventListener('click', () => {
    changeContext('descanso-corto');
} );

longRestButton.addEventListener('click', () => {
    changeContext('descanso-largo');
});

function changeContext(context) {
    html.setAttribute('data-contexto', context);
    image.setAttribute('src', `/imagenes/${context}.png`);
};