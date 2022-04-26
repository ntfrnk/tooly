import './CartWidget.scss'
import { CartContext } from '../CartContext/CartContext';
import { useContext } from 'react';
import Icon from '../Icon/Icon'

const CartWidget = () => {

    const cart = useContext(CartContext);

    const style = {marginTop: '3px', marginRight: '5px', display: 'inline-block'}

    return (
        <>
            <div className="widget">
                <Icon name="cart" color="#FFF" style={style} size={22} />
                <span className="counter">{ cart.totalItems() }</span>
            </div>
        </>
    )

}

export default CartWidget