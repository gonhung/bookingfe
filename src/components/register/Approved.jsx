import React, { useState } from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import WarningAmberIcon from '@mui/icons-material/WarningAmber';

const style = {
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: 400,
    bgcolor: 'background.paper',
    border: '2px solid #000',
    boxShadow: 24,
    p: 4,
};

export function Approved({ open, handleClose, data }) {
    const handleCancel = () => {
        handleClose();
    };

    const handleApproved = () => {
        handleClose();
    };
    return (
        <Modal open={open}>
            <Box sx={style} className="rounded-lg !border-transparent">
                <div className="flex justify-center">
                    <WarningAmberIcon className=" !w-20 !h-20 text-red-600" />
                </div>
                <div className="text-center my-3">
                    <h1 className="text-xl">Bạn có đồng ý xác nhận</h1>
                </div>
                <div className="flex justify-center my-3 space-x-2">
                    <button
                        onClick={handleCancel}
                        className="bg-red-600 text-white p-2 rounded-md min-w-[120px]"
                    >
                        <span className="text-lg">Thoát</span>
                    </button>
                    <button
                        onClick={handleApproved}
                        className="bg-green-600 text-white p-2 rounded-md min-w-[120px]"
                    >
                        <span className="text-lg">Xác nhận</span>
                    </button>
                </div>
            </Box>
        </Modal>
        // </div>
    );
}
