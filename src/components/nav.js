import './nav.css'

export const Nav = ({lines, clickHandler}) => {

    return(
        <ul className="nav-c">
            {lines.map(line => <li key={line} onClick={() => clickHandler(line)}>{line}</li>)}
        </ul>
    )
}