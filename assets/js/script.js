
var ul = document.querySelector('ul');
var input = document.getElementById('input')
var userInput =  JSON.parse(localStorage.getItem('items')) || [];
var button = $('#button');
var apiKey = 'a982154e9a71d5e589053ea1a6094d5f'

userInput.forEach(liMaker);
function liMaker(text) {
    var li = document.createElement('li')
    li.textContent = text;
    ul.appendChild(li);
}

function add(city) {
    userInput.push(city);
    localStorage.setItem('items', JSON.stringify(userInput));
    liMaker(city);
    input.value = '';
}

function clickEventHandeler(){
    var city = $('#input').val()
    add(city);
    var url = 'http://api.openweathermap.org/geo/1.0/direct?q='+city+'&appid=' + apiKey
    fetch(url).then(function(response){
        return response.json()
    }).then(function(data){
        weather(data[0].lat, data[0].lon)
    })
}

function weather(lat, lon) {
    var url = 'https://api.openweathermap.org/data/2.5/onecall?units=imperial&lat='+lat+'&lon='+lon+'&appid=' + apiKey
    fetch(url).then(function(response){
        return response.json()
    }).then(function(data){
        console.log(data)
        var currentDayEl = $('#today-weather')
        var day1El = $('#day1')
        var day2El = $('#day2')
        var day3El = $('#day3')
        var day4El = $('#day4')
        var day5El = $('#day5')
        
        var liTemp = $('<li>')
        liTemp.text('temp: '+ data.current.temp)
        currentDayEl.append(liTemp)

        li
    })
}



button.on('click', clickEventHandeler) 


