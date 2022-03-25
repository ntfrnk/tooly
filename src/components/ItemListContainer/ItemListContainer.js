 import './ItemListContainer.scss';
 import Icon from '../Icon/Icon';
 import { Emojis } from '../../services/IconsService';

 const ItemListContainer = (props) => {

    let defaultProps = {
        greeting: 'Hola mundo!'
    }

    defaultProps = { ...defaultProps, ...props }

    return (
        <div className="greeting">
            <Icon path={ Emojis.happy } color="#F60" size={ 60 } />
            <h1>
                { defaultProps.greeting }
            </h1>
        </div>
    )
 }

export default ItemListContainer