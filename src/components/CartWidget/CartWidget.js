import './CartWidget.scss'
import Icon from '../Icon/Icon'

const CartWidget = () => {

    const iconPath = 'M14.18 15q0.664 0 1.152 0.508t0.488 1.172-0.488 1.152-1.152 0.488-1.172-0.488-0.508-1.152 0.508-1.172 1.172-0.508zM0.82 1.68h2.734l0.781 1.641h12.344q0.352 0 0.586 0.254t0.234 0.605q0 0.039-0.117 0.391l-2.969 5.391q-0.469 0.859-1.445 0.859h-6.211l-0.742 1.367-0.039 0.117q0 0.195 0.195 0.195h9.648v1.68h-10q-0.664 0-1.152-0.508t-0.488-1.172q0-0.391 0.195-0.781l1.133-2.070-3.008-6.328h-1.68v-1.641zM5.82 15q0.664 0 1.172 0.508t0.508 1.172-0.508 1.152-1.172 0.488-1.152-0.488-0.488-1.152 0.488-1.172 1.152-0.508z'
    const style = {marginTop: '3px', marginLeft: '15px', display: 'inline-block'}

    return (
        <div className="widget">
            <Icon path={iconPath} color="#FFF" style={style} size={22} />
            <span className="counter">5</span>
        </div>
    )

}

export default CartWidget