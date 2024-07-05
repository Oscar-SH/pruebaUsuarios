import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { validateUserService } from '../../services/apiUserServices';
import { Card, CardContent, Stack, TextField, Typography, Button, CardActions, CardMedia } from '@mui/material';

const CmpLogin = () => {
    const [validate, setValidate] = useState(null);
    const [userData, setUserData] = useState({
        username: '',
        password: ''
    });

    const handleClickLogin = () => {
        if (userData.username.length === 0) {
            alert('Campo de usuario vacio');
        } else if (userData.password.length === 0) {
            alert('Campo de contraseña vacio');
        } else {
            validateUserService(userData).then((res) => {
                if (res.data) {
                    alert('Usuario correcto, pulse click en ingresar para continuar');
                    setValidate(res.data)
                } else {
                    alert('Usuario incorrecto');
                }
            });
        }
    };

    return (
        <Stack direction={'row'} justifyContent={'center'} sx={{ py: '10%', backgroundColor: 'gray' }}>
            <Card sx={{ maxWidth: 500 }} component={'form'}>
                <Stack direction={'row'} justifyContent={'center'} sx={{ mt: 2 }}>
                    <CardMedia
                        component={'img'}
                        sx={{ width: 151 }}
                        image={'/user.png'}
                        alt={'Live from space album cover'}
                    />
                </Stack>
                <CardContent>
                    <Stack spacing={2}>
                        <Typography variant={'h4'} textAlign={'center'} color={'blue'}>
                            <b>LOGIN</b>
                        </Typography>
                        <TextField
                            size={'small'}
                            label={'Username'}
                            onChange={(e) => setUserData({ ...userData, username: e.target.value })}
                        />
                        <TextField
                            size={'small'}
                            label={'Password'}
                            onChange={(e) => setUserData({ ...userData, password: e.target.value })}
                        />
                    </Stack>
                </CardContent>
                <Stack direction={'row'} justifyContent={'center'}>
                    <CardActions>
                        {validate ?
                            <Button color={'primary'} variant={'outlined'} component={Link} to='/api/info'>
                                Ingresar
                            </Button>
                            :
                            <Button color={'primary'} variant={'outlined'} onClick={handleClickLogin}>
                                Verificar
                            </Button>
                        }
                    </CardActions>
                </Stack>
            </Card>
        </Stack>
    );
}

export default CmpLogin