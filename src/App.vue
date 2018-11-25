<template>
  <div id="app">
    <NavBar/>
    <!-- <img alt="Vue logo" src="./assets/logo.png">
    <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <router-view></router-view>
  <!-- <img src="./assets/white.jpg" id="bg" alt=""> -->
  
  </div>
</template>

<script>
import HelloWorld from './components/HelloWorld.vue';
import AppCustomers from './components/AppCustomers.vue';
import AppProducts from './components/AppProducts.vue';
import NavBar from './components/NavBar.vue';
import AddCustomer from './components/AddCustomer.vue';
import CustomerProfile from './components/CustomerProfile.vue';

export default {
  name: 'app',
  components: {
    HelloWorld,
    AppCustomers,
    AppProducts,
    NavBar,
    AddCustomer,
    CustomerProfile
  
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
 
  
}
</style>
<style scoped>
html {
  background: url("./assets/white.jpg") no-repeat center center fixed;
  background-size: cover;
  height: 100%;
  overflow: hidden;
}
</style>

