import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import Button from '@material-ui/core/Button';
import Input from '@mui/material/Input';
import './Login.scss';

export const Login = () => {
    return (
        <>
            <div className="App">
                <header className="App-header">

                    <img src="https://www.miraflores.gob.pe/modulos/intranet/dist/logomuniwhite.png?d9153b5383f7b03e9060a26be639f28f" />
                    <div className="color-de-fondo">
                        <p className="color-text-titulo">SAVE</p>
                        <h6 className="color-text subtitulo">Servicio de atención vecinal</h6>
                        <Input placeholder="Usuario" id="component-simple" />
                        <br /><br />
                        <Input placeholder="Contraseña" type="password" id="component-simple" />
                        <br /><br />
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
    )
}
