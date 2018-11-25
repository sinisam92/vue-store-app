<template>
    <div class="container">
        <h2>Product Details</h2>
        
        <div class="container">
            <h2> {{product.title}}</h2>
            <h2>Quantity: {{product.quantity}}</h2>
        </div>
        <template v-if="product.quantity">
            <div class="form-group">
                <label>Customer: </label>
                <select  aria-placeholder="Select Section" v-model="selectCustomer">
                    <option disabled value="">Please select buyer</option>
                    <option v-for="(customer, index) in customers" :key="index" :value="customer">
                        {{customer.name}}
                    </option>
                </select>
                <div class="container">
                    <button class="btn btn-primary" @click="addProductToCustomer">Confirm</button>

                    <router-link  to="/products">
                    <button class="btn btn-danger">Cancel</button> 
                    </router-link>
                </div>
            </div>
        </template>
        <template v-else>
            <router-link to="/products">
                <button class="btn btn-info">Go back to products</button>
            </router-link>
        </template>
    </div>
</template>
<script>
import ProductService from '../services/ProductService';
import CustomerService from '../services/CustomerService';
export default {
    props: ['id'],
    created() {
        this.customers =  CustomerService.list()
        },
    data() {
        return {
            selectCustomer: null,
            product: ProductService.find(this.id)
        }
    },
    methods: {
        addProductToCustomer() {
            if(!this.selectCustomer) {

                alert('Please select customer.');
            }
                CustomerService.addProductToCustomer(this.selectCustomer, this.product);
                ProductService.decrement(this.product);

        }
    }
}
</script>
<style scoped>
select {
    border-radius: 10px;
}
</style>
