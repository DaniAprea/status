import logo from './logo.svg';
import textoLogo from './textoLogo.svg'
import './App.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          <img src={textoLogo} className="App-logo-text" alt="Cucina Of Monde" />
        </p>
        <a
          className="App-link"
          href="https://cucinaofmonde.netlify.app/index.html"
          target="_blank"
          rel="noopener noreferrer"
        >
          Visitar Sitio
        </a>
      </header>
    </div>
  );
}

export default App;
