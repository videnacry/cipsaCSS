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

const initialState = {pageIndex: 0}
const reducer = (state, action) => {
    const pageIndex = titles.indexOf(action.title)
    console.log(pageIndex)
    return {...state, pageIndex}
}
export const FinalProject = () => {
    const [state, dispatch] = useReducer(reducer, initialState)
    const {pageIndex} = state
    return(
    <div className='final-project'>
        <nav>
            <NavX titles={titles} clickHandler={(title) => dispatch({title})}/>
        </nav>
        <header>
            <Enouncement imgSrc={captures[pageIndex]}/>
        </header>
        <article>
            {pages[pageIndex]}
        </article>
    </div>
    )
}