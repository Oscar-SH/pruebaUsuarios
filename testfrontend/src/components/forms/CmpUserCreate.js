import React, { useState } from 'react';
import { createUserService } from '../../services/apiUserServices';
import { Button, DialogActions, Stack, TextField } from '@mui/material';

const CmpUserCreate = (rest) => {
    const [newData, setNewData] = useState(rest.values);

    const handleSubmit = () => {
        createUserService(newData).then((res) =>{
            if (res.data) {
                alert('Usuario creado correctamente');
                rest.setOpen(false);
            }
        });
    };

    const handleClose = () => {
        rest.setOpen(false);
    };

    return (
        <Stack spacing={1} sx={{ mt: 1 }}>
            <TextField
                label={'ID'}
                onChange={(e) => setNewData({ ...newData, id: e.target.value })}
            />
            <TextField
                label={'CLAVE'}
                onChange={(e) => setNewData({ ...newData, key: e.target.value })}
            />
            <TextField
                label={'TIPO'}
                onChange={(e) => setNewData({ ...newData, type: e.target.value })}
            />
            <TextField
                label={'USUARIO'}
                onChange={(e) => setNewData({ ...newData, username: e.target.value })}
            />
            <TextField
                label={'NOMBRES'}
                onChange={(e) => setNewData({ ...newData, name: e.target.value })}
            />
            <TextField
                label={'PRIMER APELLIDO'}
                onChange={(e) => setNewData({ ...newData, firstname: e.target.value })}
            />
            <TextField
                label={'SEGUNDO APELLIDO'}
                onChange={(e) => setNewData({ ...newData, lastname: e.target.value })}
            />
            <TextField
                label={'CONTRASEÑA'}
                onChange={(e) => setNewData({ ...newData, password: e.target.value })}
            />
            <TextField
                label={'FECHA INICIO'}
                onChange={(e) => setNewData({ ...newData, startDate: e.target.value })}
            />
            <TextField
                label={'FECHA FIN'}
                onChange={(e) => setNewData({ ...newData, endDate: e.target.value })}
            />
            <TextField
                label={'TIEMPO'}
                onChange={(e) => setNewData({ ...newData, time: e.target.value })}
            />
            <DialogActions>
                <Button onClick={handleClose}>Cancelar</Button>
                <Button onClick={handleSubmit}>Confirmar</Button>
            </DialogActions>
        </Stack>
    );
};

export default CmpUserCreate;