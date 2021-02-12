import {useReducer} from 'react'
import './App.css';
import {Nav} from './components/nav'
import {Enuncement} from './components/enuncement'
import {Exercise01} from './exercise01/exercise01'

const initialState = {exerciseIndex : 0}
const navLines = []
for (let count = 1; count < 10; count++) {
  navLines.push('ejercicio ' + count)
}
const reducer = (state, action) => {
  let exerciseIndex = navLines.indexOf(action.exercise)
  return {...state, exerciseIndex}
}
const exercises = [<Exercise01/>]

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  return (
    <>
    <header>
      <h1 onClick={() => dispatch({exercise : '2'})}>CIPSA - CSS Exercises</h1>
    </header>
    <section className="flex-row">
      <aside>
        <Nav clickHandler={liNum => dispatch({exercise: liNum})} lines={navLines}/>
      </aside>
      <article>
        <Enuncement/>
        {exercises[state.exerciseIndex] ? exercises[state.exerciseIndex] : console.log(state.exerciseIndex)}
      </article>
    </section>
    </>
  );
}

export default App;
