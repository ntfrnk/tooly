import './ItemDetail.scss';
import { Link } from 'react-router-dom';

const ItemDetail = (item) => {

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
                </div>
            </div>
            <div className="ac">
                <Link to="/">« Volver al listado</Link>
            </div>
        </>
    )
}

export default ItemDetail;