import './App.scss';
import { Login } from '../Login/Login'
import { RegistroSave } from '../RegistroSave/RegistroSave';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <Login></Login>
        {/* <RegistroSave></RegistroSave> */}
      </header>
    </div>
  );
}

export default App;
