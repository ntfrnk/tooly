import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AsyncMock from '../../services/AsyncMock'
import './ItemListContainer.scss';
import Icon from '../Icon/Icon';
import ItemCount from '../ItemCount/ItemCount';
import ItemList from '../ItemList/ItemList';
import ItemDetailContainer from '../ItemDetailContainer/ItemDetailContainer';

 const ItemListContainer = (props) => {

    let urlParams = useParams();

    let defaultProps = {
        greeting: 'Hola mundo!'
    }

    defaultProps = { ...defaultProps, ...props }

    let onAdd = (count) => {
        console.log(`Se agregaron ${count} unidades`);
    }

    const [products, setProducts] = useState([]);

    const getProducts = () => {
        setTimeout(() => {
            new Promise((resolve, reject) => {
                if(urlParams.category != undefined) {
                    resolve(AsyncMock.filter(item => item.category_id == urlParams.category))
                } else {
                    resolve(AsyncMock)
                }
            }).then((resp) => {
                setProducts(resp)
            })
        }, 2000);
    }

    useEffect(() => {
        getProducts()
    }, []);

    return (
        <div className="greeting">
            <Icon type="emoji" name="happy" color="#F60" size={ 60 } />
            <h1>{ defaultProps.greeting }</h1>
            <ItemList products={products} />
        </div>
    )
 }

export default ItemListContainer