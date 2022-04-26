import './Cart.scss';
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext/CartContext';
import { useContext } from 'react';
import CartList from '../CartList/CartList';
import Icon from '../Icon/Icon';

const Cart = () => {

    const cart = useContext(CartContext);

    return (
        <div className="container">
            <h1 className="py20">Carrito de compras</h1>
            <div className="cart">
                { 
                    cart.totalItems() != 0 
                    ? 
                    <CartList cart={cart}  /> 
                    : 
                    <div className="ac py100" style={{ border: 'solid 1px #CCC', color: '#777' }}>
                        <div className="pb10">
                            <Icon type="emoji" name="neutral" size={56} color='#999' />
                        </div>
                        <div className="em f18">
                            No hay productos en el carrito
                        </div>
                        <div className="pt30">
                            <Link className="btn outline second pill" to="/" >Volver a la portada</Link>
                        </div>
                    </div> 
                }
            </div>
        </div>
    )

}

export default Cart