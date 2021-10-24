import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Login } from '../Login/Login';
import { RegistroSave } from '../RegistroSave/RegistroSave';
import './App.scss';
import Rutas from '../router/Router'
import logo from '../../assets/images/logo.svg';
function App() {
  return (
    <div className="App">
      {/* <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Edit <code>src/App.js</code> and save to reload.
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
      <Rutas /> */}
    {/* <div className="bodyApp"> */}
    <Router>
      <Switch>
        <Route path="/" exact>
          <Login />
        </Route>
        <Route path="/register" >
          <RegistroSave />
        </Route>
      </Switch>
    </Router>
    </div>
  );
}

export default App;
