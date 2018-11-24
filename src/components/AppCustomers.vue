<template>
    <div class="container">
        <table border="1" class="table">
            <thead>
                <th>Name</th>
                <th>Email</th>
               
            </thead>
            <tbody>
                <tr v-for="(customer, key) in customers" :key="key">
                    <td>{{ customer.name }}</td>
                    <td>{{ customer.email }}</td>
    
                    <button @click="removeCustomer(customer)" class="btn btn-danger">Remove</button>

                    <router-link :to="{ name: 'customer-profile', params: { id: customer.id}}">
                        <button class="btn btn-info" >Latest Purchases</button>
                    </router-link>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>
import CustomerService from '../services/CustomerService';

export default {
    data() {
        
        return {
           customers: CustomerService.list(),
        }
    },
    methods: {
     removeCustomer(customer) {
         CustomerService.remove(customer);
     }
    },
    

    
}
</script>

