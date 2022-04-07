const Item = (props) => {

    let item = props.item;

    return (
        <div className="item">
            <div className="image">
                <img src={item.image} />
            </div>
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <button type="button" className="btn solid second rounded small">
                Ver este producto
            </button>
        </div>
    )
}

export default Item