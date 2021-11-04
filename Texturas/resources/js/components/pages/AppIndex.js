import React, { Component } from 'react';
import ReactDOM from 'react-dom';

import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Modal, ModalBody, ModalFooter, ModalHeader, Table } from "reactstrap";

import userService from "./../services/usuarios";


const url = "http://127.0.0.1:8000/api/auth";
//const url = "http://localhost/texturas_y_muros/public/api/auth";

  
class AppIndex extends Component {
    state = {
        data: []
    }
   
    peticionGet = () => {
        userService.getAllMe().then(response => {
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
    /**
     
     */

     
     


    render() {
        return (
            <div>
                <div className="container">
                    <br />
                    <div className="d-grid col-4 mx-auto">
                        <h3> Datos de usuario activo </h3>
                    </div>
                    <Table
                        responsive
                        size=""
                        striped
                    >
                        <thead>
                            <tr>
                                <th>Perfil</th>
                            </tr>
                        </thead>

                        {this.state.data.map(fila => {
                            return (
                                <tbody>
                                    <tr>
                                        <th scope="row">Nombre</th>
                                        <td>{fila.Nombre}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Apellidos</th>
                                        <td>{fila.Apellidos}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Correo</th>
                                        <td>{fila.Correo}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Telefono</th>
                                        <td>{fila.Telefono}</td>
                                    </tr>
                                    <tr>
                                        <th scope="row">Rol</th>
                                        <td>{fila.Rol_id}</td>
                                    </tr>
                                </tbody>
                            )
                        })}

                    </Table>
                </div>
            </div>
        );
    }
}

export default AppIndex;


if (document.getElementById('appIndex')) {
    ReactDOM.render(<AppIndex />, document.getElementById('appIndex'));
}