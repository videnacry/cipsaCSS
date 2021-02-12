import './nav.css'
export const Nav = ({lines}) => {
    return(
        <ul className="nav-c">
            {lines.map(line => <li>{line}</li>)}
        </ul>
    )
}