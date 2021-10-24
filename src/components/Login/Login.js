import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Button from "@material-ui/core/Button";
import TextField from '@mui/material/TextField';
import "./Login.scss";

export const Login = () => {
  const [user, setUser] = React.useState('');
  const [password, setPassword] = React.useState('');

  const handleChangeSelect = ((event, set) => {
    set(event.target.value);
  });

  return (
    <>
      <div className="App">
        <header className="App-header">
          <img src="https://www.miraflores.gob.pe/modulos/intranet/dist/logomuniwhite.png?d9153b5383f7b03e9060a26be639f28f" />
          <div className="color-de-fondo">
            <p className="color-text-titulo">SAVE</p>
            <p className="color-text-subtitulo">
              Servicio de atención vecinal
            </p>
            <div className="item_login">
              <p className="">Usuario</p>
              <TextField
                id="demo-helper-text-aligned"
                value={user}
                onChange={(e) => handleChangeSelect(e, setUser)}
                placeholder=""
              />
            </div>
            <div className="item_login">
              <p className="">Contraseña</p>
              <TextField
                id="demo-helper-text-aligned"
                value={password}
                onChange={(e) => handleChangeSelect(e, setPassword)}
                placeholder=""
              />
            </div>
            <Link to="/register">
              <Button
                className="button-login"
                variant="contained"
                color="primary"
              >
                Ingresar
              </Button>
            </Link>
          </div>
        </header>
      </div>
    </>
  );
};
