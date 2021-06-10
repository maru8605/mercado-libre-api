import {useState} from 'react'
import {useParams} from 'react-router-dom'
import Search from './Search'
import Products from './Products'

function Shop (){
    const {id }= useParams()

    const [products, setProducts] = useState({})

    async function fetchProducts(data) {
        const requestURL = `https://api.mercadolibre.com/sites/${id}/search?q=${data}`;
        const getProduct = await fetch(requestURL);
        const getJSON = await getProduct.json();

        setProducts(getJSON);
    }

    return(
        <section>
            <Search callback={fetchProducts}/>
            <Products articles={products}/>
        </section>
    )
}

export default Shop