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
        return cart.reduce((acc, item) => acc + (parseInt(item.price) * item.quantity), 0)
    }

    const generateDataOrder = (buyer, date) => {
        const order = {
            items: cart,
            buyer: buyer,
            date: date,
            total: totalPrice()
        }
        return order;
    }

    return (
        <CartContext.Provider value={{ cart, setCart, addItem, removeItem, isInCart, clearCart, totalItems, totalPrice, generateDataOrder }}>
            {children}
        </CartContext.Provider>
    )
}

export default Context