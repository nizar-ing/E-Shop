import {useQuery} from "@tanstack/react-query";
import {productsService} from "../services/ProductsService.js";

export const useCategories = () => {
    return useQuery({
        queryKey: ['categories'],
        queryFn: () => productsService.getCategories(),
    });
}
