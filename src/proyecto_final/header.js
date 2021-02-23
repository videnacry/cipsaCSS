import logo from './material/logo.png'
import subtitle from './material/subtitle.png'

export const Header = () => {
    return(
    <>
    <header className='border-box h-24dot6-vw pt-01-vw flex-column justify-content-center bg-img-gradient-e2e2e2-white-25'>
        <div className='border-box w-100-percent pr-05-vw flex-row justify-content-center'>
            <img src={logo} alt='' width='34%'/>
        </div>
        <div className='w-100-percent flex-row justify-content-center'>
            <img src={subtitle} alt='' width='60%'/>
        </div>
    </header>
    <nav className='w-100-percent border-00dot25-vw border-l-00 border-r-00 border-solid border-color-e5e5e5 flex-row justify-content-center bg-color-f3f3f4 font-size-1dot8-vw font-weight-500 color-9c89a2'>
        <ul className='w-65-percent w-max-500 p-00 flex-row justify-content-space-evenly list-style-none'>
            <li className='color-blueviolet'>INICIO</li><span/>~<span/>
            <li className='color-blueviolet'>CIPSA</li><span/>~<span/>
            <li className='color-blueviolet'>SERVICIOS</li><span/>~<span/>
            <li className='color-blueviolet'>PROYECTOS</li><span/>~<span/>
            <li className='color-blueviolet'>CONTACTO</li>
        </ul>
    </nav>
    </>
    )
}