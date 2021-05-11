import {useState, useRef, useEffect} from 'react'
import 'prismjs/themes/prism.css'
import Prismjs from 'prismjs'

const ShowCode = ({code}) => {
    const [showModal, setShowModal] = useState(false)
    const Button = (content) => <button style={{margin: '10px'}} onClick={() => setShowModal(!showModal)}>{content}</button>
    const codeElmt = useRef(null)
    const codeSnippet = Prismjs.highlight(code, Prismjs.languages.css, 'css')
    useEffect(() => {
        if (showModal) codeElmt.current.innerHTML = codeSnippet
    }, [showModal, code])
    if (showModal)
        return(
            <>
            {Button('Hide code')}
            <pre style={{backgroundColor: '#fffae7', marginLeft: 'auto', marginRight: 'auto', width: '90%'}}>
                <code ref={codeElmt}></code>
            </pre>
            </>
        )
    return Button('Show code')
}
export default ShowCode