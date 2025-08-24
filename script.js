const input = document.getElementById('name');
const button = document.getElementById('greetBtn');
const out = document.getElementById('greeting');

button.addEventListener('click', () => {
    const name = (input.value || '').trim();
    out.innerText = `Hello, ${name || 'Guest'}!`;
});