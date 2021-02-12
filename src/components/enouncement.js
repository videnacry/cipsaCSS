import './enouncement.css'

export const Enuncement = ({enuncement:{title, text}}) => {
    return(
        <>
        <h1 className="enuncement-title">{title}</h1>
        <p className="enuncement-text">{text}</p>
        </>
    )
}