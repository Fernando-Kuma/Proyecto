import React from 'react';

const columns = [
  { id: 'id', label: 'Id', minWidth: 50 },
  { id: 'Nombre', label: 'Nombre(s)', minWidth: 170 },
  { id: 'Apellidos', label: 'Apellidos', minWidth: 170 },
  { id: 'email', label: 'Correo', minWidth: 170 },
  { id: 'Telefono', label: 'Telefono', minWidth: 100 },
  { id: 'Rol_id', label: 'Rol', minWidth: 100 },
];

const form = [
  { label:'Nombre(s)', id:'Nombre', type:'text'},
  { label:'Apellidos', id:'Apellidos', type:'text'},
  { label:"Telefono", id:"Telefono", type:"text"},
  { label:"Correo", id:"email", type:"email"},
  { label:"Password", id:"password", type:"password"},
  { label:"Rol", id:"Rol_id", type:"select", opc:[1,2,3,]},
];

const valuesUsuario = {
  Nombre: '',
  Apellidos: '',
  Telefono: '',
  email: '',
  password: '',
  Rol_id: 1,
};

function createData(id, Nombre, Apellidos, email, Telefono, Rol_id) {
  return { id, Nombre, Apellidos, email, Telefono, Rol_id };
}

const titlePost = () => {
  return <h4 id="parent-modal-title">Creacion de usuario</h4>
}
const titleEdit = () => {
  return <h4 id="parent-modal-title">Actualizacion de usuario</h4>
}
const titleDelete = () => {
  return <h4 id="parent-modal-title">Eliminacion de usuario</h4>
}

export default {columns, createData, form, valuesUsuario, titlePost, titleEdit, titleDelete}; 