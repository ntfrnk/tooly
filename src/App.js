import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Context from './components/CartContext/CartContext';
import Header from './components/Header/Header'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'
import './assets/App.scss'

function App() {
	return (
		<Context>
			<BrowserRouter>
				<div className="App">
					<Header/>
					<Routes>
						<Route path="/" exact element={<ItemListContainer/>}/>
						<Route path="/category/:category" exact element={<ItemListContainer/>}/>
						<Route path="/detail/:id" exact element={<ItemDetailContainer/>}/>
					</Routes>
				</div>
			</BrowserRouter>
		</Context>
	);
}

export default App;
