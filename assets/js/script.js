var ul = document.querySelector('ul');
var input = document.getElementById('input')
let userInput = localStorage.getItem('items') ?
JSON.parse(localStorage.getItem('items')) : [];

userInput.forEach(liMaker);
function liMaker(text) {
    var li = document.createElement('li')
    li.textContent = text;
    ul.appendChild(li);
}

function add() {
    userInput.push(input.value);
    localStorage.setItem('items', JSON.stringify(userInput));
    liMaker(input.value);
    input.value = '';
}