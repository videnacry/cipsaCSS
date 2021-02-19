import './exercise08.css'
import snakeImg from './snake_1000.jpg'

const boldGreenClass = 'font-weight-900 color-green'
const boldRedClass = 'font-weight-900 color-red'
const navOptions = ['Inicio', 'Fotos', 'Varios', 'Contacto']
export const Exercise08 = () => {
    return(
    <div className='exercise08'>
        <div className='flex-row justify-content-center w-max'>
            <div className='w-800 h-700 border-black border-4 p-20 border-box'>
                <header className='h-100 border-black position-relative'>
                    <h1 className={'absolute-center m-00 ' + boldRedClass}>
                        VIDENACRY
                    </h1>
                </header>
                <div className='flex-row mt-10 h-460'>
                    <aside className='w-250 border-black pt-120'>
                        <nav className='flex-row justify-content-center'>
                            <ul className='list-style-none padding-00'>
                                {navOptions.map(option => {
                                    return(
                                        <li key={option}>
                                            <b className={boldGreenClass}>
                                                {option} 
                                            </b>
                                        </li>
                                    )}
                                )}
                            </ul>
                        </nav>
                    </aside>
                    <article className='border-black ml-10 w-450 overflow-auto'>
                        <img src={snakeImg} className='mt-40 ml-15' width='300' alt='Serpiente abstracta con cara de dinosaurio, varias colas una terminando en un puño'/>
                        <h1 className={'ml-15 ' + boldRedClass}>La herida serpiente</h1>
                        <p className='ml-15'>
                            <b className={boldRedClass}>
                                Y empez&oacute; a hacer aquello que sab&iacute;a hacer, lo &uacute;nico que se encontraba en su c&uacute;spide de acciones aprendidas, porque en alg&uacute;n lugar de su mente se conservaban las preferencias, y cuando esto tan preferido no le salvaba, recurria a su vecino, contrario desde cierto punto de vista.
                            </b>
                        </p>
                    </article>
                </div>
                <footer className='h-80 border-black mt-10 position-relative'>
                    <b className={'absolute-vertical-center right-60 ' + boldRedClass}>
                        Ber&oacute;n Gamboa 2021
                    </b>
                </footer>
            </div>
        </div>
    </div>
    )                
}