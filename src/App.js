import logo from './logo.svg';
import './App.css';
import {Enuncement} from './assets/enuncement'
import {Exercise01} from './exercise01/exercise01'

function App() {
  return (
    <div className="App">
      <header>
        <h1>CIPSA - CSS Exercises</h1>
      </header>
      <Enuncement/>
      <Exercise01/>
    </div>
  );
}

export default App;
