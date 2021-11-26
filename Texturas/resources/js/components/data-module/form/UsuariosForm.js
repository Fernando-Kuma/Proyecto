import * as React from 'react';
import Box from '@mui/material/Box';
import IconButton from '@mui/material/IconButton';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import MenuItem from '@mui/material/MenuItem';

export default function UsusariosForm() {
  const [values, setValues] = React.useState({
    name: '',
    surnames: '',
    email: '',
    password: '',
    phone: null,
    rol: 1,
    showPassword: false,
  });

  const handleChange = (prop) => (event) => {
    setValues({ ...values, [prop]: event.target.value });
  };

  const handleClickShowPassword = () => {
    setValues({
      ...values,
      showPassword: !values.showPassword,
    });
  };

  const handleMouseDownPassword = (event) => {
    event.preventDefault();
  };

  return (
    <Box
      component="form"
      sx={{ '& .MuiTextField-root': { m: 1, width: '25ch' }, }}
      noValidate
      autoComplete="off"
    >
      <div>
        <TextField
          label="Nombre(s)"
          id="filled-start-adornment"
          sx={{ m: 1, width: '25ch' }}
          value={values.name}
          variant="filled"
        />
        <TextField
          label="Apellidos"
          id="filled-start-adornment"
          sx={{ m: 1, width: '25ch' }}
          value={values.surnames}
          variant="filled"
        />
        <TextField
          label="Number"
          id="filled-number"
          sx={{ m: 1, width: '25ch' }}
          type="number"
          InputLabelProps={{
            shrink: true,
          }}
          variant="filled"
          value={values.phone}
        />
        <FormControl fullWidth sx={{ m: 1, width: '25ch' }} variant="filled">
          <InputLabel htmlFor="filled-adornment-amount">Correo</InputLabel>
          <FilledInput
            id="filled-adornment-amount"
            type="email"
            value={values.email}
            onChange={handleChange('email')}
          />
        </FormControl>
        <FormControl sx={{ m: 1, width: '25ch' }} variant="filled">
          <InputLabel htmlFor="filled-adornment-password">Password</InputLabel>
          <FilledInput
            id="filled-adornment-password"
            type={values.showPassword ? 'text' : 'password'}
            value={values.password}
            onChange={handleChange('password')}
            endAdornment={
              <InputAdornment position="end">
                <IconButton
                  aria-label="toggle password visibility"
                  onClick={handleClickShowPassword}
                  onMouseDown={handleMouseDownPassword}
                  edge="end"
                >
                  {values.showPassword ? <VisibilityOff /> : <Visibility />}
                </IconButton>
              </InputAdornment>
            }
          />
        </FormControl>
        <TextField
          id="filled-select-currency"
          select
          label="Rol"
          value={values.rol}
          variant="filled"
          onChange={handleChange('rol')}>
          {['1', '2', '3'].map((text, index) => (
            <MenuItem key={index} value={text}>
              {text}
            </MenuItem>
          ))}
        </TextField>
      </div>
    </Box>
  );
}
