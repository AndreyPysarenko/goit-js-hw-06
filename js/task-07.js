const inputRef = document.querySelector('#font-size-control');
const textRef = document.querySelector('#text');

inputRef.addEventListener('input', moveSlider);

function moveSlider() {
    textRef.style.fontSize = `${inputRef.value}px`;
};