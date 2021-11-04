import React from 'react';
import { Navbar, NavbarBrand, NavbarToggler, Collapse, Nav, NavItem, NavLink, NavbarText} from "reactstrap";

function  NavBar ({handleLogout }) {
  return (
      <div>
          <Navbar
              color="secondary"
              dark
              expand="md"
              full
          >
              <NavbarBrand href="#">
                  Texturas y Muros
              </NavbarBrand>
              <NavbarToggler />
              <Collapse navbar>
                  <Nav
                      className="me-auto"
                      navbar
                  >
                      <NavItem>
                          <NavLink href="/app/index">
                          Usuarios
                          </NavLink>
                      </NavItem>
                      <NavItem>
                          <NavLink href="/app/categorias">
                            categorias
                          </NavLink>
                      </NavItem>
                  </Nav>
                  <NavbarText>
                    <NavLink  onClick={handleLogout}>Cerrar sesión</NavLink >
                  </NavbarText>
              </Collapse>
          </Navbar>
      </div>
  );
};

export default NavBar;

