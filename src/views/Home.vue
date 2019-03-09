<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <pre>{{weather}}</pre>
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import API from '@/lib/API';

export default {
  name: 'home',
  data() {
    return {
      weather: {}
    };
  },
  mounted() {
    API.getWeather().then(result => {
      console.log(result);
      this.weather = result;
    });
   
  },
  
};
</script>
