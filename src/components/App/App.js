import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";
import { Login } from '../Login/Login';
import { RegistroSave } from '../RegistroSave/RegistroSave';
import './App.scss';

function App() {
  return (
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



  );
}

export default App;
