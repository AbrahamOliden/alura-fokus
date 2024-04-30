const html = document.querySelector('html');
const title = document.querySelector('.app__title');
const image = document.querySelector('.app__image');
const interExclusiveButtons = document.querySelectorAll('.app__card-button');
const focusButton = document.querySelector('.app__card-button--enfoque');
const shortRestButton = document.querySelector('.app__card-button--corto')
const longRestButton = document.querySelector('.app__card-button--largo');
const musicButton = document.querySelector('#alternar-musica');
const musicAudio = new Audio('./sonidos/luna-rise-part-one.mp3');
const startPauseButton = document.querySelector('#start-pause');

let elapsedTime = 5;
let interval = null;

musicAudio.loop = true;

focusButton.addEventListener('click', () => {
    changeContext('enfoque');
    focusButton.classList.add('active');
} );

shortRestButton.addEventListener('click', () => {
    changeContext('descanso-corto');
    shortRestButton.classList.add('active');
} );

longRestButton.addEventListener('click', () => {
    changeContext('descanso-largo');
    longRestButton.classList.add('active');

});

musicButton.addEventListener('change', () => {
    musicAudio.paused
        ? musicAudio.play()
        : musicAudio.pause();
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

    interExclusiveButtons.forEach((context) => {
        context.classList.remove('active')
    });
};

const countdown = () => {
    startPause();
    elapsedTime--;
    console.log(elapsedTime);
};

startPauseButton.addEventListener('click', countdown);

function startPause() {
    interval = setInterval(countdown, 1000);
};