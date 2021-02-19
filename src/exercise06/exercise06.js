import './exercise06.css'

const tableClasses = [
    'h-600', 'w-1000', 'border-black',
    'semantic-children-border-black', 
    'children-position-relative', 
    'children-font-f    amily-auto',
    'children-text-vertical-center',
    'children-font-size-26'
]
export const Exercise06 = () => {
    return(
        <div className='exercise06'>
            <div className={tableClasses.join(' ')}>
                <header className='bg-black color-white m-1 h-30 mb-0'>
                    <span className='mx-7'>CABECERA</span>
                </header>
                <div className='flex-row'>
                    <div className='w-20-percent'>
                        <nav className='m-1 h-130'>
                            <span className='mx-1'>MENU</span>
                        </nav>
                        <section className='m-1 h-170'>
                            <span className='mx-1 font-size-18'>CONTENIDO</span>
                        </section>
                    </div>
                    <article className='w-54-percent my-1'>
                        <h1 className='font-size-56 mx-2 pb-4'>CONTENIDO</h1>
                    </article>
                    <aside className='w-26-percent m-1'>
                        <span className='pb-4'>CONTENIDO LATERAL</span>
                    </aside>
                </div>
                <footer className='bg-black color-white m-1 mt-0 h-20'>
                    <span className='mx-4 font-size-18'>PIE DE P&Aacute;GINA</span>
                </footer>
            </div>
        </div>
    )
}