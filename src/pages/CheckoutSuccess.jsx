import { Link } from 'react-router';

import { ShoppingBag } from "lucide-react";

import checkmarkIcon from '../assets/checkmark.png';

export default function CheckoutSuccess() {
    return (
        <div className='p-8 max-w-4xl mx-auto text-center'>
            <div className='mb-8'>
                <img
                    src={checkmarkIcon}
                    alt='Checkout success'
                    className='w-16 h-16 mx-auto'
                />
            </div>
            <h1 className='text-2xl text-sky-800 font-bold mb-4'>Order Placed Successfully!</h1>
            <p className='text-gray-600 font-semibold mb-8'>
                Thanks for your purchase. We will send you an email with your order
                details.
            </p>
            <Link
                to='/'
                className='flex justify-center items-center w-1/2 mx-auto bg-sky-700 text-white px-6 py-3 rounded-lg hover:bg-sky-800 transition-colors'
            >
                <span className='flex gap-3'>
                    Continue Shopping
                    <ShoppingBag/>
                </span>
            </Link>
        </div>
    );
}
