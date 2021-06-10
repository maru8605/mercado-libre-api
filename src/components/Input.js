import {useState} from 'react'

function Input (props){
    const [article, setArticle] = useState('')

    function handleChange(e) {
        const {value} = e.target
        setArticle(value)

        sendChange()
    }

    function sendChange(){
        props.inputCallback(article)
    }
    return(
        <input
            text=''
            placeholder='Buscar Productos...'
            onChange={handleChange}
        />
    )
}

export default Input