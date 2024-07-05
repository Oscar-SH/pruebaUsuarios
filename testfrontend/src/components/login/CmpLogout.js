import React from 'react';
import { Link } from 'react-router-dom';
import { logoutUserService } from '../../services/apiUserServices';
import { Alert, Button, Card, CardActions, CardContent, Stack } from '@mui/material';

const CmpLogout = () => {
    const handleLogout = () => {
        logoutUserService().then((res) => {
            if (res.data) {
                alert('Saliste del sistema');
            }
        });
    };
    return (
        <Stack>
            <Card>
                <CardContent>
                    <Alert severity={'warning'}>¿ESTÁ SEGURO QUE DESEA SALIR DEL SISTEMA?</Alert>
                </CardContent>
                <CardActions>
                    <Button variant={'outlined'} onClick={handleLogout} component={Link} to={'/login'}>CONFIRMAR</Button>
                </CardActions>
            </Card>
        </Stack>
    );
};

export default CmpLogout;