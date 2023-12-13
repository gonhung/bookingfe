import React, { useEffect, useState } from 'react';
import ArrowBackIcon from '@mui/icons-material/ArrowBack';
import { Approved } from './Approved';
import { Overlap } from '../Overlap';

const IRole = {
    DOCTOR: 'DOCTOR',
    PATIENT: 'PATIENT',
};

export function PreviewRole({ onBack }) {
    const [open, setOpen] = useState(false);
    const [role, setRole] = useState('');
    const [overlap, setOverlap] = useState(true);

    const handleOpen = (data) => {
        setOpen(true);
        setRole(data);
    };
    const handleClose = () => setOpen(false);

    const handleBack = () => {
        onBack();
    };

    useEffect(() => {
        let overlapTimeout = setTimeout(() => {
            setOverlap(false);
        }, 1000);

        return () => clearTimeout(overlapTimeout);
    }, []);

    return (
        <div>
            <Overlap loading={overlap} />
            {/* <div
                onClick={handleBack}
                className="inline-flex space-x-3 hover:underline hover:cursor-pointer"
            >
                <ArrowBackIcon />
                <span>Trờ về</span>
            </div> */}
            {overlap ? (
                <></>
            ) : (
                <div className="flex-col">
                    <div className="text-center my-3 ">
                        <h1 className="text-3xl">Bạn là</h1>
                    </div>
                    <div className="my-3">
                        <div className="flex justify-center items-center space-x-2 text-white">
                            <div className="mx-2">
                                <button
                                    onClick={() => handleOpen(IRole.DOCTOR)}
                                    className="bg-green-700 p-3 rounded-lg"
                                >
                                    <span className="text-lg p-2">Bác sỹ</span>
                                </button>
                            </div>
                            <div className="mx-2">
                                <button
                                    onClick={() => handleOpen(IRole.PATIENT)}
                                    className="bg-red-700 p-3 rounded-lg"
                                >
                                    <span className="text-lg p-2">
                                        Bệnh nhân
                                    </span>
                                </button>
                            </div>
                        </div>
                    </div>
                    <Approved
                        open={open}
                        handleClose={handleClose}
                        data={role}
                    />
                </div>
            )}
        </div>
    );
}
