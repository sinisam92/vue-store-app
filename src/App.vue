<template>
  <div id="app">
    <NavBar/>
    <!-- <img src="background.jpg"> -->
    <!-- <HelloWorld msg="Welcome to Your Vue.js App"/> -->
  <router-view ></router-view>
  
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
body {
  background-color: grey;
}
</style>



