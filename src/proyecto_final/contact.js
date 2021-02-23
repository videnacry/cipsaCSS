import {Header} from './header'
export const Contact = () => {
    return(
    <>
    <Header/>
    <form className='pt-01-vw pl-05-vw pb-01-vw pr-05-vw '>
        <h3 className='mb-03-vw font-size-03-vw font-weight-500 text-shadow-0dot1-vw-7ba5cf-minus-0dot1-vw-edd1b0 color-4d5155'>
            Contacto
        </h3>
        <p className='color-706570 text-shadow-minus-0dot1-vw-e8d5c0-0dot1-vw-8f94be-0-minus-0dot1-vw-a5bdd4 mb-1dot7-vw font-size-1dot4-vw'>
            P&oacute;ngase en contacto con nosotros mediante el siguiente formulario.
        </p>
        <input className='border-box w-26-vw h-5-vw pt-0dot5-vw pl-1dot5-vw mb-1dot6-vw d-block font-size-1dot3-vw' type='text' id='name' name='name' placeholder='Nombre' />
        <input className='border-box w-26-vw h-5-vw pt-0dot5-vw pl-1dot5-vw mb-1dot6-vw d-block font-size-1dot3-vw' type='email' id='email' name='email' placeholder='Email' />
        <input className='border-box w-26-vw h-5-vw pt-0dot5-vw pl-1dot5-vw mb-1dot6-vw d-block font-size-1dot3-vw' type='text' id='subject' name='subject' placeholder='Subject' />
        <textarea className='w-33dot3-vw h-23-vw pt-0dot5-vw pl-1dot5-vw mb-2dot33-vw d-block font-size-1dot3-vw resize-none'></textarea>
        <input className='w-9dot5-vw h-2dot8-vw ml-minus-0dot4-vw border-none border-radius-100 bg-color-0baae8 font-size-1dot3-vw color-a8eef8' type='submit' value='Enviar >' />
    </form>
    </>
    )
}