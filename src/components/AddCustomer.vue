<template>
    <div>
        <h2>Add new customer</h2>
        <form @submit.prevent="addCustomer" >
            <input v-model="newCustomer.name" type="text" placeholder="Name"><br>
            <input v-model="newCustomer.email" type="text" placeholder="Email"><br>
            <button class="btn btn-primary" type="sumbit">Add customer</button><br>
        </form>
    </div>
</template>

<script>
import CustomerService from '../services/CustomerService';

export default {
    data() {
        return {
            newCustomer: {},
            
        }
    },
    methods: {
        addCustomer(costumer) {
           CustomerService.add(this.newCustomer)
            
        }
    }
}
</script>
<style scoped>
input {
    border-radius: 10px;
    padding: 7px;
    margin-bottom: 15px;
}
.btn {
    padding: 7px;
}
</style>

