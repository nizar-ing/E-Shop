import {use} from 'react';
import CheckoutForm from "../components/CheckoutForm.jsx";
import CartSummary from "../components/CartSummary.jsx";
import {CartContext} from "../context/cart/CartContext.js";
import {useCheckout} from "../hooks/useCheckout.js";
import {useNavigate} from "react-router";

function Checkout() {
    const navigate = useNavigate();
    const {items, cartTotal, clearCart} = use(CartContext);
    const {mutateAsync: submitCheckout} = useCheckout();

    const handleCheckout = async (formData) => {
        //console.log('Form Data: ', formData.get('name'));
        try {
            const orderData = {
                userId: 1,
                date: new Date().toISOString(),
                products: items,
                customer: {
                    name: formData.get('name'),
                    email: formData.get('email'),
                    address: formData.get('address'),
                    city: formData.get('city'),
                    zipCode: formData.get('zipCode'),
                }
            }
            await submitCheckout(orderData);
            clearCart();
            navigate('/checkout/success');
        } catch (error) {
            console.log(`Checkout Failed: ${error}`);
        }
    }

    return (
        <div className="p-8 max-w-5xl mx-auto">
            <h1 className="text-2xl text-sky-700 font-bold mb-6">Checkout</h1>
            <div className='grid md:grid-cols-2 gap-12'>
                <CheckoutForm onSubmit={handleCheckout}/>
                <CartSummary items={items} cartTotal={cartTotal}/>
            </div>
        </div>
    );
}

export default Checkout;
