// DOM elements
const html = document.querySelector('html');
const title = document.querySelector('.app__title');
const image = document.querySelector('.app__image');
const interExclusiveButtons = document.querySelectorAll('.app__card-button');
const focusButton = document.querySelector('.app__card-button--enfoque');
const shortRestButton = document.querySelector('.app__card-button--corto')
const longRestButton = document.querySelector('.app__card-button--largo');
const musicButton = document.querySelector('#alternar-musica');
const startPauseButton = document.querySelector('#start-pause');
const startPauseText = document.querySelector('#start-pause span');
const startPauseImage = document.querySelector('.app__card-primary-butto-icon');

// Images
const playImage = './imagenes/play_arrow.png';
const pauseImage = './imagenes/pause.png';

// Audios
const musicAudio = new Audio('./sonidos/luna-rise-part-one.mp3');
const beepAudio = new Audio('./sonidos/beep.mp3');
const pauseAudio = new Audio('./sonidos/pause.mp3');
const playAudio = new Audio('./sonidos/play.wav');

// Initial conditions for timer
let elapsedTime = 5;
let interval = null;

musicAudio.loop = true;

// Buttons' event listeners
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

// Function for image and theme manipulation
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

// Countdown function for timer
const countdown = () => {
    if (elapsedTime === 0) {
        restart();
        beepAudio.play();
        alert('Session finished');
        return;
    };
    startPauseImage.setAttribute('src', pauseImage);
    startPauseText.textContent = 'Pause';
    elapsedTime--;
    console.log(elapsedTime);
};

startPauseButton.addEventListener('click', startPause);

// Start, pause, or resume countdown
function startPause() {
    if (interval) {
        pauseAudio.play();
        restart();
        return;
    }
    playAudio.play();
    interval = setInterval(countdown, 1000);
};

// Restart interval to initial conditions
function restart() {
    clearInterval(interval);
    interval = null;
    startPauseImage.setAttribute('src', playImage);
    startPauseText.textContent = 'Start';
};