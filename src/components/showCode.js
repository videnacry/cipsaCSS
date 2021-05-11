import {useState, useRef, useEffect} from 'react'
import 'prismjs/themes/prism.css'
import Prismjs from 'prismjs'
const ShowCode = ({code}) => {
    const [showModal, setShowModal] = useState(false)
    const Button = <button onClick={() => setShowModal(!showModal)}>Show code</button>
    const codeElmt = useRef(null)
    const codeSnippet = useRef(Prismjs.highlight(code, Prismjs.languages.css, 'css'))
    useEffect(() => {
        if (showModal) codeElmt.current.innerHTML = codeSnippet.current
        // if (showModal) codeElmt.current.innerHTML = code
    }, [showModal])
    if (showModal)
        return(
            <>
            {Button}
            <div className="show-code-c">
                <pre className="language-css">
                    <code ref={codeElmt}></code>
                </pre>
            </div>
            </>
        )
    return Button
}
export default ShowCode