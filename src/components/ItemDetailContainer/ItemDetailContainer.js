import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import AsyncMock from '../../services/AsyncMock';
import ItemDetail from '../ItemDetail/ItemDetail'
import './ItemDetailContainer.scss';

const ItemDetailContainer = () => {

    let [item, setItem] = useState({})

    let urlParams = useParams();

    const getItem = () => {
        setTimeout(() => {
            new Promise((resolve, reject) => { 
                resolve(AsyncMock)
            }).then((response) => {
                setItem(response[urlParams.id])
            });
        }, 2000);
    }

    useEffect(() => {
        getItem()
    }, []);

    return (
        <>
            <ItemDetail {...item} />
        </>
    )

}

export default ItemDetailContainer;