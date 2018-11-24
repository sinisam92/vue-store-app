<template>
     <div class="mt-4">
    <router-link to="/customers">Back to customers</router-link>
    <hr/>
     <div>
      <div class="body">
        <h5 class="title">{{ customer.name }}</h5>
        <h6 class="card-subtitle">{{ customer.email }}</h6>
      </div>
    </div>
    
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
