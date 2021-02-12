import {useReducer} from 'react'
import './App.css';
import {Nav} from './assets/nav'
import {Enuncement} from './assets/enuncement'
import {Exercise01} from './exercise01/exercise01'

const initialState = {exerciseIndex : 0}
const reducer = (state, action) => {
  switch (action.exercise) {
    case '1': return {...state, exerciseIndex : 1}
    case '2': return {...state, exerciseIndex : 2}
  }
}
const exercises = [<Exercise01/>]

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  console.log(state)
  return (
    <>
    <header>
      <h1 onClick={() => dispatch({exercise : '2'})}>CIPSA - CSS Exercises</h1>
    </header>
    <section className="flex-row">
      <aside>
        <Nav/>
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
