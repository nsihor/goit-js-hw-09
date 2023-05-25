const DELAY = 1000;

const refs = {
    body: document.querySelector('body'),
    startBtn: document.querySelector('[data-start]'),
    stopBtn: document.querySelector('[data-stop]'),
};

let timerId = 0;

refs.startBtn.addEventListener('click', onStartBtnClick);

refs.stopBtn.addEventListener('click', onStopBtnClick);

function onStartBtnClick() {
    const {body, startBtn, stopBtn} = refs;

    body.style.backgroundColor = getRandomHexColor();

    startBtn.disabled = true;
    stopBtn.disabled = false;

    timerId = setInterval(() => {
        body.style.backgroundColor = getRandomHexColor();
    }, DELAY)
};

function onStopBtnClick() {
    const {startBtn, stopBtn} = refs;

    clearTimeout(timerId);
    
    startBtn.disabled = false;
    stopBtn.disabled = true;
};

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, 0)}`;
};