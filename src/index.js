import { BrowserRouter as Router, Route} from 'react-router-dom'
import ReactDOM from 'react-dom';
import './index.css';
import App from './pages/App/App';
import Carousel from './pages/Carousel/Carousel'
import reportWebVitals from './reportWebVitals';

ReactDOM.render(
  <Router>
    <Route  exact path='/' component={App}/>
    <Route  exact path='/carousel/:id' component={Carousel}/>
  </Router>,
  document.getElementById('root')
);


// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
