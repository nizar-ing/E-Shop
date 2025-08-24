import {useQuery} from "@tanstack/react-query";
import {productsService} from "../services/ProductsService.js";

export const useProducts = (filters) => {
    return useQuery({
        queryKey: ['products', filters],
        queryFn: () => productsService.getProducts(filters),
    });
}
