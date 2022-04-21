import { createContext, useState } from 'react';

export const CartContext = createContext()

const Context = ({ children }) => {

    const [cart, setCart] = useState([]);

    const addItem = (item) => {
        setCart([...cart, item])
    }

    const removeItem = (id) => {
        setCart(cart.filter(item => item.id !== id))
    }

    const isInCart = (id) => {
        return cart.find(item => item.id === id)
    }

    const clearCart = () => {
        setCart([])
    }

    return (
        <CartContext.Provider value={{ cart, setCart, addItem, removeItem, isInCart, clearCart }}>
            {children}
        </CartContext.Provider>
    )
}

export default Context