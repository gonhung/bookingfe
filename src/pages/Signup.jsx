import { useState } from 'react';

import { FormRegister } from '../components/register/FormRegister';
import { PreviewRole } from '../components/register/PreviewRole';

const Signup = () => {
    const [activeStep, setActiveStep] = useState(0);

    const handleNext = () => {
        setActiveStep((pre) => pre + 1);
    };

    const handleBack = () => {
        setActiveStep((pre) => pre - 1);
    };

    const getStepContent = (stepIndex) => {
        switch (stepIndex) {
            case 0:
                return <FormRegister onNext={handleNext} />;
            case 1:
                return <PreviewRole onBack={handleBack} />;
            default:
                return null;
        }
    };

    return (
        <section className="px-5 xl:px-0">
            <div className="max-w-[1170px] mx-auto">
                <div>{getStepContent(activeStep)}</div>
            </div>
        </section>
    );
};

export default Signup;
