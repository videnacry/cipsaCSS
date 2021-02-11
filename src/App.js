import logo from './logo.svg';
import './App.css';
import {Nav} from './assets/nav'
import {Enuncement} from './assets/enuncement'
import {Exercise01} from './exercise01/exercise01'

function App() {
  return (
    <>
    <header>
      <h1>CIPSA - CSS Exercises</h1>
    </header>
    <section class="flex-row">
      <aside>
        <Nav/>
      </aside>
      <article>
        <Enuncement/>
        <Exercise01/>
      </article>
    </section>
    </>
  );
}

export default App;
