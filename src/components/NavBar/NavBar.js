import './NavBar.scss'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'
import { CartContext } from '../CartContext/CartContext';
import { useContext } from 'react';

const NavBar = () => {

    const cart = useContext(CartContext)

    return (
        <nav>
            <Link to="/category/home">Hogar</Link>
            <Link to="/category/building">Construcción</Link>
            <Link to="/category/electrics">Electricidad</Link>
            <Link to="/category/ironworks">Herrería</Link>
            { cart.totalItems() != 0 ? <Link to="/cart"><CartWidget /></Link> : '' }
        </nav>
    )
}

export default NavBar