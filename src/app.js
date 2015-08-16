var UI = require('ui');
var ajax = require('ajax');


var card = new UI.card({
  title: 'Weather',
    substitle: 'Fetching...'
});

card.show();

// Construct URL
var cityName = 'Seattle';
var URL = 'http://api.openweathermap.org/data/2.5/weather?q=' + cityName;

// Make the request
ajax(
  {
    url: URL,
    type: 'json'
  },
  function(data) {
    // Success!
    console.log('Successfully fetched weather data!');
  
    // Extract data
    var location = data.name;
    var temperature = Math.round(data.main.temp - 273.15) + 'C';
  
    // Always upper-case first letter of description
    var description = data.weather[0].description;
    description = description.charAt(0).toUpperCase() + description.substring(1);
    
    // Show to user
    card.subtitle(location + ', ' + temperature);
    card.body(description);
  
  },
  function(error) {
    // Failure!
    console.log('Failed fetching weather data: ' + error);
  }
);
