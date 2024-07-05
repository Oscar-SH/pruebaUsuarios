import React, { useState } from 'react';
import AddIcon from '@mui/icons-material/Add';
import SendIcon from '@mui/icons-material/Send';
import CmpModalForm from '../general/CmpModalForm';
import CmpUserCreate from '../forms/CmpUserCreate';
import CachedIcon from '@mui/icons-material/Cached';
import SearchIcon from '@mui/icons-material/Search';
import SearchOffIcon from '@mui/icons-material/SearchOff';
import { infoUserService } from '../../services/apiUserServices';
import { Button, Card, CardContent, IconButton, InputAdornment, Stack, TextField, Typography } from '@mui/material';

const CmpInfoUserToolBar = (rest) => {
    const [palabra, setPalabra] = useState('');
    const [openCreate, setOpenCreate] = useState(false);

    const handleClickOpen = () => {
        setOpenCreate(true);
    };

    const handleClickReload = (reload) => {
        infoUserService(!reload ? palabra : '').then((res) => {
            if (res.data) {
                rest.setData(res.data);
            }
        });
        if (reload) setPalabra('');
    };

    return (
        <Stack>
            <CmpModalForm
                open={openCreate}
                nombre={'CREAR USUARIO'}
                setOpen={setOpenCreate}
                component={CmpUserCreate}
            />
            <Card>
                <CardContent>
                    <Stack direction={'row'} justifyContent={'end'} spacing={1} alignItems={'center'}>
                        <TextField
                            size={'small'}
                            onChange={(e) => setPalabra(e.target.value.toUpperCase())}
                            label={'BUSCAR POR TIPO'}
                            value={palabra}
                            InputProps={{
                                startAdornment: (
                                    <InputAdornment position="start">
                                        <SearchIcon />
                                    </InputAdornment>
                                ),
                            }}
                            onKeyPress={(data) => {
                                if (data.charCode === 13) {
                                    handleClickReload(false);
                                }
                            }}
                        />
                        <IconButton title='ENVIAR' onClick={() => handleClickReload(false)}>
                            <SendIcon />
                        </IconButton>
                        <IconButton title='LIMPIAR' onClick={() => handleClickReload(true)}>
                            <SearchOffIcon />
                        </IconButton>
                        <Button variant={'outlined'} startIcon={<AddIcon />} onClick={handleClickOpen}>AÑADIR</Button>
                        <Button variant={'outlined'} startIcon={<CachedIcon />} onClick={handleClickReload}>ACTUALIZAR</Button>
                        <Typography variant={'h5'}>TABLA USUARIOS</Typography>
                    </Stack>
                </CardContent>
            </Card>
        </Stack>
    );
};

export default CmpInfoUserToolBar