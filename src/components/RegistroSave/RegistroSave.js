import React from "react";
import "./RegistroSave.scss";
import Input from "@mui/material/Input";

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';

export const RegistroSave = () => {
  const [age, setAge] = React.useState('');

  const handleChange = (event) => {
    setAge(event.target.value);
  };
  return (
    <>
      <div className="container">

        <div className="titulo-principal">Cuentanos tu problema</div>
        <div className="cuerpo-modal">
            <div>
              <p className="texto-izquierda">Tipo de problema</p>
              <Input />
            </div>
            <div>
              <p className="texto-derecha">Ubicación de ocurrencia</p>
              <Input />
            </div>
            <div>
              <InputLabel id="demo-simple-select-label">Age</InputLabel>
              <Select
                labelId="demo-simple-select-label"
                id="demo-simple-select"
                value={age}
                label="Age"
                onChange={handleChange}
              >
                <MenuItem value={10}>Ten</MenuItem>
                <MenuItem value={20}>Twenty</MenuItem>
                <MenuItem value={30}>Thirty</MenuItem>
              </Select>
            </div>
        </div>

      </div>
    </>
  );
};
