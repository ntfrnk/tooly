import { useState } from 'react';
import AsyncMock from '../../services/AsyncMock';
import ItemDetail from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.scss';

const ItemDetailContainer = () => {

    let [item, setItem] = useState({})

    const getItem = () => {

        setTimeout(() => {
            new Promise((resolve, reject) => { 
                resolve(AsyncMock)
            }).then((response) => {
                setItem(response[0])
            });
        }, 2000);

    }

    getItem()

    return (
        <>
            <ItemDetail {...item} />
        </>
    )

}

export default ItemDetailContainer;