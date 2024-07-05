import Menu from '@mui/material/Menu';
import { Stack } from '@mui/material';
import React, { useState } from 'react';
import MenuItem from '@mui/material/MenuItem';
import MenuIcon from '@mui/icons-material/Menu';
import IconButton from '@mui/material/IconButton';
import CmpModalForm from '../general/CmpModalForm';
import CmpUserDelete from '../forms/CmpUserDelete';
import CmpUserUpdate from '../forms/CmpUserUpdate';

const CmpMenuTable = (res) => {
    const [anchorEl, setAnchorEl] = useState(null);
    const open = Boolean(anchorEl);
    const [openUpdate, setOpenUpdate] = useState(false);
    const [openDelete, setOpenDelete] = useState(false);
    const handleClick = (event) => {
        setAnchorEl(event.currentTarget);
    };

    const handleClickUpdate = () => {
        setOpenUpdate(true);
    };

    const handleClickDelete = () => {
        setOpenDelete(true);
    };

    const handleClose = () => {
        setAnchorEl(null);
    };

    return (
        <Stack>
            <CmpModalForm
                open={openUpdate}
                nombre={'EDITAR USUARIO'}
                setOpen={setOpenUpdate}
                component={CmpUserUpdate}
                values={res.item}
            />
            <CmpModalForm
                open={openDelete}
                nombre={'ELIMINAR USUARIO'}
                setOpen={setOpenDelete}
                component={CmpUserDelete}
                values={res.item}
            />
            <IconButton
                onClick={handleClick}
                aria-haspopup={'true'}
                aria-expanded={open ? 'true' : undefined}
                aria-controls={open ? 'long-menu' : undefined}
            >
                <MenuIcon />
            </IconButton>
            <Menu
                open={open}
                anchorEl={anchorEl}
                onClose={handleClose}
                MenuListProps={{ 'aria-labelledby': 'long-button' }}
            >
                <MenuItem onClick={handleClickUpdate}>
                    EDITAR
                </MenuItem>
                <MenuItem onClick={handleClickDelete}>
                    ELIMINAR
                </MenuItem>
            </Menu>
        </Stack>
    );
};

export default CmpMenuTable