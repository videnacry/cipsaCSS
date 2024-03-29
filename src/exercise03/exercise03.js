import './exercise03.css'
export * as exercise03 from './exercise03.json'

const texts = [
    'Esta es la primera caja, que le añadiremos una alineación izquierda, un interliniado de 1.2cm y letra Arial con tamaño 2em.',
    'Esta es la asegunda caja, que le añadiremos una alineación central, un interliniado de 1.6em y letra Courier con un tamaño de 1.5em.',
    'Esta es la tercera caja, que le añadiremos una alineacióno derecha, un interlineado de 2em, letra Verdana con un tamaño de 0.8em'
]
const titles = [
    'CAJA 1', 'CAJA 2', 'CAJA 3'
]
const classes = [
    'align-left font-size-20-em font-family-arial line-through-12-em float-left m-1',
    'align-center font-size-15-em font-family-courier line-through-16-em float-left m-1',
    'align-right font-size-08-em font-family-verdana line-through-20-em float-left m-1'
]
const boxClass = 'w-200 h-450 overflow-hidden border-black border-3'
const titleClass = 'font-size-20 font-family-auto font-weight-bold'

export const Exercise03 = () => {
    return(
        <div className='exercise03'>
            {texts.map((text, index) => 
                <div key={index}>
                    <h3 className={titleClass}>{titles[index]}</h3>
                    <p className={boxClass + ' ' + classes[index]}>
                        {text}
                    </p>
                </div>
            )}
        </div>
    )
}