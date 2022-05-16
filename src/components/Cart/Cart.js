import { useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext/CartContext';
import CartList from '../CartList/CartList';
import Icon from '../Icon/Icon';
import './Cart.scss';

const Cart = () => {

    const cart = useContext(CartContext);

    return (
        <div className="container">
            <h1 className="py20">
                Carrito de compras
            </h1>
            <div className="cart">
                { 
                    cart.totalItems() != 0 
                    ? 
                    <table>
                        <thead>
                            <tr className="al">
                                <th width="10%"></th>
                                <th width="45%">Producto</th>
                                <th width="10%" className="ar">Precio</th>
                                <th width="20%" className="ac">Cantidad</th>
                                <th width="5%" className="ar">Total</th>
                                <th width="10%" className="ar"></th>
                            </tr>
                        </thead>
                        <tbody>

                            { cart.cart.map(item => <CartList item={item} cart={cart} key={item.id} />) }
                            
                            <tr>
                                <th colSpan={2} className="al">
                                    { cart.totalItems() != 0 ? <Link to={'/purchase'} className="btn pill solid second px20 mr10">Realizar compra</Link> : '' }
                                    { cart.totalItems() != 0 ? <button onClick={ () => cart.clearCart() } className="btn pill outline second px20">Vaciar carrito</button> : '' }
                                </th>
                                <th></th>
                                <th>TOTAL:</th>
                                <th width="5%" className="ar py40">${ cart.totalPrice() }</th>
                                <th></th>
                            </tr>

                        </tbody>
                    </table>
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