import React from 'react'
import Button from '@material-ui/core/Button';
import { red } from '@material-ui/core/colors';
import Input from '@mui/material/Input';
import './Login.scss';

export const Login = () => {
    return (
        <>
            <div>
                <img src="https://www.miraflores.gob.pe/modulos/intranet/dist/logomuniwhite.png?d9153b5383f7b03e9060a26be639f28f" />
                <div className="color-de-fondo">
                    <p className="color-text-titulo">SAVE</p>
                    <h6 className="color-text subtitulo">Servicio de atención vecinal</h6>
                    <Input placeholder="Usuario" id="component-simple" />
                    <br /><br />
                    <Input placeholder="Contraseña" type="password" id="component-simple" />
                    <br /><br />
                    <Button
                        className="button-login" 
                        variant="contained" 
                        color="primary">
                        Ingresar
                    </Button>
                </div>
            </div>
        </>
    )
}
