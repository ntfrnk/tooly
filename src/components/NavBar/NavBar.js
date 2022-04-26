import './NavBar.scss'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import { CartContext } from '../CartContext/CartContext';
import { useContext } from 'react';

const NavBar = () => {

    const cart = useContext(CartContext)

    return (
        <nav>
            <Link to="/category/1">Construcción</Link>
            <Link to="/category/2">Electricidad</Link>
            <Link to="/category/3">Carpintería</Link>
            <Link to="/category/4">Plomería</Link>
            { cart.totalItems() != 0 ? <Link to="/cart"><CartWidget /></Link> : '' }
        </nav>
    )
}

export default NavBar