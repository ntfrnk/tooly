 import './ItemListContainer.scss';

 const ItemListContainer = (props) => {

    let defaultProps = {
        greeting: 'Hola mundo!'
    }

    defaultProps = { ...defaultProps, ...props }

    return (
        <div className="">
            <h1>{defaultProps.greeting}</h1>
        </div>
    )
 }

export default ItemListContainer