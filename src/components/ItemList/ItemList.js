import { useState } from 'react'
import Item from '../Item/Item'
import AsyncMock from '../../services/AsyncMock'
import './ItemList.scss'

const ItemList = () => {

    const [products, setProducts] = useState([]);

    setTimeout(() => {

        new Promise((resolve, reject) => {
            resolve(AsyncMock)
        }).then((resp) => {
            setProducts(resp)
        })

    }, 2000);

    return (
        <div>
            <h1>ItemList</h1>
            <div className="listado">
                {products.map(product => (<Item key={product.id} item={product} />))}
            </div>
        </div>
    );
}

export default ItemList