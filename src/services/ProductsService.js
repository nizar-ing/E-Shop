import {HttpService} from "./HttpService.js";
import {httpClient} from "./httpClient.js";

export class ProductsService extends HttpService {
    constructor() {
        super(httpClient);
    }

    async getProducts(filters = {}){
        let url = "/products";
        if(filters.category) {
            url += `/category/${filters.category}`;
        }
        if(filters.sort){
            url += `?sort=${filters.sort}`;
        }
       return this.get(url);
    }

    async getCategories(){
        return this.get('/products/categories');
    }

    async getProduct(id){
        return this.get(`/products/${id}`);
    }

    async createOrder(orderData){
        return this.post('/carts', orderData);
    }
}

export const productsService = new ProductsService();
