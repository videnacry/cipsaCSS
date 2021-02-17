import './exercise09.css'

import environmentImg from './Environment.png'
import calamardoImg from './Calamardo.jpg'
const articleClasses = [
    'w-30-percent', 'media-869-w-max',
    'border-black', 'border-box',
    'flex-row', 'flex-nowrap',
    'justify-content-center'
]
const articleDivClasses = [
    'flex-column', 'media-869-flex-row',
    'justify-content-space-between',
    'media-869-justify-content-space-evenly',
    'media-869-w-max'
]
const headerClasses = [
    'border-black', 'border-4',
    'h-16-percent', 'mb-2-percent',
    'border-box', 'position-relative'
]
const pageTitleClasses = [
    'color-812d81', 'font-weight-900',
    'font-size-2', 'absolute-center',
    'm-0'
]
const footerTextClasses = [
    'font-weight-900', 'font-size-1', 
    'font-family-arial', 'color-whitesmoke',
    'position-absolute', 'top-35-percent',
    'right-1-percent'
]
const pClass = 'font-weight-900 font-size-1 font-family-arial w-240'
export const Exercise09 = () => {
    return(
    <div className='h-94-vh w-98-vw position-relative mx-2-vw my-4-vh'>
        <header className={headerClasses.join(' ')}>
            <h1 className={pageTitleClasses.join(' ')}>
                Mi web de prueba
            </h1>
        </header>
        <section className='flex-row h-72-percent media-869-flex-column media-869-h-unset'>
            <article className={articleClasses.join(' ') + ' border-4 bg-gold mr-6-percent'}>
                <div className={articleDivClasses.join(' ')}>
                    <p className={pClass + ' color-black'}>
                        Este es un ejercicio en el cual aplicaremos todo lo que sabemos hasta &eacute;ste momento, pasando por todos los temas vistos hasta ahora.
                    </p>
                    <div>
                        <img src={environmentImg} className='my-20' width='240' alt=''/>
                    </div>
                </div>
            </article>
            <article className={articleClasses.join(' ') + ' border-2 bg-b19ed8 mr-4-percent'}>
                <div className={articleDivClasses.join(' ')}>
                    <div>
                        <img src={calamardoImg} className='my-20' width='240' alt=''/>
                    </div>
                    <p className={pClass + ' color-gold'}>
                        Vamos a trabajar con im&aacute;genes en distintas posiciones y tama&ntilde;os haremos listas y tambi&eacute;n utilizaremos colores de fondo.
                    </p>
                </div>
            </article>
            <article className={articleClasses.join(' ') + ' border-4 bg-afafaf color-dodgerblue'}>
                <div className='media-869-w-max media-869-flex-row media-869-justify-content-space-evenly'>
                    <div>
                        <p className={pClass + ' color-dodgerblue'}>
                            Sabemos de momento trabajar con:
                        </p>
                        <ul className='list-style-type-none w-240 p-0'>
                            <li className={pClass + ' w-230'}>Html</li>
                            <li className={pClass + ' w-230'}>XHtml</li>
                            <li className={pClass + ' w-230'}>CSS</li>
                        </ul>
                    </div>
                    <div>
                        <p className={pClass + ' color-dodgerblue'}>Por lo tanto sabemos dise&ntilde;ar p&aacute;ginas:</p>
                        <ul className='list-style-type-none w-240 p-0'>
                            <li className={pClass + ' w-230'}>
                                Regidas por los est&aacute;ndares utilizados hoy en d&iacute;a
                            </li>
                            <li className={pClass + ' w-230'}>
                                Que se ver&aacute;n en cualquier navegador
                            </li>
                        </ul>
                    </div>
                </div>
            </article>
        </section>
        <footer className='bg-black h-7-percent w-max mt-1-percent position-relative'>
            <p>
                <b className={footerTextClasses.join(' ')}>
                    Alumno de Cispa a&ntilde;o 2010 todos los derechos reservados
                </b>
            </p>
        </footer>
    </div>
    )
}