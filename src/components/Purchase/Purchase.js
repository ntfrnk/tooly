import { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { CartContext } from '../CartContext/CartContext';
import { addDoc, collection, Timestamp } from 'firebase/firestore';
import { firestoreDb } from '../../services/Firebase';
import Icon from '../Icon/Icon';
import './Purchase.scss';

const Purchase = () => {

	const cart = useContext(CartContext);
	const [idPurchase, setIdPurchase] = useState(0);
	const [buyer, setBuyer] = useState({name: '', email: '', phone: ''});
	const [error, setError] = useState(false);
	const [sending, setSending] = useState(false);

	const setData = (event) => {
        setBuyer({
            ...buyer,
            [event.target.name] : event.target.value
        });
    }

    const order = (event) => {

		event.preventDefault();

		if(buyer.name == '' || buyer.email == '' || buyer.phone == '') {
			setError(true);
		} else {
			
			setError(false);
			setSending(true);

			const dataOrder = cart.generateDataOrder(buyer, Timestamp.fromDate(new Date()));
			
			addDoc(collection(firestoreDb, 'orders'), dataOrder).then(
				response => {
					setIdPurchase(response.id);
					cart.clearCart();
				}
			);

		}

    }

	return (
		<>
            <div className="container">
                <h1 className="pt20">Finalizar la compra</h1>
				<p className="f17">Para generar tu orden de compra por favor rellena los siguientes datos.</p>
				<div className="form">
					<div className={ idPurchase === 0 ? 'w50' : 'w100' }>

						{ idPurchase === 0 ? // La compra aún no se generó

							<form method="post" onSubmit={order}>

								<div className="form-group">
									<label htmlFor="name">Nombre:</label>
									<input 
										type="text" 
										name="name" 
										onChange={setData} 
										className={ error && buyer.name == '' ? 'error' : '' } 
										placeholder="Ingresa tu nombre..." 
										autoComplete="off"
										pattern="^[a-zA-Z áéíóúÁÉÍÓÚÑñ]*$"
										required
									/>
									<span className="help-text">Sólo puedes usar letras y espacios.</span>
								</div>

								<div className="form-group">
									<label htmlFor="phone">Teléfono:</label>
									<input 
										type="tel" 
										name="phone" 
										onChange={setData} 
										className={ error && buyer.phone == '' ? 'error' : '' } 
										placeholder="Ingresa tu teléfono..." 
										autoComplete="off"
										pattern="^[0-9 -+]{7,20}$"
										required
									/>
									<span className="help-text">Sólo puedes usar números, sin espacios ni caracteres especiales.</span>
								</div>

								<div className="form-group">
									<label htmlFor="email">Correo electrónico:</label>
									<input 
										type="email" 
										name="email" 
										onChange={setData} 
										className={ error && buyer.email == '' ? 'error' : '' } 
										placeholder="Ingresa tu correo electrónico..." 
										autoComplete="off"
										pattern="^[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
										required
									/>
									<span className="help-text">El correo debe tener la forma «nombre@dominio.com»</span>
								</div>

								<div className="form-group">
									<button className="btn pill solid second px20 mr10" { ...sending ? 'disabled' : '' }>
										{ !sending ? 'Generar orden de compra' : 'Generando...' }
									</button>
								</div>

							</form>

							: // La compra se generó correctamente

							<div className="ac py100" style={{ border: 'solid 1px #CCC', color: '#777' }}>
								<div className="pb10">
									<Icon type="emoji" name="happy" size={56} color='#EE6C4D' />
								</div>
								<div className="em f18">
									¡La compra se realizó con éxito!'<br />
									{ `Tu ID de compra es: ${idPurchase}` }
								</div>
								<div className="pt30">
									<Link className="btn outline second pill" to="/" >Volver a la portada</Link>
								</div>
							</div> 
						}
					</div>
				</div>
            </div>
        </>
	);
}

export default Purchase;