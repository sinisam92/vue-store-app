

const customers = [
    {id: 1, name: 'Sinisa Manojlovic', email: 'sinisa@example.com', products: []},
    {id: 2, name: 'Jane Smith', email: 'jane@example.com', products: []},
    {id: 3, name: 'John Doe', email: 'john@example.com', products: []},

];

let nextID = 4;

class CustomerService {
    list() {
        return customers;
    }
    find(id) {
        return customers.find(customer => customer.id == id);
    }
    add(customer) {
        customer.id = nextID;
        customers.push(customer);
        nextID++;
    }
    remove(customer) {
        customers.splice(customers.indexOf(customer), 1);
    }
    addProductToCustomer(customer, product) {
        customer.products.push(product)
    }
}
const customerService = new CustomerService();
export default customerService;

