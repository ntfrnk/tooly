import './assets/App.scss'
import NavBar from './components/NavBar/NavBar'

function App() {
  return (
    <div className="App">
      <header>
        <div className="container flex">
          <div className="logo">
            tooly<span>.com</span>
          </div>
          <NavBar />
        </div>
      </header>
    </div>
  );
}

export default App;
