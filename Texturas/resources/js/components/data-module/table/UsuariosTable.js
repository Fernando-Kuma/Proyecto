import React, { Component } from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';
import Service from './../../services/Index'

const columns = [
  { id: 'id', label: 'Id', minWidth: 50 },
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'surnames', label: 'Surnames', minWidth: 170 },
  { id: 'email', label: 'Email', minWidth: 170 },
  { id: 'phone', label: 'Phone', minWidth: 100 },
  { id: 'rol', label: 'Rol', minWidth: 100 },

];

function createData(id, name, surnames, email, phone, rol) {
  return { id, name, surnames, email, phone, rol };
}



class UsuariosTable extends Component {
  state = {
    data: [],
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

    //const rows = [ createData(1, 'User', 'Admin', 'useradmin@gmail.com', '5530303030', 1) ];
    const rows = this.state.data.map(fila => createData(fila.id, fila.Nombre, fila.Apellidos, fila.email, fila.Telefono, fila.Rol_id)  );


    return (
      <Paper sx={{ width: '99%', overflow: 'hidden' }}>
        <TableContainer sx={{ maxHeight: 440 }}>
          <Table stickyHeader aria-label="sticky table">
            <TableHead>
              <TableRow>
                {columns.map((column) => (
                  <TableCell
                    key={column.id}
                    align={column.align}
                    style={{ minWidth: column.minWidth }}
                  >
                    {column.label}
                  </TableCell>
                ))}
              </TableRow>
            </TableHead>
            <TableBody>
              {rows.map((row) => {
                return (
                  <TableRow hover role="checkbox" tabIndex={-1} key={row.id}>
                    {columns.map((column) => {
                      const value = row[column.id];
                      return (
                        <TableCell key={column.id} align={column.align}>
                          {column.format && typeof value === 'number'
                            ? column.format(value)
                            : value}
                        </TableCell>
                      );
                    })}
                  </TableRow>
                );
              })}
            </TableBody>
          </Table>
        </TableContainer>
      </Paper>
    );
  }
}
export default UsuariosTable;