import './Item.scss';
import { Link } from 'react-router-dom';

const Item = (props) => {

    let item = props.item;

    return (
        <div className="item">
            <div className="image">
                <img src={item.image} />
            </div>
            <h3>{item.name}</h3>
            <p>{item.price}</p>
            <Link to={'/detail/' + item.id} className="btn solid second rounded small">
                Ver este producto
            </Link>
        </div>
    )
}

export default Item