import React from 'react'
import Button from '@material-ui/core/Button';
import { red } from '@material-ui/core/colors';
import Input from '@mui/material/Input';

export const Login = () => {
    return (
        <div>
            <div style={{background:red}}>
                <h3>SAVE</h3>
                <h6>Servicio de atención vecinal</h6>
                <h6>Usuario</h6>
                <Input id="component-simple" />
                <h6>Contraseña</h6>
                <Input id="component-simple" />
            <Button variant="contained" color="primary">
                Ingresar
            </Button> 
            </div>
        </div>
    )
}
