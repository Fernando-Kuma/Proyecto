import React from 'react';

const columns = [
  { id: 'id', label: 'Id', minWidth: 50 },
  { id: 'name', label: 'Name', minWidth: 170 },
  { id: 'surnames', label: 'Surnames', minWidth: 170 },
  { id: 'email', label: 'Email', minWidth: 170 },
  { id: 'phone', label: 'Phone', minWidth: 100 },
  { id: 'rol', label: 'Rol', minWidth: 100 },
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
  email: '',
  password: '',
  Telefono: null,
  Rol_id: 1,
};

function createData(id, name, surnames, email, phone, rol) {
  return { id, name, surnames, email, phone, rol };
}

export default {columns, createData, form, valuesUsuario}; 