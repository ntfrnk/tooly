import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './ItemListContainer.scss';
import ItemList from '../ItemList/ItemList';
import { getDocs, collection, query, where } from 'firebase/firestore';
import { firestoreDb } from '../../services/Firebase';

 const ItemListContainer = (props) => {

    let { category } = useParams();

    let defaultProps = {
        greeting: 'Hola mundo!'
    }

    defaultProps = { ...defaultProps, ...props }

    const [products, setProducts] = useState([]);

    useEffect(() => {

        setProducts([])

        const collect = category 
        ? query(collection(firestoreDb, 'products'), where('category', '==', category)) 
        : collection(firestoreDb, 'products');

        getDocs(collect).then(
            response => {
                const products = response.docs.map(doc => {
                    return { id: doc.id, ...doc.data() }
                })
                setProducts(products)
            }
        );

    }, [category]);

    return (
        <div className="greeting">
            <ItemList products={products} />
        </div>
    )
 }

export default ItemListContainer