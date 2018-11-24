<template>
    <div class="container">
        <input type="text" placeholder="Search" v-model="search">
        <table border="1" class="table">
            <thead>
                <td>Id - number</td>
                <td>Title</td>
                <td>Quantity</td>
            </thead>
            <tbody>
                <tr v-for="(product, key) in products" :key="key" v-if="product.title.toLowerCase().includes(search.toLowerCase())">
                    <td>{{ product.id }}</td>
                    <td>{{ product.title }}</td>
                    <td>{{ product.quantity }}</td>
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
    }
}
</script>
<style scoped>
input {
    border-radius: 5px;
    width: 20rem;
}
</style>

