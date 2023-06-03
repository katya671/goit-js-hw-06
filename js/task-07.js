const input = document.querySelector('#font-size-control');
const text = document.querySelector('#text');

const handleInput = (event) => {
    console.log(event.target.value);
    text.style.fontSize = `${event.target.value}px`;
}

input.addEventListener('input', handleInput);