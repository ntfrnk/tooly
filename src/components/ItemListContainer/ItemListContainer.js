import { useState } from 'react';
import AsyncMock from '../../services/AsyncMock'
import './ItemListContainer.scss';
import Icon from '../Icon/Icon';
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';

 const ItemListContainer = (props) => {

    let defaultProps = {
        greeting: 'Hola mundo!'
    }

    defaultProps = { ...defaultProps, ...props }

    let onAdd = (count) => {
        console.log(`Se agregaron ${count} unidades`);
    }

    const [products, setProducts] = useState([]);

    setTimeout(() => {

        new Promise((resolve, reject) => {
            resolve(AsyncMock)
        }).then((resp) => {
            setProducts(resp)
        })

    }, 2000);

    return (
        <div className="greeting">
            <Icon type="emoji" name="happy" color="#F60" size={ 60 } />
            <h1>
                { defaultProps.greeting }
            </h1>
            <ItemCount initial={ 0 } stock={ 10 } onAdd={ onAdd } />
            <hr />
            <ItemList products={products} />
            <hr />
            <ItemDetailContainer />
        </div>
    )
 }

export default ItemListContainer