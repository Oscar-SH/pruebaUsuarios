import React, { useState } from 'react';
import { updateUserService } from '../../services/apiUserServices';
import { Button, DialogActions, Stack, TextField } from '@mui/material';

const CmpUserUpdate = (rest) => {
    const [newData, setNewData] = useState(rest.values);

    const handleSubmit = () => {
        updateUserService(newData).then((res) =>{
            if (res.data) {
                alert('Usuario actualizado correctamente');
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
                defaultValue={newData.id}
                onChange={(e) => setNewData({ ...newData, id: e.target.value })}
            />
            <TextField
                label={'CLAVE'}
                defaultValue={newData.key}
                onChange={(e) => setNewData({ ...newData, key: e.target.value })}
            />
            <TextField
                label={'TIPO'}
                defaultValue={newData.type}
                onChange={(e) => setNewData({ ...newData, type: e.target.value })}
            />
            <TextField
                label={'USUARIO'}
                defaultValue={newData.username}
                onChange={(e) => setNewData({ ...newData, username: e.target.value })}
            />
            <TextField
                label={'NOMBRES'}
                defaultValue={newData.name}
                onChange={(e) => setNewData({ ...newData, name: e.target.value })}
            />
            <TextField
                label={'PRIMER APELLIDO'}
                defaultValue={newData.firstname}
                onChange={(e) => setNewData({ ...newData, firstname: e.target.value })}
            />
            <TextField
                label={'SEGUNDO APELLIDO'}
                defaultValue={newData.lastname}
                onChange={(e) => setNewData({ ...newData, lastname: e.target.value })}
            />
            <TextField
                label={'CONTRASEÑA'}
                defaultValue={newData.password}
                onChange={(e) => setNewData({ ...newData, password: e.target.value })}
            />
            <TextField
                label={'FECHA INICIO'}
                defaultValue={newData.startDate}
                onChange={(e) => setNewData({ ...newData, startDate: e.target.value })}
            />
            <TextField
                label={'FECHA FIN'}
                defaultValue={newData.endDate}
                onChange={(e) => setNewData({ ...newData, endDate: e.target.value })}
            />
            <TextField
                label={'TIEMPO'}
                defaultValue={newData.time}
                onChange={(e) => setNewData({ ...newData, time: e.target.value })}
            />
            <DialogActions>
                <Button onClick={handleClose}>Cancelar</Button>
                <Button onClick={handleSubmit}>Confirmar</Button>
            </DialogActions>
        </Stack>
    );
};

export default CmpUserUpdate;