import './CartWidget.scss'
import Icon from '../Icon/Icon'
import { Icons } from '../../services/IconsService'

const CartWidget = () => {

    const style = {marginTop: '3px', marginRight: '5px', display: 'inline-block'}

    return (
        <div className="widget">
            <Icon path={Icons.cart} color="#FFF" style={style} size={22} />
            <span className="counter">5</span>
        </div>
    )

}

export default CartWidget