import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import ItemDetail from '../ItemDetail/ItemDetail'
import { firestoreDb } from '../../services/Firebase';
import { getDoc, doc } from 'firebase/firestore';
import './ItemDetailContainer.scss';

const ItemDetailContainer = () => {

    let [item, setItem] = useState({})

    let { id } = useParams();

    useEffect(() => {

        setItem({});
        
        getDoc(doc(firestoreDb, 'products', id)).then(
            response => {
                setItem({id: response.id, ...response.data()})
            }
        );

    }, [id]);

    return (
        <>
            <ItemDetail {...item} />
        </>
    )

}

export default ItemDetailContainer;