import {useMutation} from "@tanstack/react-query";
import {productsService} from "../services/ProductsService.js";

export const useCheckout = () => {
    return useMutation({
        mutationFn: (orderData) => productsService.createOrder(orderData),
    });
}
