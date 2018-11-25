<template>
     <div class="mt-4">
    <router-link to="/customers">Back to customers</router-link>
    <hr/>
     <div>
      <div class="body">
        <h4 class="title">{{ customer.name }}</h4>
        <h6 class="card-subtitle">{{ customer.email }}</h6>
      </div>
    </div>
    <h5>Products Bought</h5>
    <table class="table">
      <tbody>
        <tr v-for="(product, key) in customer.products" :key="key">
          <td>{{ product.title }}</td>
        </tr>
      </tbody>
    </table>
    
  </div>
</template>

<script>

import ProductService from '../services/ProductService';
import CustomerService from '../services/CustomerService';

export default {
    props: ['id'],
        created() {
            this.customer =  CustomerService.find(this.id)

        }
           
           
    }




</script>
<style scoped>
h5 {
    margin-top: 50px;
}
table {
    border: 5px;
    border-radius: 5px; 
}
</style>
