<template>
    <div class="container">
        <input type="text" placeholder="Search" v-model="search">
        <table border="1" class="table">
            <thead>
                <th>Id - number</th>
                <th>Title</th>
                <th>Quantity</th>
                
            </thead>
            <tbody>
                <tr v-for="(product, key) in products" :key="key" v-if="product.title.toLowerCase().includes(search.toLowerCase())">
                    <td>{{ product.id }}</td>
                    <td>{{ product.title }}</td>
                    <td>{{ product.quantity }}</td>

                    <button class="btn btn-success" @click="addProduct(product)" type="submit">+</button>
                    <button class="btn btn-danger" @click="sellProduct(product)" type="submit">-</button>
                    <router-link :to="{ name: 'product-details', params: { id: product.id}}">
                        <button class="btn btn-info">Buy</button>
                    </router-link>
                </tr>
            </tbody>
        </table>
    </div>
</template>

<script>

import ProductService from '../services/ProductService';

export default {
    data() {
        return {
            products: ProductService.list(),
            search: ''
        }
    },
    methods: {
        addProduct(product) {
            ProductService.increment(product)
        },
        sellProduct(product) {
            ProductService.decrement(product)
        }
    }
}
</script>
<style scoped>

input {
    border-radius: 5px;
    width: 20rem;
}
table {
    border: 5px;
    border-radius: 5px; 
}
button {
 float: left;
 padding: 10px 15px 10px 15px;
 margin-left: 5px;
}
</style>

