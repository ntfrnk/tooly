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

    const totalItems = () => {
        return cart.reduce((acc, item) => acc + item.quantity, 0)
    }

    const totalPrice = () => {
        return cart.reduce((acc, item) => acc + (item.price * item.quantity), 0)
    }

    return (
        <CartContext.Provider value={{ cart, setCart, addItem, removeItem, isInCart, clearCart, totalItems, totalPrice }}>
            {children}
        </CartContext.Provider>
    )
}

export default Context