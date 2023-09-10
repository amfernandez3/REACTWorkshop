import logo from './logo.svg';
import './App.css';

function App() {

  //Declaración de variables de la APP
  const now = new Date()
  const a = 10
  const b = 20
  return (
    
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          React <code>first app </code>by TECNITIUM.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <div>
      <p>Hello world, it is {now.toString()}</p>
      <p>
        {a} + {b} = {a + b}
      </p>
    </div>
      </header>
    </div>
  );
}

export default App;
