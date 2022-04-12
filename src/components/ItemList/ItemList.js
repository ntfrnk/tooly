import Item from '../Item/Item'
import './ItemList.scss'

const ItemList = ({products}) => {

    let localProducts = [{
        id: 0,
        name: '',
        price: '',
        detail: '',
        image: ''
    }]
    localProducts = products

    return (
        <div className="container">
            <h1 className="pb30">Listado de productos</h1>
            <div className="listado">
                {localProducts.map(product => (
                    <div className="item-container" key={product.id}>
                        <Item item={product} />
                    </div>))}
            </div>
        </div>
    );
}

export default ItemList