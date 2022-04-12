import './ItemDetail.scss';

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
        </>
    )
}

export default ItemDetail;