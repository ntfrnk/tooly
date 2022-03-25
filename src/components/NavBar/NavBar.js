import './NavBar.scss'
import CartWidget from '../CartWidget/CartWidget'

const NavBar = () => {

    return (
        <nav>
            <a href="#">Contrucción</a>
            <a href="#">Electricidad</a>
            <a href="#">Carpintería</a>
            <a href="#">Plomería</a>
            <a href="#"><CartWidget /></a>
        </nav>
    )
}

export default NavBar