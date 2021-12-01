import React, { Component } from 'react';
import Typography from '@mui/material/Typography';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import Tooltip from '@mui/material/Tooltip';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import Fingerprint from '@mui/icons-material/Fingerprint';
import DeleteIcon from '@mui/icons-material/Delete';
import BorderColorIcon from '@mui/icons-material/BorderColor';

import Service from './../../services/Index'
import ClientesForm from './../../tools/forms/ClientesForm';
import DataClientes from './../../data-module/Clientes';



class Clientes extends Component {
  state = {
    data: [],
  }

  seleccionarFila = (row) => {
    console.log(row)
  }

  peticionGet = () => {
    Service.Clientes.getAll().then(response => {
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
    const rows = this.state.data.map(fila => DataClientes.createData(fila.id, fila.Nombre, fila.Apellidos, fila.Correo, fila.Telefono));

    return (
      <>
        <Grid container spacing={3}>
          <Grid item xs={12}>
            <Paper sx={{ p: 2, display: 'flex', flexDirection: 'column' }}>
              <Grid container sx={{ p: '15px' }}>
                <Grid item xs>
                  <Typography variant="h6" noWrap component="div">
                    Tabla de clientes
                  </Typography>
                </Grid>
                <Grid item>

                  <ClientesForm
                    dataForm={DataClientes.form}
                    dataValues={DataClientes.valuesClientes}
                    dataTitle={DataClientes.titlePost()}
                    dataOpcion="insertar"
                  />

                </Grid>
              </Grid>
              <Paper sx={{ width: '99%', overflow: 'hidden' }}>
                <TableContainer sx={{ maxHeight: 440 }}>
                  <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                      <TableRow>
                        {DataClientes.columns.map((column) => (
                          <TableCell
                            key={column.id}
                            align={column.align}
                            style={{ minWidth: column.minWidth }}
                          >
                            {column.label}
                          </TableCell>
                        ))}
                        <TableCell style={{ minWidth: 50 }} >
                          Opciones
                        </TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => {
                        return (
                          <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                            {DataClientes.columns.map((column) => {
                              const value = row[column.id];
                              return (
                                <TableCell key={column.id} align={column.align}>
                                  {column.format && typeof value === 'number'
                                    ? column.format(value)
                                    : value}
                                </TableCell>
                              );
                            })}
                            <TableCell>
                              <ClientesForm
                                dataForm={DataClientes.form}
                                dataValues={row}
                                dataTitle={DataClientes.titleEdit()}
                                dataIcono= {<BorderColorIcon />}
                                dataOpcion="actualizar"
                              />
                              <ClientesForm
                                dataForm={DataClientes.form}
                                dataValues={row}
                                dataTitle={DataClientes.titleDelete()}
                                dataIcono= {<DeleteIcon />}
                                dataOpcion="eliminar"
                              />
                            </TableCell>
                          </TableRow>
                        );
                      })}
                    </TableBody>
                  </Table>
                </TableContainer>
              </Paper>
            </Paper>
          </Grid>
        </Grid >
      </>
    );
  }
}


export default Clientes;