import './exercise02.css'
export * as exercise02 from './exercise02.json'
const links = [
    'https://www.cipsa.net/',
    'www.cipsaempresas.net',
    'www.maps.google.com',
    'https://www.google.es/maps/place/CIPSA+-+Formaci%C3%B3+A+Barcelona',
    'https://www.google.es/'
]

export const Exercise02 = () => {
    return(
        <ul className='exercise02'>
            {links.map(link => 
                <li className='m-1 p-1 bg-blue hover-color-purple'>
                    <a href={link} className='color-white visited-color-red'>{link}</a>
                </li>)
            }
        </ul>
    )
}