import React from 'react';
import { deleteUserService } from '../../services/apiUserServices';
import { Alert, Button, DialogActions, Stack } from '@mui/material';

const CmpUserDelete = (rest) => {

    const handleSubmit = () => {
        deleteUserService(rest.values.id).then((res) =>{
            if (res.data) {
                alert('Usuario eliminado correctamente');
                rest.setOpen(false);
            }
        });
    };

    const handleClose = () => {
        rest.setOpen(false);
    };

    return (
        <Stack spacing={1} sx={{ mt: 1 }}>
            <Alert severity={'warning'}>¿ESTÁ SEGURO QUE DESEA ELIMINAR EL REGISTRO?</Alert>
            <DialogActions>
                <Button onClick={handleClose}>Cancelar</Button>
                <Button onClick={handleSubmit}>Confirmar</Button>
            </DialogActions>
        </Stack>
    );
};

export default CmpUserDelete;