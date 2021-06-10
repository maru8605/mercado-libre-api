import {Link} from'react-router-dom';

function Country(props) {
    const {country, code, flag} = props.value
    return(
        <Link to={`/carousel/${code}`}>
            <img
            src={`https://raw.githubusercontent.com/maru8605/mercado-libre-api/main/src/img/${flag}.png`}
            alt="flag"
            className="flag"/>{" "}
            {country}
        </Link>
    )
}

export default Country;
