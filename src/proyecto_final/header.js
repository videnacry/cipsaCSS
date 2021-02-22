import logo from './material/logo.png'
import subtitle from './material/subtitle.png'

export const Header = () => {
    return(
    <>
    <header>
        <img src={logo} alt='' width='30%'/>
        <img src={subtitle} alt='' width='60%'/>
    </header>
    <nav>
        <ul className='flex-row list-style-none'>
            <li>INICIO</li><span/>~<span/>
            <li>CIPSA</li><span/>~<span/>
            <li>SERVICIOS</li><span/>~<span/>
            <li>PROYECTOS</li><span/>~<span/>
            <li>CONTACTO</li>
        </ul>
    </nav>
    </>
    )
}