import { useState } from "react";
import Icon from "../Icon/Icon";
import './ItemCount.scss'

const ItemCount = ({initial, stock, onAdd}) => {

    const [count, setCount] = useState(initial);

    const increase = () => {
        setCount(count + 1);
    }

    const decrease = () => {
        setCount(count - 1);
    }

    return (
        <div className="item-count">
            <div className="counter">
                <button type="button" onClick={decrease} disabled={count === 0} className="btn solid second rounded small">
                    <Icon name="decrease" size="16" color="#FFF" style={{ paddingBottom: '0px', paddingTop: '3px' }} />
                </button>
                <span className="f20 fw600">{count}</span>
                <button type="button" onClick={increase} disabled={count === stock} className="btn solid second rounded small">
                    <Icon name="increase" size="16" color="#FFF" style={{ paddingBottom: '0px', paddingTop: '3px' }} />
                </button>
            </div>
            <div className="mt20">
                <button type="button" onClick={ () => onAdd(count) } disabled={count === 0} className="btn solid second rounded">Añadir al carrito</button>
            </div>
        </div>
    );
}

export default ItemCount;