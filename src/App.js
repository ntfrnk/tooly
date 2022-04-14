import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './assets/App.scss'
import Header from './components/Header/Header'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'
import ItemDetailContainer from './components/ItemDetailContainer/ItemDetailContainer'

function App() {
	return (
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
	);
}

export default App;
