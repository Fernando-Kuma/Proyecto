import * as React from 'react';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { Divider } from '@mui/material';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import FilledInput from '@mui/material/FilledInput';
import InputLabel from '@mui/material/InputLabel';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Visibility from '@mui/icons-material/Visibility';
import VisibilityOff from '@mui/icons-material/VisibilityOff';
import MenuItem from '@mui/material/MenuItem';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import Service from './../../services/Index';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    pt: 2,
    px: 4,
    pb: 3,
};

export default function UsuariosForm({ dataForm, dataTitle }) {
    const [values, setValues] = React.useState({
        
    });

    const [open, setOpen] = React.useState(false);
    const [opcion, setOpcion] = React.useState('insertar');
    const handleOpen = () => {
        setOpen(true);
    };
    const handleClose = () => {
        setOpen(false);
    };

    const handleChange = (prop) => (event) => {
        setValues({ ...values, [prop]: event.target.value });
        console.log(values);
    };
    
    const peticionPost = (values) => {
        Service.Usuarios.create(values).then(response => {
            handleClose();
            console.log(response);
            window.location.reload();
        }).catch(e => {
            console.log(e.message);
        })
    }

    return (
        <React.Fragment>
            <Button onClick={handleOpen} variant="contained" color="secondary">
                <AddCircleIcon />
                {dataTitle}
            </Button>
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box component="form" sx={{ ...style, width: 600 }} noValidate autoComplete="off">
                    <Grid container sx={{ p: '5px' }}>
                        <Grid item xs>
                            <h4 id="parent-modal-title">Creacion de: {dataTitle}</h4>
                        </Grid>
                        <Grid item>
                            <Button variant="outlined" color="error" onClick={handleClose}>
                                X
                            </Button>
                        </Grid>
                    </Grid>

                    <Divider />
                    <div>
                        {dataForm.map((fila, i) => {
                            if (fila.type == "select") {
                                return (
                                    <TextField
                                        label={fila.label} W
                                        id={fila.id}
                                        sx={{ m: 1, width: '25ch' }}
                                        value={values[i]}
                                        select
                                        variant="filled"
                                        onChange={handleChange(fila.id)}
                                        color="secondary">
                                        {fila.opc.map((text, index) => (
                                            <MenuItem key={index} value={text}>
                                                {text}
                                            </MenuItem>
                                        ))}
                                    </TextField>
                                )
                            } else {
                                return (
                                    <TextField
                                        label={fila.label}
                                        id={fila.id}
                                        sx={{ m: 1, width: '25ch' }}
                                        type={fila.type}
                                        value={values[i]}
                                        variant="filled"
                                        onChange={handleChange(fila.id)}
                                        color="secondary"
                                    />
                                )
                            }
                        })}
                    </div>
                    <Divider />

                    <Grid container sx={{ p: '10px' }}>
                        <Grid item>
                            {opcion == 'insertar'
                                ?

                                <Button variant="contained" color="success" onClick={() => peticionPost(values)}>
                                    Insertar
                                </Button>
                                :
                                <Button variant="contained" color="error" onClick={() => peticionPost(values)}>
                                    Actualizar
                                </Button>
                            }
                            <button className="btn btn-danger" onClick={handleClose}>Cancelar</button>
                        </Grid>

                    </Grid>
                </Box>
            </Modal>
        </React.Fragment>
    );
}