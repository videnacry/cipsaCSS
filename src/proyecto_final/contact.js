import {Header} from './header'
export const Contact = () => {
    return(
    <>
    <Header/>
    <form>
        <h3>Contacto</h3>
        <p>P&oacute;ngase en contacto con nosotros mediante el siguiente formulario.</p>
        <input type='text' id='name' name='name' placeholder='Nombre' />
        <input type='email' id='email' name='email' placeholder='Email' />
        <input type='text' id='subject' name='subject' placeholder='Subject' />
        <textarea  style={{resize:'none'}}>

        </textarea>
        <input type='submit' value='Enviar >' />
    </form>
    </>
    )
}