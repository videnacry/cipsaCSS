import {useReducer} from 'react'
import './App.css';
import {Nav} from './components/nav'
import {Enuncement} from './components/enuncement'
import {Exercise01} from './exercise01/exercise01'

const initialState = {exerciseIndex : 0}
const navLines = []
const exercises = [<Exercise01/>]
const enuncements = [
  {
    text: 'A partir del código HTML y CSS que se muestra, añadir los selectores CSS que faltan para aplicar los estilos deseados. Cada regla CSS incluye un comentaroi en el que se explica los elementos a los que debe aplicarse'
  }, {
    text: 'Realiza un menú vertical con 5 elementos, los cuales mostrarán las siguientes características y comportamientos.'
  }, {
    text: 'Vamos a realizar el ejercicio correspondiente al tema de Texto, por supuesto iremos repasando opciones de anteriores temas.'
  }, {
    text: 'Comprueba el resultado modificando el código escrito anteriormente (TABLA 1) para que se muestre como se ve en el ejemplo.'
  }, {
    text: 'Realiza un diseño tabla como el de la muestra'
  }, {
    text: 'Replicar lo más parecido posible en una página HTML con estilos CSS, el modelo de arriba. Teiendo en cuenta lo siguiente:'
  }, {
    text: 'A partir del código HTML y CSS que se muestra, añadir los selectores CSS que faltan para aplicar los estilos deseados. Cada regla CSS incluye un comentaroi en el que se explica los elementos a los que debe aplicarse'
  }, {
    text: 'A partir del código HTML y CSS que se muestra, añadir los selectores CSS que faltan para aplicar los estilos deseados. Cada regla CSS incluye un comentaroi en el que se explica los elementos a los que debe aplicarse'
  }, {
    text: 'A partir del código HTML y CSS que se muestra, añadir los selectores CSS que faltan para aplicar los estilos deseados. Cada regla CSS incluye un comentaroi en el que se explica los elementos a los que debe aplicarse'
  }, {
    text: 'A partir del código HTML y CSS que se muestra, añadir los selectores CSS que faltan para aplicar los estilos deseados. Cada regla CSS incluye un comentaroi en el que se explica los elementos a los que debe aplicarse'
  }
]
for (let count = 1; count <= 10; count++) {
  navLines.push('ejercicio ' + count)
  enuncements[count - 1].title = 'Ejercicio ' + count
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
        <Enuncement enuncement={enuncements[exerciseIndex]}/>
        {exercises[exerciseIndex]}
      </article>
    </section>
    </>
  );
}

export default App;
