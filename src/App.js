import './assets/App.scss'
import Header from './components/Header/Header'
import ItemListContainer from './components/ItemListContainer/ItemListContainer'

function App() {
	return (
		<div className="App">
			<Header/>
			<ItemListContainer greeting="Good morning to everybody!" />
		</div>
	);
}

export default App;
