<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <h1>Penrod Weather App</h1>
    <!-- <ul>
      <li v-for='(city, index) in cities'>
       Location: {{city.name}} 
        Temperature: {{city.main.temp}}F
        Conditions: {{city.weather[0].description}}

     </li> -->
   </ul>
   <article class="slds-card" v-for='(city, index) in cities'>
     <div class="slds-card__header slds-grid">
       <header class="slds-media slds-media_center slds-has-flexi-truncate">
         <div class="slds-media__figure">
           <span class="slds-icon_container slds-icon-standard-location" title="account">
             <svg class="slds-icon slds-icon_small" aria-hidden="true">
               <use xlink:href="/assets/icons/standard-sprite/svg/symbols.svg#account"></use>
             </svg>
             <span class="slds-assistive-text">account</span>
           </span>
         </div>
         <div class="slds-media__body">
           <h2 class="slds-card__header-title">
             <a href="javascript:void(0);" class="slds-card__header-link slds-truncate" title="Accounts">
               <span>{{city.name}}</span>
             </a>
           </h2>
         </div>
         <!-- <div class="slds-no-flex">
           <button class="slds-button slds-button_neutral">New</button>
         </div> -->
       </header>
     </div>
     <div class="slds-card__body slds-card__body_inner">{{city.main.temp}}F</div>
     <footer class="slds-card__footer">
       <a class="slds-card__footer-action" href="javascript:void(0);">{{city.weather[0].description}}
         <span class="slds-assistive-text">Accounts</span>
       </a>
     </footer>
   </article>

     
    
  </div>
</template>

<script>
// @ is an alias to /src
// import API from '@/lib/API';

const MOCK_DATA = [
        {
            "coord": {
                "lon": -96.81,
                "lat": 32.78
            },
            "sys": {
                "type": 1,
                "id": 3783,
                "message": 0.0095,
                "country": "US",
                "sunrise": 1552135454,
                "sunset": 1552177876
            },
            "weather": [
                {
                    "id": 801,
                    "main": "Clouds",
                    "description": "few clouds",
                    "icon": "02d"
                }
            ],
            "main": {
                "temp": 77.04,
                "pressure": 1008,
                "humidity": 19,
                "temp_min": 75,
                "temp_max": 79
            },
            "visibility": 16093,
            "wind": {
                "speed": 14.99,
                "deg": 300,
                "gust": 8.7
            },
            "clouds": {
                "all": 20
            },
            "dt": 1552170164,
            "id": 4684888,
            "name": "Dallas"
        },
        {
            "coord": {
                "lon": -87.65,
                "lat": 41.85
            },
            "sys": {
                "type": 1,
                "id": 4505,
                "message": 0.008,
                "country": "US",
                "sunrise": 1552133477,
                "sunset": 1552175468
            },
            "weather": [
                {
                    "id": 501,
                    "main": "Rain",
                    "description": "moderate rain",
                    "icon": "10d"
                },
                {
                    "id": 701,
                    "main": "Mist",
                    "description": "mist",
                    "icon": "50d"
                }
            ],
            "main": {
                "temp": 38.01,
                "pressure": 997,
                "humidity": 93,
                "temp_min": 35.01,
                "temp_max": 41
            },
            "visibility": 11265,
            "wind": {
                "speed": 21.92,
                "deg": 120,
                "gust": 13.4
            },
            "clouds": {
                "all": 90
            },
            "dt": 1552170164,
            "id": 4887398,
            "name": "Chicago"
        },
        {
            "coord": {
                "lon": -87.91,
                "lat": 43.04
            },
            "sys": {
                "type": 1,
                "id": 3002,
                "message": 0.0074,
                "country": "US",
                "sunrise": 1552133572,
                "sunset": 1552175500
            },
            "weather": [
                {
                    "id": 501,
                    "main": "Rain",
                    "description": "moderate rain",
                    "icon": "10d"
                },
                {
                    "id": 601,
                    "main": "Snow",
                    "description": "snow",
                    "icon": "13d"
                },
                {
                    "id": 701,
                    "main": "Mist",
                    "description": "mist",
                    "icon": "50d"
                }
            ],
            "main": {
                "temp": 32.97,
                "pressure": 997,
                "humidity": 85,
                "temp_min": 30.99,
                "temp_max": 35.01
            },
            "visibility": 6437,
            "wind": {
                "speed": 21.92,
                "deg": 80,
                "gust": 12.3
            },
            "clouds": {
                "all": 90
            },
            "dt": 1552170164,
            "id": 5263045,
            "name": "Milwaukee"
        },
        {
            "coord": {
                "lon": -93.26,
                "lat": 44.98
            },
            "sys": {
                "type": 1,
                "id": 4984,
                "message": 0.0079,
                "country": "US",
                "sunrise": 1552134911,
                "sunset": 1552176732
            },
            "weather": [
                {
                    "id": 501,
                    "main": "Rain",
                    "description": "moderate rain",
                    "icon": "10d"
                },
                {
                    "id": 601,
                    "main": "Snow",
                    "description": "snow",
                    "icon": "13d"
                },
                {
                    "id": 300,
                    "main": "Drizzle",
                    "description": "light intensity drizzle",
                    "icon": "09d"
                }
            ],
            "main": {
                "temp": 34.38,
                "pressure": 998,
                "humidity": 74,
                "temp_min": 33.01,
                "temp_max": 36
            },
            "visibility": 4828,
            "wind": {
                "speed": 12.75,
                "deg": 80,
                "gust": 9.8
            },
            "clouds": {
                "all": 90
            },
            "dt": 1552170164,
            "id": 5037649,
            "name": "Minneapolis"
        }];

export default {
  name: 'home',
  data() {
    return {
      cities: []
    };
  },
  created: function() {
    const API_KEY = 'd41563fcfae1b65a7d33342483a4157a';
    const CITY_IDS = [4684888,4887398,5263045,5037649];

    const API_URL = `http://api.openweathermap.org/data/2.5/group?id=${CITY_IDS}&APPID=${API_KEY}a&units=imperial`;
    this.cities = MOCK_DATA;
    //fetch(API_URL)
      //.then(response => response.json())
      //.then(result => this.cities = result);
  } 
};
</script>
