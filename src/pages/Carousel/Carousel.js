import './index.css'
import {useParams} from 'react-router-dom'
import arrCountries from '../../countries.json'

import Error from '../../components/Error'
import Shop from '../../components/Shop'

function Carousel(){
    const {id} = useParams()

    function filterCode(obj) {
        return obj.cod === id;
    }

    const filterId = arrCountries.filter(filterCode)

    if (filterId.length === 0 === 0){
        <Error errorValue='404' />
    }else{
        <Shop  zoneValue={id}/>
    }

}

export default Carousel;