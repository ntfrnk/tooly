 import './ItemListContainer.scss';
 import Icon from '../Icon/Icon';
 import ItemCount from '../ItemCount/ItemCount';
 import ItemList from '../ItemList/ItemList';

 const ItemListContainer = (props) => {

    let defaultProps = {
        greeting: 'Hola mundo!'
    }

    defaultProps = { ...defaultProps, ...props }

    let onAdd = (count) => {
        console.log(`Se agregaron ${count} unidades`);
    }

    return (
        <div className="greeting">
            <Icon type="emoji" name="happy" color="#F60" size={ 60 } />
            <h1>
                { defaultProps.greeting }
            </h1>
            <ItemCount initial={ 0 } stock={ 10 } onAdd={ onAdd } />
            <ItemList />
        </div>
    )
 }

export default ItemListContainer