import React from "react";
import "./RegistroSave.scss";
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import TextField from '@mui/material/TextField';
import Radio from '@mui/material/Radio';
import RadioGroup from '@mui/material/RadioGroup';
import FormControlLabel from '@mui/material/FormControlLabel';
import Button from "@material-ui/core/Button";


export const RegistroSave = () => {
  const [age, setAge] = React.useState('');
  const [name, setName] = React.useState('');

  const [value, setValue] = React.useState('');

  const handleChangeSelect = ((event, set) => {
    set(event.target.value);
  });

  return (
    <>
      <div className="container">

        <div className="titulo-principal">
          Cuentanos tu problema
          <img src="https://www.miraflores.gob.pe/wp-content/themes/munimiraflores/web-imagenes/destacado-default.png" />
        </div>
        <div className="cuerpo-modal">
            <div className="item_1">
              <div className="item_1_left">
                <p className="texto-izquierda">Tipo de problema</p>
                <Select
                  value={age}
                  onChange={(e) => handleChangeSelect(e, setAge)}
                >
                  <MenuItem value={10}>Adulto Mayor</MenuItem>
                  <MenuItem value={20}>Discotecas y Bares</MenuItem>
                  <MenuItem value={30}>Tesoreria</MenuItem>
                  <MenuItem value={40}>Fiscalización</MenuItem>
                  <MenuItem value={50}>Limpieza de parques</MenuItem>
                  {/* {names.map((name) => (
                    <MenuItem
                      key={name}
                      value={name}
                    >
                      {name}
                    </MenuItem>
                  ))} */}
                </Select>
              </div>
              <div className="item_1_right">
                <p className="texto-derecha">Ubicación de ocurrencia</p>
                <TextField
                  id="demo-helper-text-aligned"
                  value={name}
                  onChange={(e) => handleChangeSelect(e, setName)}
                  placeholder="Escriba una Av./Calle/Jr./Psje"
                />
              </div>
            </div>
            <div className="item_2">
              <p className="texto-derecha">Descripcion:</p>
              <TextField
                id="fullWidth"
                placeholder="Escribir aqui"
                multiline
                rows={4}
              />
            </div>
            <div className="item_3">
              <p className="texto-derecha">Medio de Respuesta</p>
              <RadioGroup
                aria-label="gender"
                name="controlled-radio-buttons-group"
                value={value}
                onChange={(e) => handleChangeSelect(e, setValue)}
              >
                <FormControlLabel value="correo" control={<Radio />} label="Correo" />
                <FormControlLabel value="telefono" control={<Radio />} label="Telefono" />
                <FormControlLabel value="carta" control={<Radio />} label="Carta" />
                <FormControlLabel value="no deseo que me respondan" control={<Radio />} label="No deseo que me respondan" />
              </RadioGroup>
            </div>
            <div className="item_4">
              <p className="texto-derecha">Adjuntar archivos (opcional):</p>
              <p className="texto-derecha">Puedes subir un maximo de 20 MB en fotos videos y/o textos que ayuden a evidenciar tu reclamo</p>
              <Button
                className="button-subir"
                variant="contained"
                color="primary"
              >
                Sube tus archivos
              </Button>
            </div>
        </div>
        <div className="registerSave">
          <Button
            className="button-registrar"
            variant="contained"
            color="primary"
          >
            Registrar
          </Button>
        </div>
      </div>
    </>
  );
};
