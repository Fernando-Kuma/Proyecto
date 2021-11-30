import * as React from 'react';
import List from '@mui/material/List';
import ListItem from '@mui/material/ListItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import ListItemText from '@mui/material/ListItemText';

import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import CodeIcon from '@mui/icons-material/Code';
import GroupIcon from '@mui/icons-material/Group';
import LogoutIcon from '@mui/icons-material/Logout';
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import ClassIcon from '@mui/icons-material/Class';
import LocalGroceryStoreIcon from '@mui/icons-material/LocalGroceryStore';
import PeopleIcon from '@mui/icons-material/People';
import InventoryIcon from '@mui/icons-material/Inventory';

import { Link } from "react-router-dom";
import Services from "./../../services/Index";

const listMenu = [
  { name: "Home", ruta: "home", icon: <AccountCircleIcon /> },
  { name: "Usuarios", ruta: "usuarios", icon: <GroupIcon /> },
  { name: "Categorias/Productos", ruta: "categorias", icon: <LocalGroceryStoreIcon /> },
  { name: "Inventario", ruta: "inventario", icon: <InventoryIcon /> },
  { name: "Cliente", ruta: "cliente", icon: <PeopleIcon /> },
  { name: "Venta", ruta: "venta", icon: <AttachMoneyIcon /> },
  { name: "Error", ruta: "error", icon: <CodeIcon /> },
];


export default function MenuAdmin() {

  const handleLogout = () => {
    window.localStorage.removeItem('loggedAppUser');
    Services.Global.deleteToken();
    //window.location.hostname();
    window.location.reload();
  }

  return (
    <List>
      {listMenu.map((obj) => (
        <Link to={obj.ruta} key={obj.ruta}>
          <ListItem button color="secondary">
            <ListItemIcon>
              {obj.icon}
            </ListItemIcon>
            <ListItemText primary={obj.name} />
          </ListItem>
        </Link>
      ))}
      <Link to="/" onClick={handleLogout}>
        <ListItem button  >
          <ListItemIcon>
            <LogoutIcon />
          </ListItemIcon>
          <ListItemText primary="Cerrar sesion" />
        </ListItem>
      </Link>
    </List>
  )
}