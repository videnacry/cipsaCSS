import './navX.css'

export const NavX = ({titles, clickHandler}) => {
    return(
    <div className='nav-x_c'>
        <ul className='flex-row p-0 list-style-none'>
            {titles.map(title => <li onClick={clickHandler} className='mx-5 cursor-pointer' key={title}>{title}</li>)}
        </ul>
    </div>
    )
}