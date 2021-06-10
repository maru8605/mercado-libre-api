import {Link} from 'react-router-dom'
import Button from './Button'
import Input from './Input'

let article = ''
function Search (props){
    function reciveInput(dataInput){
        article = dataInput
    }

    function reciveClick(){
        sendArticle()
    }

    function sendArticle (){
        props.callback(article)
    }



    return(
        <section className='search'>
            <Link to='/'>
            <img
                src="https://http2.mlstatic.com/ui/navigation/4.4.4/mercadolibre/logo__large_plus@2x.png"
                alt="logo"
                />
            </Link>
            <div>
                <Input inputCallback={reciveInput}/>
               <Button clickCallback={reciveClick} />
            </div>
        </section>
    )

}

export default Search