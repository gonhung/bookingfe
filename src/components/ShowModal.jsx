import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    bgcolor: 'background.paper',
    width: 400,
    boxShadow: 24,
    p: 4,
};

export function ShowModal({ open, handleClose, title }) {
    return (
        <Modal open={open}>
            <Box
                sx={style}
                className="rounded-lg !border-transparent active:border-transparent"
            >
                <div className="flex justify-center">
                    <CheckCircleIcon className=" !w-20 !h-20 text-green-600 animate-bounce" />
                </div>
                <div className="text-center my-3">
                    <h1 className="text-xl">{title}</h1>
                </div>
            </Box>
        </Modal>
        // </div>
    );
}
