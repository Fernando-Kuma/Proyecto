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
import CloseIcon from '@mui/icons-material/Close';
import Fingerprint from '@mui/icons-material/Fingerprint';
import DeleteIcon from '@mui/icons-material/Delete';
import BorderColorIcon from '@mui/icons-material/BorderColor';

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

const ProductosForm = ({ dataForm, dataValues, dataTitle, dataIcono, dataOpcion }) => {
    const [values, setValues] = React.useState(dataValues);
    const [open, setOpen] = React.useState(false);
    const [opcion, setOpcion] = React.useState(dataOpcion);
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
        Service.Productos.create(values).then(response => {
            handleClose();
            console.log(response);
            window.location.reload();
        }).catch(e => {
            console.log(e.message);
        })
    }
    const peticionPut = (values) => {
        Service.Productos.update(values).then(response => {
            handleClose();
            console.log(response);
            window.location.reload();
        }).catch(e => {
            console.log(e.message);
        })
    }
    const peticionDelete = (values) => {
        Service.Productos.destroy(values).then(response => {
            handleClose();
            console.log(response);
            window.location.reload();
        }).catch(e => {
            console.log(e.message);
        })
    }

    return (

        <React.Fragment>
            {
                opcion == 'insertar'
                    ?
                    <Button onClick={handleOpen} variant="contained" color="info">
                        <AddCircleIcon /> Nuevo
                    </Button>
                    :
                    opcion == 'actualizar'
                        ?
                        <IconButton onClick={handleOpen} aria-label="actions" color="warning" size="large">
                            {dataIcono}
                        </IconButton>
                        :
                        <IconButton onClick={handleOpen} aria-label="actions" color="error" size="large">
                            {dataIcono}
                        </IconButton>

            }
            <Modal
                open={open}
                onClose={handleClose}
                aria-labelledby="parent-modal-title"
                aria-describedby="parent-modal-description"
            >
                <Box component="form" sx={{ ...style, width: 600 }} noValidate autoComplete="off">
                    <Grid container sx={{ p: '5px' }}>
                        <Grid item xs>
                            {dataTitle}
                        </Grid>
                        <Grid item>
                            <IconButton size="large" aria-label="fingerprint" color="error" onClick={handleClose}>
                                <CloseIcon />
                            </IconButton>
                        </Grid>
                    </Grid>
                    <Divider />
                    <Grid sx={{ mx: 'auto', p: '2px', textAlign: 'center', }}>
                        <TextField
                            label={dataForm[0].label}
                            id={dataForm[0].id}
                            sx={{ m: 1, width: '25ch' }}
                            type={dataForm[0].type}
                            value={values.Nombre}
                            variant="filled"
                            onChange={handleChange(dataForm[0].id)}
                            color="secondary"
                        />
                        <TextField
                            label={dataForm[1].label}
                            id={dataForm[1].id}
                            sx={{ m: 1, width: '25ch' }}
                            type={dataForm[1].type}
                            value={values.Categoria_id}
                            variant="filled"
                            onChange={handleChange(dataForm[1].id)}
                            color="secondary"
                        />
                        <TextField
                            label={dataForm[2].label}
                            id={dataForm[2].id}
                            sx={{ m: 1, width: '25ch' }}
                            type={dataForm[2].type}
                            value={values.Precio_individual}
                            variant="filled"
                            onChange={handleChange(dataForm[2].id)}
                            color="secondary"
                        />
                        <TextField
                            label={dataForm[3].label}
                            id={dataForm[3].id}
                            sx={{ m: 1, width: '25ch' }}
                            type={dataForm[3].type}
                            value={values.Existencia}
                            variant="filled"
                            onChange={handleChange(dataForm[3].id)}
                            color="secondary"
                        />
                    </Grid>
                    <Divider />
                    <Grid sx={{ mx: 'auto', p: '10px', textAlign: 'center', }}>
                            {opcion == 'insertar'
                            ?
                                <Button variant="contained" color="success" onClick={() => peticionPost(values)}>
                                    Insertar
                                </Button>
                                :
                            opcion == 'actualizar'
                                ?
                                <Button variant="contained" color="info" onClick={() => peticionPut(values)}>
                                    Actualizar
                                </Button>
                                :
                                <Button variant="contained" color="warning" onClick={() => peticionDelete(values)}>
                                    Eliminar
                                </Button>
                            }
                        <button className="btn btn-danger" onClick={handleClose}>Cancelar</button>
                    </Grid>
                </Box>
            </Modal>
        </React.Fragment>
    );
}

export default ProductosForm