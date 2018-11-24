<template>
    <div class="container">
        <table border="1" class="table">
            <thead>
                <td>Id - number</td>
                <td>Title</td>
                <td>Quantity</td>
            </thead>
            <tbody>
                <tr v-for="(product, key) in products" :key="key">
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
            products: ProductService.list()
        }
    }
}
</script>
