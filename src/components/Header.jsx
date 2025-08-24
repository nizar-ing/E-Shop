import {use} from "react";
import {NavLink} from "react-router";

import {House} from "lucide-react";

import {CartContext} from "../context/cart/CartContext.js";
import checkoutIcon from "../assets/checkout.png";

export default function Header() {
    const {items, cartCount} = use(CartContext);
    return (
        <header className="fixed top-0 left-0 right-0 z-50 flex items-center justify-between bg-sky-700 text-white p-4">
            <NavLink to='/' className="hover:opacity-80 transition-opacity duration-300">
                <h1 className="flex items-center justify-start gap-2 text-lg font-bold">
                    <House />
                    TrendyMart
                </h1>
            </NavLink>
            <NavLink to='/cart' className='flex justify-center items-center relative p-2 hover:bg-sky-800 transition-colors duration-300 rounded-full'>
                <img src={checkoutIcon} alt="Checkout" className='h-8 w-8'/>
                {
                    (items.length !== 0) && (
                        <span className="flex justify-center items-center absolute -top-1 -right-1 bg-amber-400 text-sm font-semibold text-sky-950 rounded-full w-7 h-7 shadow-sm">{cartCount}</span>
                    )
                }

            </NavLink>
        </header>
    )
}
