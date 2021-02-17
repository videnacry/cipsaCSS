import './exercise10.css'
import exercise10Img from '../img/enouncements/exercise10.jpg'

import webVacacionesImg from './webVacaciones.jpg'
export const Exercise10 = () => {
    return(
    <div className='position-relative'>
        <img src={exercise10Img} class='position-absolute z-index--1' width='100%'/>
        <div className='w-94dot93-percent ml-3dot5-percent pt-2dot6-percent'>
            <header>
                <img src={webVacacionesImg} width='100%'/>
            </header>
            <nav className='bg-f9ffc6 pb-04'>
                <ul className='pl-12 flex-row list-style-type-none m-00'>
                    <li><a className='color-414141 font-weight-500 font-family-system-ui pr-06' id='portada' href='./#portada'>
                        Portada
                    </a></li>
                    <li><a className='color-414141 font-weight-500 font-family-system-ui pr-06' id='temporadas' href='./#temporadas'>
                        Temporadas
                    </a></li>
                    <li><a className='color-414141 font-weight-500 font-family-system-ui pr-06' id='invierno-vacacional' href='./#invierno-vacacional'>
                        Invierno Vacacional
                    </a></li>
                    <li><a className='color-414141 font-weight-500 font-family-system-ui pr-06' id='agosto' href='./#agosto'>
                        Agosto
                    </a></li>
                    <li><a className='color-414141 font-weight-500 font-family-system-ui pr-06' id='vacaciones-aventura' href='./#vacaciones-aventura'>
                        Vacaciones de Aventura
                    </a></li>
                    <li><a className='color-414141 font-weight-500 font-family-system-ui pr-06' id='contacto' href='./#contacto'>
                        Contacto
                    </a></li>
                </ul>
            </nav>
            <article>
                <h1>T&iacute;tulo de la p&aacute;gina</h1>
                <p>
                    La manera m&aacute;s sencilla y ordenada para organizar la p&aacute;gina es por capas. As&iacute; hemos intentado con esta pr&aacute;ctica final ir explicando parte por parte, la posible realizaci&oacute;n de la p&aacute;gina inicial de una Web.
                </p>
                <p>
                    De esta forma podemos ir comprendiendo la maquetaci&oacute;n de un p&aacute;gina
                </p>
                <p>
                    Luego podemos utilizar este ejemplo para nuestras propias maquetaciones.
                </p>
                <p>
                    Hemos intentado ir paso para ir comprendiendo una a una las partes en que podemos distribuir el dise&ntilde;o de nuestra web. Es importante seguir paso a paso el ejercicio y entender las propiedades utilizadas en cada estilo.
                </p>
                <ul>
                    <li><a id='volver' href='./#volver'>Volver</a></li>
                    <li><a id='portada' href='./#portada'>portada</a></li>
                    <li><a id='mapa-sitio' href='./#mapa-sitio'>Mapa del sitio</a></li>
                </ul>
            </article>
            <aside>
                <section>
                    <h3>Buscar</h3>
                    <input type='text'/>
                    <input type='submit' value='Go'/>
                    <input type='radio' id='vacations'/> <label for='vacations'>En la Web de las vacaciones</label>
                    <input type='radio' id='web'/> <label for='web'>En toda la Web</label>
                </section>
                <section>
                    <h3>Registro</h3>
                    <p>
                        <a>Reg&iacute;strese con nosotros</a> y obtenga muchas ventajas.
                    </p>
                </section>
                <section>
                    <h3>Otras informaciones</h3>
                    <ul>
                        <li><a id='quienes-somos' href='./#quienes-somos'>Quienes somos</a></li>
                        <li><a id='nuestra-mision' href='./#nuestra-mision'>Nuestra misi&oacute;n</a></li>
                        <li><a id='agenda-eventos' href='./#agenda-eventos'>Agenda de eventos</a></li>
                    </ul>
                </section>
            </aside>
            <footer>
                <p>Pruebas de maquetaci&oacute;n CSS © 2008 Cipsa.net</p>
            </footer>
        </div>
    </div>
    )
}