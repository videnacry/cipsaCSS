import './exercise07.css'
import goat from './goat.jpg'

export const Exercise07 = () => {

    return(
    <div className='flex-row justify-content-center w-max'>
        <div className='w-800 h-700 border-black border-4'>
            <div className='m-2'>
                <header className='h-100 border-black mb-1 position-relative'>
                    <h1 className='absolute-center m-0'>Videnacry</h1>
                </header>
                <nav className='h-50 border-black mb-1'>
                    <ul className='flex-row justify-content-center list-style-none'>
                        <li className='mx-2'>Inicio</li>
                        <li className='mx-2'>P&aacute;ginas</li>
                        <li>Contacto</li>
                    </ul>
                </nav>
                <article className='border-black mb-1'>
                    <p>
                        Hace mucho que existe una fusi&oacute;n entre la causa y la consecuencia, siendo que se habla de ellas en algunas situaciones, como si fuesen lo mismo.
                    </p>
                    <div className='flex-row justify-content-center'>
                        <img src={goat} width='200' alt='semblante de cabra con un lobo, rosas, un feto y una persona en el'/>
                    </div>
                    <p>
                        Otra fusi&oacute;n divertida es la de una propiedad con una categorizaci&oacute; con el mismo objeto, lo que termina haciendo que el objeto se reduzca a una simple perspectiva bajo un especifico escenario.
                    </p>
                </article>
            </div>
        </div>
    </div>
    )
}