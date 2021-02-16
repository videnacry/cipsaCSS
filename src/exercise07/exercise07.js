import './exercise07.css'
import goat from './goat.jpg'

const boldGreenClass = 'font-weight-900 color-green'
const boldRedClass = 'font-weight-900 color-red'

export const Exercise07 = () => {

    return(
    <div className='flex-row justify-content-center w-max'>
        <div className='w-800 h-700 border-black border-4'>
            <div className='m-2'>
                <header className='h-100 border-black mb-1 position-relative'>
                    <h1 className={'absolute-center m-0 ' + boldRedClass}>
                        Videnacry
                    </h1>
                </header>
                <nav className='h-50 border-black mb-1'>
                    <ul className='flex-row justify-content-center list-style-none'>
                        <li className='mx-2'>
                            <b className={boldGreenClass}>Inicio</b>
                        </li>
                        <li className='mx-2'>
                            <b className={boldGreenClass}>P&aacute;ginas</b>
                        </li>
                        <li>
                            <b className={boldGreenClass}>Contacto</b>
                        </li>
                    </ul>
                </nav>
                <article className='border-black mb-1'>
                    <p>
                        <b className={boldRedClass}>
                            Hace mucho que existe una fusi&oacute;n entre la causa y la consecuencia, siendo que se habla de ellas en algunas situaciones, como si fuesen lo mismo.
                        </b>
                    </p>
                    <div className='flex-row justify-content-center'>
                        <img src={goat} width='200' alt='semblante de cabra con un lobo, rosas, un feto y una persona en el'/>
                    </div>
                    <p>
                        <b className={boldRedClass}>
                            Otra fusi&oacute;n divertida es la de una propiedad con una categorizaci&oacute; con el mismo objeto, lo que termina haciendo que el objeto se reduzca a una simple perspectiva bajo un especifico escenario.
                        </b>
                    </p>
                </article>
            </div>
        </div>
    </div>
    )
}