import './App.css';
import Country from '../../components/Country';
import arrCountries from '../../countries.json';

function App() {
  return (
    <section  className="home">
      <img
      src='https://static.mlstatic.com/org-img/homesnw/img/ml-logo@2x.png?v=4.0'
      alt='logo mercadolibre'
      className='logoApp'
      />
      <ul>
        {arrCountries.map( (value, key) => (
          <li>
            <Country value={value} key={key}/>
          </li>       
        ))}
      </ul>
    </section>
  );
}

export default App;
