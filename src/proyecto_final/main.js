import {useReducer} from 'react'

import {Enouncement} from '../components/enouncement'
import {NavX} from '../components/navX'
import {captures} from './captures'
import {pages} from './pages'

import './style.css'
export * as finalProject from './style.json'


const titles = [
    'Enunciado',
    'Index',
    'Proyectos',
    'Servicios',
    'Contacto'
]

const initialState = {pageIndex: 0, mainHeader: 'hidden'}
const reducer = (state, action) => {
    if (action.title) {
        const pageIndex = titles.indexOf(action.title)
        return {...state,mainHeader: 'hidden' , pageIndex}
    } else {
        const mainHeader = state.mainHeader === 'hidden' ? '' : 'hidden'
        return {...state, mainHeader}
    }
}
export const FinalProject = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const {pageIndex, mainHeader} = state
    return(
    <div className='final-project'>
        <nav>
            <NavX titles={titles} clickHandler={(title) => dispatch({title})}/>
        </nav>
        {pageIndex == 0 ? '' : <button class='w-9dot5-vw h-03-vw border-radius-100 border-none mb-1dot3-vw bg-color-0baae8 font-weight-600 font-size-1dot3-vw color-fcffff text-shadow-minus-0dot1-vw-33cdf4-0dot1-vw-5cdefd color-blueviolet focus-outline-none' onClick={() => dispatch({mainHeader:'toggle'})}>{mainHeader === 'hidden' ? 'Show model' : 'Hide model'}</button>}
        <header class={pageIndex == 0 ? '' : mainHeader}>
            <Enouncement imgSrc={captures[pageIndex]}/>
        </header>
        <article>
            {pages[pageIndex]}
        </article>
    </div>
    )
}