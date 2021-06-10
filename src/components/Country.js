// import {Link} from'react-router-dom';

function Country(props) {
    const {country, code, flag} = props.value
    return(
        <section>
            <img
            src={`https://raw.githubusercontent.com/maru8605/mercado-libre-api/main/src/img/${flag}.png`}
            alt="flag"
            className="flag"/>
        </section>
    )
}

export default Country;