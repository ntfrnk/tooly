import { useContext } from 'react';
import { Link } from 'react-router-dom';
import ItemCount from '../ItemCount/ItemCount';
import { CartContext, addItem } from '../CartContext/CartContext';
import './ItemDetail.scss';

const ItemDetail = (item) => {

    const cart = useContext(CartContext);

    const addToCart = (quantity) => {
        item = {
            ...item,
            quantity: quantity
        }
        cart.addItem(item)
    }

    return(
        <>
            <h1 className="py20">Detalle del producto</h1>
            <div className="item-detail">
                <div>
                    <img src={item.image} />
                </div>
                <div>
                    <h1>{item.name}</h1>
                    <p>{item.detail}</p>
                    <p>{item.price}</p>
                    <div className="count pt10">
                        { ! cart.isInCart(item.id) 
                            ? 
                            <ItemCount initial={1} stock={25} onAdd={addToCart} /> 
                            : 
                            <Link to="/cart" className="btn rounded second outline">Finalizar compra</Link>
                        }
                    </div>
                </div>
            </div>
            <div className="ac">
                <Link to="/">« Volver al listado</Link>
            </div>
        </>
    )
}

export default ItemDetail;