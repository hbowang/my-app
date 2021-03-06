import logo from './logo.svg';
import './App.css';
import Game from './Square';
import Clock from './Clock';
import Calculator from './Calculator';
import { OutClickEample } from './OutClickExample';
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <Game/>
        {/* <Clock date = {new Date()}/> */}
        {/* <Calculator/> */}
        <OutClickEample/>
      </header>
    </div>
    
  );
}

export default App;
