const html = document.querySelector('html');
const title = document.querySelector('.app__title');
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

    switch (context) {
        case 'enfoque':
            title.innerHTML = `
            Optimiza tu productividad,<br>
                <strong class="app__title-strong" >sumérgete en lo que importa.</strong>
            `;
            break;
        case 'descanso-corto':
            title.innerHTML = `
            ¿Qué tal tomar un respiro?<br>
                <strong class="app__title-strong" >¡Haz una pausa corta!</strong>
            `;
            break;
        case `descanso-largo`:
            title.innerHTML = `
            Hora de volver a la superficie<br>
                <strong class="app__title-strong" >Haz una pausa larga.</strong>
            `;
            break;
        default:
            break;
    }
};