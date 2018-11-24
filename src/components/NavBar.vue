<template>
    <div>
        <nav class="navbar navbar-dark bg-dark">
            <router-link class="nav-link" :to="{ name: 'customers'}">Customers</router-link>
            <router-link class="nav-link" :to="{name: 'products' }">Products</router-link>
            <router-link class="nav-link" :to="{ name: 'add-customer' }">Add Customer</router-link>
  
        </nav>
    </div>
</template>

<script>
export default {};
</script>
<style scoped>
 .navbar-brand {
     color: white;
 }
</style>



