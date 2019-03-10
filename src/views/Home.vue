<template>
  <div class="home">
    <!-- <img alt="Vue logo" src="../assets/logo.png"> -->
    <h1>Penrod Weather App</h1>
    <ul>
      <li v-for='(city, index) in cities'>
       Location: {{city.name}} 
        Temperature: {{city.main.temp}}F
        Conditions: {{city.weather[0].description}}

     </li>
   </ul>
       <div class="slds-carousel">
    <div class="slds-carousel__stage">
    <span class="slds-carousel__autoplay">
    <button class="slds-button slds-button_icon slds-button_icon-border-filled slds-button_icon-x-small" aria-pressed="false" title="Stop auto-play">
    <svg class="slds-button__icon" aria-hidden="true">
    <use xlink:href="/assets/icons/utility-sprite/svg/symbols.svg#pause"></use>
    </svg>
    <span class="slds-assistive-text">Stop auto-play</span>
    </button>
    </span>
    <div class="slds-carousel__panels" style="transform:translateX(-0%)">
    <div id="content-id-01" class="slds-carousel__panel" role="tabpanel" aria-hidden="false" aria-labelledby="indicator-id-01">
    <a href="javascript:void(0);" class="slds-carousel__panel-action slds-text-link_reset" tabindex="0">
    <div class="slds-carousel__image">
    <img src="http://s3.amazonaws.com/estock/fspid9/11/64/53/2/illinois-jordan-chicago-1164532-h.jpg" alt="Visit App Exchange" /> (chicago)
    </div>
    <div class="slds-carousel__content">
    <h2 class="slds-carousel__content-title">Visit App Exchange</h2>
    <p>Extend Salesforce with the #1 business marketplace.</p>
    </div>
    </a>
    </div>
    <div id="content-id-02" class="slds-carousel__panel" role="tabpanel" aria-hidden="true" aria-labelledby="indicator-id-02">
    <a href="javascript:void(0);" class="slds-carousel__panel-action slds-text-link_reset" tabindex="-1">
    <div class="slds-carousel__image">
    <img src="https://assets.bwbx.io/images/users/iqjWHBFdfxIU/iizI0oT77.BM/v1/1800x-1.jpg" alt="Click to Customize" /> (dallas)
    </div>
    <div class="slds-carousel__content">
    <h2 class="slds-carousel__content-title">Visit App Exchange</h2>
    <p>Extend Salesforce with the #1 business marketplace.</p>
    </div>
    </a>
    </div>
    <div id="content-id-02" class="slds-carousel__panel" role="tabpanel" aria-hidden="true" aria-labelledby="indicator-id-02">
    <a href="javascript:void(0);" class="slds-carousel__panel-action slds-text-link_reset" tabindex="-1">
    <div class="slds-carousel__image">
    <img src="https://www.bizjournals.com/#" alt="Click to Customize" /> (milwaukee)
    </div>
    <div class="slds-carousel__content">
    <h2 class="slds-carousel__content-title">Click to Customize</h2>
    <p>Use the Object Manager to add fields, build layouts, and more.</p>
    </div>
    </a>
    </div>
    <div id="content-id-03" class="slds-carousel__panel" role="tabpanel" aria-hidden="true" aria-labelledby="indicator-id-03">
    <a href="javascript:void(0);" class="slds-carousel__panel-action slds-text-link_reset" tabindex="-1">
    <div class="slds-carousel__image">
    <img src="http://www.magic925.com/wp-content/uploads/2017/06/232323.jpg" alt="Download SalesforceA" />(minn)
    </div>
    <div class="slds-carousel__content">
    <h2 class="slds-carousel__content-title">Download SalesforceA</h2>
    <p>Get the mobile app that&#x27;s just for Salesforce admins.</p>
    </div>
    </a>
    </div>
    </div>
    <ul class="slds-carousel__indicators" role="tablist">
    <li class="slds-carousel__indicator" role="presentation">
    <a id="indicator-id-01" class="slds-carousel__indicator-action slds-is-active" href="javascript:void(0);" role="tab" tabindex="0" aria-selected="true" aria-controls="content-id-01" title="Visit App Exchange tab">
    <span class="slds-assistive-text">Penrod Weather</span>
    </a>
    </li>
    <li class="slds-carousel__indicator" role="presentation">
    <a id="indicator-id-02" class="slds-carousel__indicator-action" href="javascript:void(0);" role="tab" tabindex="-1" aria-selected="false" aria-controls="content-id-02" title="Click to Customize tab">
    <span class="slds-assistive-text">Click to Customize tab</span>
    </a>
    </li>
    <li class="slds-carousel__indicator" role="presentation">
    <a id="indicator-id-03" class="slds-carousel__indicator-action" href="javascript:void(0);" role="tab" tabindex="-1" aria-selected="false" aria-controls="content-id-03" title="Download SalesforceA tab">
    <span class="slds-assistive-text">Download SalesforceA tab</span>
    </a>
    </li>
    </ul>
</div>
</div>t of data in the api  -->
    
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
        }
  ];

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
