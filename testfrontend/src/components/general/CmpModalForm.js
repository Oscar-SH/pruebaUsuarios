import React from 'react';
import { Dialog, DialogContent, DialogTitle } from '@mui/material';

const CmpModalForm = (rest) => {
    const CmpComponent = rest.component;
    const handleClose = () => {
        rest.setOpen(false);
    };

    return (
        <Dialog
            open={rest.open}
            onClose={handleClose}
            aria-describedby='modal-formato'
            keepMounted={false}
            sx={{
                '& .MuiDialog-container': {
                    '& .MuiPaper-root': {
                        width: '100%'
                    },
                },
            }}
        >
            <DialogTitle>
                {rest.nombre}
                <hr />
            </DialogTitle>
            <DialogContent>
                <CmpComponent { ...rest }/>
            </DialogContent>
        </Dialog>
    );
};

export default CmpModalForm;