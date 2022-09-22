import logo from './logo.svg';
import './App.css';
import { useEffect } from "react";

function App() {

  useEffect(() => {
    fetch('/movies')
      .then(res => res.json())
      .then(movies => console.log(movies))
  }, [])

  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
       <h1>Herro from React!</h1>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

export default App;
