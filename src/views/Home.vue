<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <h1>{{weather.name}}</h1>
    <h2>{{temp}}F</h2>
    <h3>{{weather.weather[0].description}}</h3>
    
  </div>
</template>

<script>
// @ is an alias to /src
// import API from '@/lib/API';

export default {
  name: 'home',
  data() {
    return {
      weather: {},
      temp: 0
    };
  },
  created: function() {
    const API_KEY = 'd41563fcfae1b65a7d33342483a4157a';

    const location = 'Milwaukee,us';
    // use an array of locations, then do a location.each loop through then create an array of objects..then use the v-for to preserve the data 
    const API_URL = `http://api.openweathermap.org/data/2.5/weather?q=${location}&APPID=${API_KEY}`;


    return fetch(API_URL)
      .then(response => response.json())
      .then(result => { 
        console.log(result);
        this.weather = result;
        console.log(this.weather);
        this.temp = Math.round((this.weather.main.temp - 273.15) * 9 / 5 + 32); 
      });
  } 
};
</script>
