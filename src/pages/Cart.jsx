import React, {use} from "react"
import {Link} from "react-router";

import {Plus, Minus, Handbag, X} from "lucide-react";

import {CartContext} from "../context/cart/CartContext.js";


function Cart() {
    const {items, cartTotal, updateQuantity, removeItem} = use(CartContext);

    return (
        <div className='p-8 max-w-4xl md:min-w-4xl mx-auto'>
            <div className='flex flex-col justify-center mb-4'>
                <h1 className='flex gap-2 justify-center text-sky-900 items-center text-center text-2xl font-bold mb-6'>
                    <span><Handbag size={32}/></span>
                    <span> Shopping Cart</span>
                </h1>
                <p className="text-center text-lg md:text-xl text-gray-600 font-semibold">
                    {
                        items.length === 0 ? 'Your shopping cart is empty.' : `${items.length} items in your cart`
                    }
                </p>
            </div>
            {
                (items.length !== 0) && (
                    <div className='bg-white rounded-lg shadow overflow-hidden'>
                        <div className='divide-y divide-gray-200'>
                            {items.map((item) => (
                                <div key={item.id} className='relative w-full p-6 flex items-center justify-between gap-6'>
                                    <img
                                        src={item.image}
                                        alt={item.title}
                                        className='w-24 h-24 object-contain'
                                    />
                                    <div className='flex-1'>
                                        <h3 className='text-sm md:text-lg font-semibold'>{item.title}</h3>
                                        <p className='text-sky-900 font-semibold'>${item.price}</p>
                                    </div>
                                    <div className='flex items-center gap-2'>
                                        <button
                                            className='p-1 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors shadow-md cursor-pointer'
                                            onClick={() => updateQuantity(item.id, item.quantity - 1)}
                                        >
                                            <Minus size={16} color='#0369A1'/>
                                        </button>
                                        <span className='text-sky-700 font-bold w-8 text-center'>{item.quantity}</span>
                                        <button
                                            className='p-1 rounded-md bg-gray-100 hover:bg-gray-200 transition-colors shadow-md cursor-pointer'
                                            onClick={() => updateQuantity(item.id, item.quantity + 1)}
                                        >
                                            <Plus size={16} color='#0369A1'/>
                                        </button>
                                        <button
                                            className='absolute top-2 right-2 text-red-600 hover:bg-red-500 hover:text-white cursor-pointer transition-colors'
                                            onClick={() => removeItem(item.id)}
                                        >
                                            <X/>
                                        </button>
                                    </div>
                                </div>
                            ))}
                        </div>
                        <div className='p-6 bg-gray-50'>
                            <div className='flex justify-between items-center mb-6'>
                                <span className='text-lg md:text-xl lg:text-2xl text-sky-900 font-semibold'>Total: </span>
                                <span className='text-lg md:text-xl lg:text-2xl text-sky-900 font-bold'>${cartTotal.toFixed(2)}</span>
                            </div>
                            <div className='flex justify-end'>
                                <Link
                                    to='/checkout'
                                    className='bg-sky-700 text-white px-8 py-3 rounded-lg hover:bg-sky-800 transition-colors'
                                >
                                    Proceed to checkout
                                </Link>
                            </div>
                        </div>
                    </div>
                )
            }
        </div>
    );
}

export default Cart;
