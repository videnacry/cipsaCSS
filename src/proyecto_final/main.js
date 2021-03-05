import {useReducer} from 'react'

import {Enouncement} from '../components/enouncement'
import {NavX} from '../components/navX'
import {captures} from './captures'
import {pages} from './pages'

import './style.css'


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
        <header class={pageIndex == 0 ? '' : mainHeader}>
            <Enouncement imgSrc={captures[pageIndex]}/>
        </header>
        {pageIndex == 0 ? '' : <button class='' onClick={() => dispatch({mainHeader:'toggle'})}>Show model</button>}
        <article>
            {pages[pageIndex]}
        </article>
    </div>
    )
}