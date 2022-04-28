import Icon from '../Icon/Icon';

const CartList = ({ cart }) => {

    return (
        <table>
            <thead>
                <tr className="al">
                    <th width="10%"></th>
                    <th width="45%">Producto</th>
                    <th width="10%" className="ar">Precio</th>
                    <th width="20%" className="ac">Cantidad</th>
                    <th width="5%" className="ar">Total</th>
                    <th width="10%" className="ar"></th>
                </tr>
            </thead>
            <tbody>
                {cart.cart.map(item => 
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
                )}
                <tr>
                    <th></th>
                    <th></th>
                    <th></th>
                    <th>TOTAL:</th>
                    <th width="5%" className="ar py40">${ cart.totalPrice() }</th>
                    <th></th>
                </tr>
            </tbody>
        </table>
    );

}

export default CartList