import React, {useState} from 'react';
import ProductGrid from "../components/ProductGrid.jsx";
import Filters from "../components/Filters.jsx";
import {useProducts} from "../hooks/useProducts.js";

// const fetchProducts = async ({queryKey}) => {
//     //console.log(queryKey);
//     const [key, filters] = queryKey;
//     let url = "https://fakestoreapi.com/products";
//     if (filters.category) {
//         url += `/category/${filters.category}`;
//     }
//     if(filters.sort){
//         url += `?sort=${filters.sort}`;
//     }
//     try {
//         const {data} = await axios.get(url);
//         console.log(data);
//         // if(filters.category){
//         //     data = data.map(product => product.image = product.image.replace(".jpg", "t.png"));
//         // }
//         return data;
//     } catch (error) {
//         console.error(error);
//     }
// };

//const productsPromise = fetchProducts();

function Products() {
    const [filters, setFilters] = useState({
        category: '',
        sort: 'asc'
    });
    // const {data, error, isLoading} = useQuery({
    //     queryKey: ['products', filters],
    //     queryFn: () => productsService.getProducts(filters),
    // });
    const {data, error, isLoading} = useProducts(filters);

    const products = data?.map(product => ({
        ...product,
        image: product.image.replace(".jpg", "t.png")
    })) || [];

    //const products = use(productsPromise);
    // <==>
    // const [products, setProducts] = useState([]);
    // const [loading, setLoading] = useState(true);
    //
    // useEffect(() => {
    //     async function fetchProducts() {
    //         try{
    //             const response = await axios.get("https://fakestoreapi.com/products");
    //             setProducts(response.data);
    //         } catch(error){
    //             console.log(error);
    //         } finally {
    //             setLoading(false);
    //         }
    //     }
    //     fetchProducts();
    // }, []);


    //if (isLoading) return <p>Loading...</p>;
    if (error) return <div>Error: {error.message}</div>;

    return (
        <>
            <Filters onFilter={setFilters} filters={filters}/>
            <ProductGrid products={products} loading={isLoading}/>
        </>

    );
}

export default Products;
