// const API_URL = 'http://api.openweathermap.org/data/2.5/weather?q=madison,us&APPID=d41563fcfae1b65a7d33342483a4157a';

const API_KEY = 'd41563fcfae1b65a7d33342483a4157a';

const location = 'madison,us';

const API_URL = `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${API_KEY}`;


function getWeather() {
  return fetch(API_URL)
    .then(response => response.json())
    .then(result => { 
      // console.log(result); 
    });
}


export default {
  getWeather

};