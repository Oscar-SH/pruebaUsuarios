import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';
import PersonIcon from '@mui/icons-material/Person';
import LogoutIcon from '@mui/icons-material/Logout';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import { Button, Drawer, List, ListItem, ListItemButton, ListItemIcon, ListItemText, Stack } from '@mui/material';

const CmpNavBar = (rest) => {
    const CmpComponent = rest.component;
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };

    const listOptions = [
        { text: 'USUARIOS', icon: <PersonIcon />, to: '/info' },
        { text: 'CERRAR SESIÓN', icon: <LogoutIcon />, to: '/logout' },
        { text: 'MAS...', icon: <MoreHorizIcon />, to: '/more' }
    ];
    return (
        <Stack sx={{ m: 2 }} spacing={3}>
            <Stack direction={'row'} justifyContent={'space-between'}>
                <Button onClick={toggleDrawer(true)} startIcon={<MenuIcon />} variant={'outlined'}>MENÚ</Button>
                <Drawer open={open} onClose={toggleDrawer(false)}>
                    <List>
                        {listOptions.map((item, i) => (
                            <ListItem key={`list-item-${i}`} disablePadding>
                                <ListItemButton component={Link} to={item.to}>
                                    <ListItemIcon> {item.icon} </ListItemIcon>
                                    <ListItemText primary={item.text} />
                                </ListItemButton>
                            </ListItem>
                        ))}
                    </List>
                </Drawer>
            </Stack>
            <CmpComponent />
        </Stack>
    );
};

export default CmpNavBar;