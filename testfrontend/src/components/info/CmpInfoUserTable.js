import 'moment/locale/es';
import moment from 'moment';
import CmpMenuTable from '../menu/CmpMenuTable';
import React, { useEffect, useState } from 'react';
import CmpInfoUserToolBar from './CmpInfoUserToolBar';
import { infoUserService } from '../../services/apiUserServices';
import { Card, CardContent, Stack, Table, TableBody, TableCell, TableContainer, TableHead, TableRow } from '@mui/material';

const CmpInfoUserTable = () => {
    moment.locale('es');
    const [data, setData] = useState([]);
    useEffect(() => {
        infoUserService('').then((res) => {
            if (res.data) {
                setData(res.data);
            }
        });
    }, []);

    return (
        <Stack spacing={5}>
            <CmpInfoUserToolBar data={data} setData={setData} />
            <Card>
                <CardContent>
                    <TableContainer sx={{ border: 2 }}>
                        <Table stickyHeader size={'small'}>
                            <TableHead>
                                <TableRow>
                                    <TableCell />
                                    <TableCell>ID</TableCell>
                                    <TableCell>CLAVE</TableCell>
                                    <TableCell>TIPO</TableCell>
                                    <TableCell>USUARIO</TableCell>
                                    <TableCell>NOMBRE</TableCell>
                                    <TableCell>PRIMER APELLIDO</TableCell>
                                    <TableCell>SEGUNDO APELLIDO</TableCell>
                                    <TableCell>CONTRASEÑA</TableCell>
                                    <TableCell>FECHA INICIO</TableCell>
                                    <TableCell>FECHA FIN</TableCell>
                                    <TableCell>TIEMPO</TableCell>
                                    <TableCell>ESTADO</TableCell>
                                </TableRow>
                            </TableHead>
                            <TableBody>
                                {data.map((item) => (
                                    <TableRow key={item.id}>
                                        <TableCell><CmpMenuTable item={item} /></TableCell>
                                        <TableCell>{item.id}</TableCell>
                                        <TableCell>{item.key}</TableCell>
                                        <TableCell>{item.type}</TableCell>
                                        <TableCell>{item.username}</TableCell>
                                        <TableCell>{item.name}</TableCell>
                                        <TableCell>{item.firstname}</TableCell>
                                        <TableCell>{item.lastname}</TableCell>
                                        <TableCell>{item.password}</TableCell>
                                        <TableCell>{item.startDate ? moment(item.startDate).format('LLLL').toUpperCase() : ''}</TableCell>
                                        <TableCell>{item.endDate ? moment(item.endDate).format('LLLL').toUpperCase() : ''}</TableCell>
                                        <TableCell>{(item.startDate && !item.endDate) ? moment(item.startDate).startOf('minutes').fromNow().toUpperCase() : ''}</TableCell>
                                        <TableCell>{item.status}</TableCell>
                                    </TableRow>
                                ))}
                            </TableBody>
                        </Table>
                    </TableContainer>
                </CardContent>
            </Card>
        </Stack>
    );
};

export default CmpInfoUserTable;