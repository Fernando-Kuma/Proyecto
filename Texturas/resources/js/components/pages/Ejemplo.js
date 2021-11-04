import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import NavBar from "../menu/Navbar";
import axios from "axios";
import "bootstrap/dist/css/bootstrap.min.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import { Modal, ModalBody, ModalFooter, ModalHeader, Table } from "reactstrap";



const url = "http://127.0.0.1:8000/api/categorias/";
//const url = "http://localhost/texturas_y_muros/public/api/categorias/";

class Ejemplo extends Component {
    state = {
        data: [],
        modalInsertar: false,
        modalEliminar: false,
        form: {
            id: '',
            Nombre: ''
        }
    }

    peticionGet = () => {
        
        axios.get(url).then(response => {
            //Testing metodo get-> 
            console.log(response.data);
            this.setState({ data: response.data });
        }).catch(error => {
            console.log(error.message);
        })
    }

    peticionPost = async () => {
        //Se borra el valor de id para no insertarlo
        delete this.state.form.id;
        await axios.post(url, this.state.form).then(response => {
            this.modalInsertar();
            this.peticionGet();
        }).catch(error => {
            console.log(error.message);
        })
    }

    peticionPut = () => {
        axios.put(url + this.state.form.id, this.state.form).then(response => {
            this.modalInsertar();
            this.peticionGet();
        })
    }

    peticionDelete = () => {
        axios.delete(url + this.state.form.id).then(response => {
            this.setState({ modalEliminar: false });
            this.peticionGet();
        })
    }

    modalInsertar = () => {
        this.setState({ modalInsertar: !this.state.modalInsertar });
    }

    seleccionarCategoria = (categoria) => {
        this.setState({
            tipoModal: 'actualizar',
            form: {
                id: categoria.id,
                Nombre: categoria.Nombre
            }
        })
    }

    handleChange = async e => {
        e.persist();
        await this.setState({
            form: {
                ...this.state.form,
                [e.target.name]: e.target.value
            }
        });
        console.log(this.state.form);
    }

    componentDidMount() {
        this.peticionGet();
    }



    render() {
        const { form } = this.state;
        return (
            <div className="App">
                <NavBar />
                <div className="container">
                    <br />
                    <div className="d-grid col-3 mx-auto">
                        <button className="btn btn-success" onClick={() => { this.setState({ form: null, tipoModal: 'insertar' }); this.modalInsertar() }}>Agregar categoria</button>
                    </div>
                    <Table
                        responsive
                        size=""
                        striped
                    >
                        <thead>
                            <tr>
                                <th>
                                    Id
                                </th>
                                <th>
                                    Nombre
                                </th>
                                <th>
                                    Created_at
                                </th>
                                <th>
                                    Opciones
                                </th>
                            </tr>
                        </thead>
                        <tbody>
                            {this.state.data.map(fila => {
                                return (
                                    <tr>
                                        <td>{fila.id}</td>
                                        <td>{fila.Nombre}</td>
                                        <td>{fila.created_at}</td>
                                        <td>
                                            <button className="btn btn-primary" onClick={() => { this.seleccionarCategoria(fila); this.modalInsertar() }}><FontAwesomeIcon icon={faEdit} /></button>
                                            <button className="btn btn-danger" onClick={() => { this.seleccionarCategoria(fila); this.setState({ modalEliminar: true }) }}><FontAwesomeIcon icon={faTrashAlt} /></button>
                                        </td>
                                    </tr>
                                )
                            })}
                        </tbody>
                    </Table>


                    <Modal isOpen={this.state.modalInsertar}>
                        <ModalHeader style={{ display: 'block' }}>
                            <span style={{ float: 'right' }} onClick={() => this.modalInsertar()}>x</span>
                        </ModalHeader>
                        <ModalBody>
                            <div className="form-group">
                                <label htmlFor="id">ID</label>
                                <input className="form-control" type="text" name="id" id="id" readOnly onChange={this.handleChange} value={form?form.id: this.state.data.length+1}/>
                                <br/>
                                <label htmlFor="nombre">Nombre</label>
                                <input className="form-control" type="text" name="Nombre" id="Nombre" onChange={this.handleChange} value={form ? form.Nombre : ''} />
                            </div>
                        </ModalBody>

                        <ModalFooter>
                            {this.state.tipoModal == 'insertar' ?
                                <button className="btn btn-success" onClick={() => this.peticionPost()}>
                                    Insertar
                                </button> : <button className="btn btn-primary" onClick={() => this.peticionPut()}>
                                    Actualizar
                                </button>
                            }
                            <button className="btn btn-danger" onClick={() => this.modalInsertar()}>Cancelar</button>
                        </ModalFooter>
                    </Modal>


                    <Modal isOpen={this.state.modalEliminar}>
                        <ModalBody>
                            Estás seguro que deseas eliminar a la empresa {form && form.Nombre}
                        </ModalBody>
                        <ModalFooter>
                            <button className="btn btn-danger" onClick={() => this.peticionDelete()}>Sí</button>
                            <button className="btn btn-secundary" onClick={() => this.setState({ modalEliminar: false })}>No</button>
                        </ModalFooter>
                    </Modal>

                </div>
            </div>
        );
    }
}

export default Ejemplo;


if (document.getElementById('ejemplo')) {
    ReactDOM.render(<Ejemplo />, document.getElementById('ejemplo'));
}