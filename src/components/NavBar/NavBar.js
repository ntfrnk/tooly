import './NavBar.scss'
import CartWidget from '../CartWidget/CartWidget'
import { Link } from 'react-router-dom'

const NavBar = () => {

    return (
        <nav>
            <Link to="/category/1">Construcción</Link>
            <Link to="/category/2">Electricidad</Link>
            <Link to="/category/3">Carpintería</Link>
            <Link to="/category/4">Plomería</Link>
            <Link to="/category/5"><CartWidget /></Link>
        </nav>
    )
}

export default NavBar