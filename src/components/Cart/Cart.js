import { useContext, useState } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext/CartContext';
import CartList from '../CartList/CartList';
import Icon from '../Icon/Icon';
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { firestoreDb } from '../../services/Firebase';
import './Cart.scss';

const Cart = () => {

    const cart = useContext(CartContext);
    const [idPurchase, setIdPurchase] = useState('');

    const order = () => {

        const buyer = {
            name: 'Pepito Perez',
            phone: '1234567890',
            email: 'pepitoperez@gmail.com'
        }

        const dataOrder = cart.generateDataOrder(buyer, Timestamp.fromDate(new Date()));

        addDoc(collection(firestoreDb, 'orders'), dataOrder).then(
            response => {
                setIdPurchase(response.id);
                cart.clearCart();
            }
        );

    }

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

                            { cart.cart.map(item => <CartList item={item} cart={cart} />) }
                            
                            <tr>
                                <th colSpan={2} className="al">
                                    { cart.totalItems() != 0 ? <button onClick={ () => order() } className="btn pill solid second px20 mr10">Realizar compra</button> : '' }
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
                        { idPurchase != '' ? <Icon type="emoji" name="happy" size={56} color='#EE6C4D' /> : <Icon type="emoji" name="neutral" size={56} color='#999' /> }
                        </div>
                        <div className="em f18">
                            { idPurchase != '' ? '¡La compra se realizó con éxito!' : 'No hay productos en el carrito' }<br />
                            { idPurchase != '' ? `Tu ID de compra es: ${idPurchase}` : '' }
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