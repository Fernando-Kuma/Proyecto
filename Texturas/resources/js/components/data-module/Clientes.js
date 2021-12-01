import React from 'react';

const columns = [
  { id: 'id', label: 'Id', minWidth: 50 },
  { id: 'Nombre', label: 'Nombre', minWidth: 170 },
  { id: 'Apellidos', label: 'Apellidos', minWidth: 170 },
  { id: 'Telefono', label: 'Telefono', minWidth: 100 },
  { id: 'Correo', label: 'Correo', minWidth: 170 },
];

const form = [
  { label:'Nombre(s)', id:'Nombre', type:'text'},
  { label:'Apellidos', id:'Apellidos', type:'text'},
  { label:"Telefono", id:"Telefono", type:"text"},
  { label:"Correo", id:"Correo", type:"email"},
  { label:"Contraseña", id:"Contraseña", type:"password"},
];

const valuesClientes = {
  Nombre: '',
  Apellidos: '',
  Telefono: '',
  Correo: '',
  Contraseña: '',
};

function createData(id, Nombre, Apellidos, Correo, Telefono) {
  return { id, Nombre, Apellidos, Correo, Telefono};
}


const titlePost = () => {
  return <h4 id="parent-modal-title">Creacion de cliente</h4>
}
const titleEdit = () => {
  return <h4 id="parent-modal-title">Actualizacion de cliente</h4>
}
const titleDelete = () => {
  return <h4 id="parent-modal-title">Eliminacion de cliente</h4>
}

export default {columns, createData, form, valuesClientes, titlePost, titleEdit, titleDelete}; 