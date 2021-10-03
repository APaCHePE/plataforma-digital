import React from 'react'
import './RegistroSave.scss'
import Input from '@mui/material/Input';

export const RegistroSave = () => {
    return (
        <>
        <div>
            <p className="titulo-principal">Cuentanos tu problema</p>
            <div className="cuerpo-modal">
                <div className="columas">
                    <div><p className="texto-izquierda">Tipo de problema</p>
                <Input/></div>
                    <div><p className="texto-derecha">Ubicación de ocurrencia</p>
                <Input/></div>
                </div>
                
                
            </div>
        </div>
        </>
    )
}
