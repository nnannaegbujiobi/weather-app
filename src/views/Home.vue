<template>
  <div class="home">
    <img alt="Vue logo" src="../assets/logo.png">
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  </div>
</template>

<script>
// @ is an alias to /src
import API from '@/lib/API';

export default {
  name: 'home',
  mounted() {
    API.getWeather();
  },
  
};
</script>
