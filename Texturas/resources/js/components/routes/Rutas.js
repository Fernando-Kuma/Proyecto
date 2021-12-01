import React from 'react';
import {
  BrowserRouter,
  HashRouter as Router,
  Routes,
  Route,
  Link,
  Outlet
} from "react-router-dom";

import Pages from "./../pages/Index";

function Rutas() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Pages.Admin />} >
          <Route index element={<Pages.HomeAdmin />} />
          <Route path="home" element={<Pages.HomeAdmin />} />
          <Route path="usuarios" element={<Pages.Usuarios />} />
          <Route path="categorias" element={<div><h1>Categorias</h1><br/><Outlet/></div>}>
            <Route index element={<h1>Categorias</h1> } />
            <Route path="frutas" element={<h1>Frutas</h1>} />
            <Route path="verduras" element={<h1>verduras</h1>} />
          </Route>
          <Route path="clientes" element={<Pages.Clientes />} />
          <Route path="error" element={<Pages.Ejemplos />} />
          <Route path="*" element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          } />
        </Route>
      </Routes>
    </Router>
  )
}


export default Rutas;
