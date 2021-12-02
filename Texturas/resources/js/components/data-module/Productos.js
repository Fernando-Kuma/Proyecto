import React from 'react';

const columns = [
  { id: 'id', label: 'Id', minWidth: 50 },
  { id: 'Nombre', label: 'Producto', minWidth: 170 },
  { id: 'Categoria_id', label: 'Id de Categoria', minWidth: 170 },
  { id: 'Precio_individual', label: 'Precio Unitario', minWidth: 100 },
  { id: 'Existencia', label: 'Existencias', minWidth: 170 },
];

const form = [
  { label:'Nombre', id:'Nombre', type:'text'},
  { label:'Categoria_id', id:'Categoria_id', type:'number'},
  { label:"Precio_individual", id:"Precio_individual", type:'number'},
  { label:"Existencia", id:"Existencia", type:"number"},
];

const valuesProducto = {
  Nombre: '',
  Categoria: '',
  Precio: '',
  Existencia: '',
};

function createData(id, Nombre, Categoria_id, Precio_individual, Existencia) {
  return { id, Nombre, Categoria_id, Precio_individual, Existencia};
}


const titlePost = () => {
  return <h4 id="parent-modal-title">Creacion de Producto</h4>
}
const titleEdit = () => {
  return <h4 id="parent-modal-title">Actualizacion de Producto</h4>
}
const titleDelete = () => {
  return <h4 id="parent-modal-title">Eliminacion de Producto</h4>
}

export default {columns, createData, form, valuesProducto, titlePost, titleEdit, titleDelete};