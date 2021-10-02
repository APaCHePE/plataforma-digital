import React from 'react'
import Button from '@material-ui/core/Button';
import { red } from '@material-ui/core/colors';
import Input from '@mui/material/Input';
import './Login.scss';

export const Login = () => {
    return (
        <>
        <div>
            <div className="color-de-fondo">
                <h3 className="color-text">SAVE</h3>
                <h6 className="color-text">Servicio de atención vecinal</h6>
                <h6 className="color-text">Usuario</h6>
                <Input id="component-simple" />
                <h6 className="color-text">Contraseña</h6>
                <Input id="component-simple" />
                <br/><br/>
                <Button variant="contained" color="primary">
                Ingresar
            </Button> 
            </div>
        </div>
    </>
    )
}
