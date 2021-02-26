import {Header} from './header'
import {Footer} from './footer'

import featured_img from './material/featured-img.png'
import featured_project_img from './material/featured-project.png'

export const Index = () => {
    return(
        <>
        <Header/>
        <div className='flex-row justify-content-center pt-1dot6-vw pb-02-vw'>
            <img className='w-56-vw mt-01-vw' src={featured_img} alt='8 figuras humanas'/>
        </div>
        <article className='border-box w-100-percent h-26-vw pt-3dot4-vw pl-05-vw pb-3dot4-vw pr-05-vw border-00dot3-vw border-solid border-color-e5e5e5 border-l-00 border-r-00 color-666666 text-shadow-minus-0dot1-vw-fcdfaa-0dot1-vw-b5c2d9-0-0-0dot1-vw-6e5571 font-weight-500  bg-img-linear-gradient-ededed-white-25'>
            <div className='float-left h-100-percent w-53-percent font-size-1dot4-vw'>
                <h1 className='m-00 font-size-2dot4-vw font-weight-500'>Lorem ipsum?</h1>
                <p className='pt-01-vw m-00 line-height-2dot3-vw mt-0dot1-vw mb-01-vw'>
                    Lorem Ipsum dolor sit amet, consectetur adipisicing elit, sed do elusmod tempor incididunt ut labore et dolore magna allqu tempor incididun. tempor inididunt. Duls aute irure dolor in reprehenderit in voluptate.
                </p>
                <a className='font-weight-400 font-size-1dot5-vw color-5eccf4 text-shadow-minus-0dot1-vw-9ff2ff-0dot1-vw-11b6ef'>Lear More About Koko &gt;</a>
            </div>
                <img className='border-box w-43-percent mt-01-vw border-00dot3-vw border-solid border-color-e5e5e5 float-right' src={featured_project_img} alt='fragmento de página web Jenko Design' />
            
        </article>
        <section className='w-100-percent flex-row flex-wrap color-666666 text-shadow-minus-0dot1-vw-fcdfaa-0dot1-vw-b5c2d9-0-0-0dot1-vw-6e5571 font-weight-500'>
            <article className='border-box w-50-percent h-21dot3-vw pt-2dot7-vw pl-05-vw pr-04-vw border-00 border-solid border-color-e5e5e5 border-r-00dot15-vw border-b-00dot15-vw'>
                <h2 className='font-size-02-vw m-00 mb-01-vw'>Cursos</h2>
                <p className='font-size-1dot3-vw line-height-2dot3-vw'>
                    Lorem Ipsum dolor sit amet, consectetur adipisicing elit, sed do elusmod tempor incididunt ut labore et dolore magna allqu tempor incididun.</p>
                <button className='w-9dot3-vw h-2dot8-vw border-radius-100 border-none bg-color-0baae8 font-weight-600 font-size-1dot2-vw color-fcffff text-shadow-minus-0dot1-vw-33cdf4-0dot1-vw-5cdefd focus-outline-none'>Leer m&aacute;s</button>
            </article>
            <article className='border-box w-50-percent h-21dot3-vw pt-2dot7-vw pl-05-vw pr-04-vw border-00 border-solid border-color-e5e5e5 border-l-00dot15-vw border-b-00dot15-vw'>
                <h2 className='font-size-02-vw m-00 mb-01-vw'>Seminarios</h2>
                <p className='font-size-1dot3-vw line-height-2dot3-vw'>
                    Lorem Ipsum dolor sit amet, consectetur adipisicing elit, sed do elusmod tempor incididunt ut labore et dolore magna allqu tempor incididun.</p>
                <button className='w-9dot3-vw h-2dot8-vw border-radius-100 border-none bg-color-0baae8 font-weight-600 font-size-1dot2-vw color-fcffff text-shadow-minus-0dot1-vw-33cdf4-0dot1-vw-5cdefd focus-outline-none'>Leer m&aacute;s</button>
            </article>
            <article className='border-box w-50-percent h-21dot3-vw pt-2dot7-vw pl-05-vw pr-04-vw border-00 border-solid border-color-e5e5e5 border-r-00dot15-vw border-t-00dot15-vw'>
                <h2 className='font-size-02-vw m-00 mb-01-vw'>Empresas</h2>
                <p className='font-size-1dot3-vw line-height-2dot3-vw'>
                    Lorem Ipsum dolor sit amet, consectetur adipisicing elit, sed do elusmod tempor incididunt ut labore et dolore magna allqu tempor incididun.</p>
                <button className='w-9dot3-vw h-2dot8-vw border-radius-100 border-none bg-color-0baae8 font-weight-600 font-size-1dot2-vw color-fcffff text-shadow-minus-0dot1-vw-33cdf4-0dot1-vw-5cdefd focus-outline-none'>Leer m&aacute;s</button>
            </article>
            <article className='border-box w-50-percent h-21dot3-vw pt-2dot7-vw pl-05-vw pr-04-vw border-00 border-solid border-color-e5e5e5 border-l-00dot15-vw border-t-00dot15-vw'>
                <h2 className='font-size-02-vw m-00 mb-01-vw'>Proyectos</h2>
                <p className='font-size-1dot3-vw line-height-2dot3-vw'>
                    Lorem Ipsum dolor sit amet, consectetur adipisicing elit, sed do elusmod tempor incididunt ut labore et dolore magna allqu tempor incididun.</p>
                <button className='w-9dot3-vw h-2dot8-vw border-radius-100 border-none bg-color-0baae8 font-weight-600 font-size-1dot2-vw color-fcffff text-shadow-minus-0dot1-vw-33cdf4-0dot1-vw-5cdefd focus-outline-none'>Leer m&aacute;s</button>
            </article>
        </section>
        <Footer/>
        </>
    )
}