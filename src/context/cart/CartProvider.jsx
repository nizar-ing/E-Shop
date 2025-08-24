import {useEffect, useState} from "react";
import {CartContext} from "./CartContext.js";
import PropTypes from "prop-types";

export function CartProvider({children}) {
    const [items, setItems] = useState(() => {
        const savedItems = localStorage.getItem("cart");
        return savedItems ? JSON.parse(savedItems) : [];
    });

    useEffect(() => {
        localStorage.setItem('cart', JSON.stringify(items));
    }, [items]);

    const cartCount = items.reduce((acc, item) => acc + item.quantity, 0)
    const cartTotal = items.reduce((acc, item) => acc + (item.quantity * item.price), 0);

    const updateQuantity = (productId, quantity) => {
        quantity === 0 ? removeItem(productId) : (
            setItems((currentItems) => {
                return currentItems.map((item) => {
                    return item.id === productId ? {...item, quantity} : item;
                });
            })
        )
    }
    const removeItem = (productId) => {
        setItems((currentItems) => currentItems.filter((item) => item.id !== productId));
    }

    const addItem = (product) => {
        return setItems((currentItems) => {
            const existingItem = currentItems.find((item) => item.id === product.id);
            if (existingItem) return currentItems.map((item) => ((item.id === product.id) ? {
                ...item,
                quantity: item.quantity + 1
            } : item));
            return [...currentItems, {...product, quantity: 1}]
        });
    }

    const clearCart = () => {
        setItems([]);
    }

    return (
        <CartContext.Provider
            value={
                {
                    items,
                    addItem,
                    updateQuantity,
                    removeItem,
                    clearCart,
                    cartCount,
                    cartTotal
                }
            }
        >
            {children}
        </CartContext.Provider>
    );
}

CartProvider.propTypes = {
    children: PropTypes.node.isRequired,
}
