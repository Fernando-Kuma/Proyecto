import React from 'react';
import {
  BrowserRouter as Router,
  HashRouter,
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
        <Route path="app" element={<Pages.Admin />} >
          <Route index element={<Pages.HomeAdmin />} />
          <Route path="home" element={<Pages.HomeAdmin />} />
          <Route path="usuarios" element={<Pages.UsuariosAdmin />} />
          <Route path="*" element={
            <main style={{ padding: "1rem" }}>
              <p>There's nothing here!</p>
            </main>
          } />
        </Route>
        <Route path="signin" element={<Pages.SignIn />} />
      </Routes>
    </Router>
  )
}


export default Rutas;
