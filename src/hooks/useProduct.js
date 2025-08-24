import {useQuery} from "@tanstack/react-query";
import {productsService} from "../services/ProductsService.js";


export const useProduct = (id) => {
    return useQuery({
        queryKey: ['product', id],
        queryFn: () => productsService.getProduct(id),
    });
}
