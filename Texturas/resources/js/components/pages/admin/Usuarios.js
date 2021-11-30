import React, { Component } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Paper from '@mui/material/Paper';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Service from './../../services/Index'
import TableTemplate from './../../tools/tables/TableTemplate';
import UsuariosForm from './../../tools/forms/UsuariosForm';
import DataUsuarios from './../../data-module/Usuarios';


class Usuarios extends Component {
  state = {
    data: [],
    values: {
      name: '',
      surnames: '',
      email: '',
      password: '',
      phone: null,
      rol: 1,
    }
  }

  peticionGet = () => {
    Service.Usuarios.getAll().then(response => {
      //Testing metodo get-> 
      console.log(response.data);
      this.setState({ data: response.data });
    }).catch(error => {
      console.log(error.message);
    })
  }


  componentDidMount() {
    this.peticionGet();
  }

  render() {
    const rows = this.state.data.map(fila => DataUsuarios.createData(fila.id, fila.Nombre, fila.Apellidos, fila.email, fila.Telefono, fila.Rol_id));

    return (
      <>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              <Grid container sx={{ p: '15px' }}>
                <Grid item xs>
                  <Typography variant="h6" noWrap component="div">
                    Tabla de usuarios administradores
                  </Typography>
                </Grid>
                <Grid item>
                  <UsuariosForm dataForm={DataUsuarios.form} dataValues={DataUsuarios.valuesUsuario} dataTitle="Usuario" />
                </Grid>
              </Grid>
              <TableTemplate columns={DataUsuarios.columns} rows={rows} />
            </Paper>
          </Grid>
        </Grid >
      </>
    );
  }
}


export default Usuarios;