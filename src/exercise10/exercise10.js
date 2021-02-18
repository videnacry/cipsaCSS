import './exercise10.css'
import exercise10Img from '../img/enouncements/exercise10.jpg'

import webVacacionesImg from './webVacaciones.jpg'
export const Exercise10 = () => {
    return(
    <div className='position-relative'>
        <img src={exercise10Img} className='position-absolute z-index--1' width='100%'/>
        <div className='w-94dot776-percent ml-3dot5-percent pt-2dot6-percent'>
            <header>
                <img src={webVacacionesImg} width='100%'/>
            </header>
            <nav className='bg-f9ffc6 pb-04  border-light-gray border-00 border-bottom-02'>
                <ul className='pl-12 flex-row list-style-type-none m-00'>
                    <li><a className='color-4b4b4b font-family-system-ui pr-06 text-shadow-gray-02 font-size-14' id='portada' href='./#portada'>
                        Portada
                    </a></li>
                    <li><a className='color-4b4b4b font-family-system-ui pr-06 text-shadow-gray-02 font-size-14' id='temporadas' href='./#temporadas'>
                        Temporadas
                    </a></li>
                    <li><a className='color-4b4b4b font-family-system-ui pr-06 text-shadow-gray-02 font-size-14' id='invierno-vacacional' href='./#invierno-vacacional'>
                        Invierno Vacacional
                    </a></li>
                    <li><a className='color-4b4b4b font-family-system-ui pr-06 text-shadow-gray-02 font-size-14' id='agosto' href='./#agosto'>
                        Agosto
                    </a></li>
                    <li><a className='color-4b4b4b font-family-system-ui pr-06 text-shadow-gray-02 font-size-14' id='vacaciones-aventura' href='./#vacaciones-aventura'>
                        Vacaciones de Aventura
                    </a></li>
                    <li><a className='color-4b4b4b font-family-system-ui pr-06 text-shadow-gray-02 font-size-14' id='contacto' href='./#contacto'>
                        Contacto
                    </a></li>
                </ul>
            </nav>
            <div className='flex-row justify-content-space-between'>
                <article className='w-68-percent'>
                    <h1 className='font-family-cursive font-size-22 color-535268 mb-00 text-shadow-b9b9b9-20-grey-2'>
                        T&iacute;tulo de la p&aacute;gina
                    </h1>
                    <p className='line-height-18 my-10 color-5f5d67 font-family-system-ui text-shadow-b9b9b9-20-grey-2 font-size-15'>
                        La manera m&aacute;s sencilla y ordenada para organizar la p&aacute;gina es por capas. As&iacute; hemos intentado con esta pr&aacute;ctica final ir explicando parte por parte, la posible realizaci&oacute;n de la p&aacute;gina inicial de una Web.
                    </p>
                    <p className='line-height-18 my-10 color-5f5d67 font-family-system-ui text-shadow-b9b9b9-20-grey-2 font-size-15'>
                        De esta forma podemos ir comprendiendo la maquetaci&oacute;n de un p&aacute;gina
                    </p>
                    <p className='line-height-18 my-10 color-5f5d67 font-family-system-ui text-shadow-b9b9b9-20-grey-2 font-size-15'>
                        Luego podemos utilizar este ejemplo para nuestras propias maquetaciones.
                    </p>
                    <p className='line-height-18 my-10 color-5f5d67 font-family-system-ui text-shadow-b9b9b9-20-grey-2 font-size-15'>
                        Hemos intentado ir paso para ir comprendiendo una a una las partes en que podemos distribuir el dise&ntilde;o de nuestra web. Es importante seguir paso a paso el ejercicio y entender las propiedades utilizadas en cada estilo.
                    </p>
                    <ul className='flex-row p-0 list-style-type-none m-12 font-family-monospace font-size-16 color-3e2b55 font-weight-600 mt-00'>
                        <li><a className='font-family-monospace font-size-16 color-2f1f43 font-weight-600 text-shadow-bf3fbf-14-black-1' id='volver' href='./#volver'>Volver</a></li>
                        &nbsp;|&nbsp;
                        <li><a className='font-family-monospace font-size-16 color-2f1f43 font-weight-600 text-shadow-bf3fbf-14-black-1' id='portada' href='./#portada'>Portada</a></li>
                        &nbsp;|&nbsp;
                        <li><a className='font-family-monospace font-size-16 color-2f1f43 font-weight-600 text-shadow-bf3fbf-14-black-1' id='mapa-sitio' href='./#mapa-sitio'>Mapa del sitio</a></li>
                    </ul>
                </article>
                <aside className='w-28dot6-percent border-light-gray border-02 border-right-00 border-top-00'>
                    <section className=''>
                        <h3 className='mt-00 mb-10 bg-737ba0 font-weight-500 color-dddddd font-family-monospace font-size-16 text-shadow-whitesmoke text-shadow-left-01'>Buscar</h3>
                        <div><input type='text'className='w-58-percent ml-5-percent'/></div>
                        <div><button disabled className='flex-column justify-content-center px-06 border-radius-06 border-light-gray border-02 h-19 bg-lightgoldenrodyellow color-d3d19c font-weight-600 font-family-monospace font-size-15 mt-1dot5-percent ml-57-percent'>Go</button></div>
                        <div className='ml-6dot5-percent color-5f5d67 font-size-14'>
                            <div><span className='position-relative size-16 bg-5f5d67 inline-block border-radius-50-percent'>
                                <input type='radio' className='m-00 absolute-center' id='vacations'/></span>
                                &nbsp;<label className='text-shadow-black  color-5f5d67' for='vacations'>En la Web de las vacaciones</label>
                            </div>
                            <div><span className='position-relative size-16 bg-5f5d67 inline-block border-radius-50-percent'>
                                <input type='radio' className='m-00 absolute-center' id='web'/></span>
                                &nbsp;<label className='text-shadow-black  color-5f5d67' for='web'>En toda la Web</label>
                            </div>
                        </div>
                    </section>
                    <section className='font-size-14'>
                        <h3 className='mt-00 bg-737ba0 font-weight-500 color-dddddd font-family-monospace font-size-16 text-shadow-whitesmoke text-shadow-left-01'>Registro</h3>
                        <p className='ml-5-percent color-5f5d67 text-shadow-black'>
                            <a className='color-3e2b55 text-shadow-black text-shadow-02' id='register' href='#register'>Reg&iacute;strese con nosotros</a> y obtenga muchas ventajas.
                        </p>
                    </section>
                    <section className='font-size-14'>
                        <h3 className='mt-00 bg-737ba0 font-weight-500 color-dddddd font-family-monospace font-size-16 text-shadow-whitesmoke text-shadow-left-01'>Otras informaciones</h3>
                        <ul className='list-style-type-none pl-14-percent mb-20'>
                            <li className='line-height-30'>
                                <a className='color-3e2b55 text-shadow-black text-shadow-02' id='quienes-somos' href='./#quienes-somos'>Quienes somos</a>
                            </li>
                            <li className='line-height-30'>
                                <a className='color-3e2b55 text-shadow-black text-shadow-02' id='nuestra-mision' href='./#nuestra-mision'>Nuestra misi&oacute;n</a>
                            </li>
                            <li className='line-height-30'>
                                <a className='color-3e2b55 text-shadow-black text-shadow-02' id='agenda-eventos' href='./#agenda-eventos'>Agenda de eventos</a>
                            </li>
                        </ul>
                    </section>
                </aside>
            </div>
            <footer>
                <p className='text-align-end text-shadow-black mr-1dot5-percent color-bebebe font-size-14'>
                    Pruebas de maquetaci&oacute;n CSS © 2008 Cipsa.net
                </p>
            </footer>
        </div>
    </div>
    )
}