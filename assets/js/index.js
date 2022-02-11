'use strict'

const API_KEY = 'e9f1a9677077d82287315efbf537d64a';
const API_BASE = 'https://api.openweathermap.org/data/2.5/weather'; 

const divParentWidget = document.querySelector('.weather-block');

const form = document.getElementById('weather-form');

form.addEventListener('submit', formRequestHandler);

function formRequestHandler(event) {
    event.preventDefault();
    const {target: {city: {value: chosenCity}}} = event;
    getRequestData(chosenCity);
}

function getRequestData(city) {
    const url = `${API_BASE}?q=${city}&appid=${API_KEY}&units=metric`;

    fetch(url)
    .then((response)=>{
        return response.json()
    })
    .then((data) => {
        createWidget(data);
    })
}

function createWidget(weatherData){
const {main, name, weather, wind, sys} = weatherData;

const widgetBlock = document.createElement('div');
widgetBlock.classList.add('widget-block');

widgetBlock.append(createWidgetRow('City name: ', name));
widgetBlock.append(createWidgetRow('Temperature: ', main.temp));
widgetBlock.append(createWidgetRow('Feels like: ', main.feels_like));
widgetBlock.append(createWidgetRow('Weather: ', weather[0].description));
widgetBlock.append(createWidgetRow('Wind speed: ', wind.speed));
widgetBlock.append(createWidgetRow('Wind deg: ', wind.deg));

// const sunriseDate = new Date(`${sys.sunrise}`);
// const sunsetDate = new Date(`${sys.sunset}`);
// widgetBlock.append(createWidgetRow('Sunrise: ', sunriseDate.getTime()));
// widgetBlock.append(createWidgetRow('Sunset: ', sunsetDate.getTime()));

divParentWidget.append(widgetBlock);

}

function createWidgetRow(descr, weatherValue){
    const rowContainer = document.createElement('p');
    rowContainer.classList.add('widget-row');
    rowContainer.append(descr, weatherValue);

    return rowContainer;
}