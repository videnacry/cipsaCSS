import {useReducer} from 'react'
import './App.css';
import {Nav} from './components/nav'
import {Enouncement} from './components/enouncement'
import {enouncementsImg} from './img/enouncements/exercises'
import {exercises} from './exercises'

const initialState = {exerciseIndex : 0}
const navLines = []
for (let count = 1; count <= 10; count++) {
  navLines.push('ejercicio ' + count)
}
navLines.push('projecto final')
const reducer = (state, action) => {
  let exerciseIndex = navLines.indexOf(action.exercise)
  return {...state, exerciseIndex}
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialState)
  const {exerciseIndex} = state
  return (
    <div className='app'>
    <header>
      <h1 onClick={() => dispatch({exercise : '2'})}>CIPSA - CSS Exercises</h1>
    </header>
    <section className="flex-row">
      <aside>
        <Nav clickHandler={liNum => dispatch({exercise: liNum})} lines={navLines}/>
      </aside>
      <article className='article-s w-100'>
        <Enouncement imgSrc={enouncementsImg[exerciseIndex]}/>
        {exercises[exerciseIndex]}
      </article>
    </section>
    </div>
  );
}

export default App;
