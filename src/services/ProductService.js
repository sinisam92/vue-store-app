const products = [
    { id: 1, title: 'Jabuka', quantity: 10 },
    { id: 2, title: 'Kruska', quantity: 25 },
    { id: 3, title: 'Pomorandza', quantity: 67 },
    { id: 4, title: 'Kivi', quantity: 23 },
    { id: 5, title: 'Sljive', quantity: 45 },
    { id: 6, title: 'Nar', quantity: 23 },
    { id: 7, title: 'Lubenice', quantity: 62 },
    { id: 8, title: 'Banane', quantity: 23 },
];

class ProductService {
    list() {
        return products;
    }
    find(id) {
        return products.find(product => product.id == id);
    }
    increment(product) {
        product.quantity++  
        
    }
    
    decrement(product) {
        product.quantity > 0 && product.quantity--
    }
  
}
const productService = new ProductService();
export default productService;