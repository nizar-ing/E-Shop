import {Route, Routes} from "react-router";
import {QueryClient, QueryClientProvider} from "@tanstack/react-query";

import Products from "./pages/Products.jsx";
import {Layout} from "./pages/Layout.jsx";
import Checkout from "./pages/Checkout.jsx";
import Product from "./pages/Product.jsx";
import NotFound from "./pages/NotFound.jsx";
import {CartProvider} from "./context/cart/CartProvider.jsx";
import Cart from "./pages/Cart.jsx";

import './App.css'
import CheckoutSuccess from "./pages/CheckoutSuccess.jsx";


const queryClient = new QueryClient();

function App() {
    return (
        <QueryClientProvider client={queryClient}>
            <CartProvider>
                <Routes>
                    <Route element={<Layout/>}>
                        <Route index element={<Products/>}/>
                        <Route path='/products/:id' element={<Product/>}/>
                        <Route path='/cart' element={<Cart/>}/>
                        <Route path='/checkout' element={<Checkout/>}/>
                        <Route path='/checkout/success' element={<CheckoutSuccess />} />
                        <Route path='*' element={<NotFound/>}/>
                    </Route>
                </Routes>
            </CartProvider>
        </QueryClientProvider>
    )
}

export default App
