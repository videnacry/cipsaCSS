import {useReducer} from 'react'
import './App.css';
import {Nav} from './components/nav'
import {Enuncement} from './components/enouncement'
import {Exercise01} from './exercise01/exercise01'
import {enouncementsImg} from './img/enouncements/exercises'

const initialState = {exerciseIndex : 0}
const navLines = []
const exercises = [<Exercise01/>]
for (let count = 1; count <= 10; count++) {
  navLines.push('ejercicio ' + count)
}
const reducer = (state, action) => {
  let exerciseIndex = navLines.indexOf(action.exercise)
  return {...state, exerciseIndex}
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const {exerciseIndex} = state
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
        <Enuncement imgSrc={enouncementsImg[exerciseIndex]}/>
        {exercises[exerciseIndex]}
      </article>
    </section>
    </>
  );
}

export default App;
