import React from 'react';
import { Link } from 'react-router-dom';
import { Alert, Button, Card, CardActions, CardContent, Stack } from '@mui/material';

const CmpNotFound = () => {
    return (
        <Stack>
            <Card>
                <CardContent>
                    <Alert>MODULO EN CONSTRUCCIÓN, DISCULPE LAS MOLESTIAS.</Alert>
                </CardContent>
                <CardActions>
                    <Button variant={'outlined'} component={Link} to={'/info'}>VOLVER A INICIO</Button>
                </CardActions>
            </Card>
        </Stack>
    );
};

export default CmpNotFound;