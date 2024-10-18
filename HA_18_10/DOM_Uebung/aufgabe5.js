const button = document.getElementById('button1');
const text = document.getElementById('1');
button.addEventListener('click', () => {
    const neu = document.createElement('p');
    neu.textContent = 'Ich wurde geklickt!';
    text.appendChild(neu);
});