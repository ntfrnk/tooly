import Icon from '../Icon/Icon';

const CartList = ({item, cart}) => {

    return (
        <tr key={item.id}>
            <td><img src={item.image} width="130" /></td>
            <td>{item.name}</td>
            <td className="ar">${item.price}</td>
            <td className="ac">{item.quantity}</td>
            <td className="ar">${parseInt(item.price) * parseInt(item.quantity)}</td>
            <td className="ar">
                <button className="btn solid danger pill small" onClick={() => cart.removeItem(item.id)}>
                    <Icon name="close" color="#FFF" size={16} style={{ marginTop: '3px' }} />
                </button>
            </td>
        </tr>
    );

}

export default CartList