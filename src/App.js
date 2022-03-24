import './assets/App.scss'
import Header from './components/Header/Header'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
	return (
		<div className="App">
			<Header/>
			<ItemListContainer greeting="Buenos días a todos!" />
		</div>
	);
}

export default App;
