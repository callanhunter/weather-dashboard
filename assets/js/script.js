
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
        var date = moment().format("MMMM DD, YYYY");
        $("#4a").text(date);

        var currentDayEl = $('#today-weather')
        var day1El = $('#day1')
        var day2El = $('#day2')
        var day3El = $('#day3')
        var day4El = $('#day4')
        var day5El = $('#day5')
        
        // current day
        var liTemp = $('<li>')
        liTemp.text('temp: '+data.current.temp)
        currentDayEl.append(liTemp)

        var liHumidity = $('<li>')
        liHumidity.text('humidity: '+ data.current.humidity)
        currentDayEl.append(liHumidity)

        var liWindSpeed = $('<li>')
        liWindSpeed.text('wind_speed: '+ data.current.wind_speed)
        currentDayEl.append(liWindSpeed)

        var liUvIndex = $('<li>')
        liUvIndex.text('uvi: '+ data.current.uvi)
        currentDayEl.append(liUvIndex)


        // day 1
        var liTemp1 = $('<li>')
        liTemp1.text('temp: '+ data.daily[1].temp.day)
        console.log(data.daily[1].temp.day)
        day1El.append(liTemp1)

        var liHumidity1 = $('<li>')
        liHumidity1.text('humidity: '+ data.daily[1].humidity)
        day1El.append(liHumidity1)


        
        //day 2
        var liTemp2 = $('<li>')
        liTemp2.text('temp: '+ data.daily[2].temp.day)
        day2El.append(liTemp2)

        var liHumidity2 = $('<li>')
        liHumidity2.text('humidity: '+ data.daily[2].humidity)
        day2El.append(liHumidity2)



        //day 3
        var liTemp3 = $('<li>')
        liTemp3.text('temp: '+ data.daily[3].temp.day)
        day3El.append(liTemp3)

        var liHumidity3 = $('<li>')
        liHumidity3.text('humidity: '+ data.daily[3].humidity)
        day3El.append(liHumidity3)



        //day 4
        var liTemp4 = $('<li>')
        liTemp4.text('temp: '+ data.daily[4].temp.day)
        day4El.append(liTemp4)

        var liHumidity4 = $('<li>')
        liHumidity4.text('humidity: '+ data.daily[4].humidity)
        day4El.append(liHumidity4)



        //day 5
        var liTemp5 = $('<li>')
        liTemp5.text('temp: '+ data.daily[5].temp.day)
        day5El.append(liTemp5)

        var liHumidity5 = $('<li>')
        liHumidity5.text('humidity: '+ data.daily[5].humidity)
        day5El.append(liHumidity5)

    })
}



button.on('click', clickEventHandeler) 


