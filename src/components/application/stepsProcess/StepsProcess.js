import React, { useState } from "react";

import classes from './styles/StepsProcess.module.scss';

import FirstStep from '../firstStep/FirstStep';
import SecondStep from '../secondStep/SecondStep';
import ThirdStep from '../thirdStep/ThirdStep';
import FourthStep from '../fourthStep/FourthStep';
import FifthStep from '../fifthStep/FifthStep';
import SixthStep from '../sixthStep/SixthStep';
import FinalReview from "../finalReview/FinalReview";
import FinishedRegisteration from '../finishedRegisteration/FinishedRegisteration';

import Slider from '@mui/material/Slider';
import { styled } from '@mui/material/styles';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CircularProgress from '@mui/material/CircularProgress';
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';
import PanoramaFishEyeIcon from '@mui/icons-material/PanoramaFishEye';




const Item = styled(Box)(({ theme }) => ({
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


const steps = [
    {
        label: 'Step 1',
        description: `Personal Information`,
    },
    {
        label: 'Step2',
        description: 'Program request',
    },
    {
        label: 'Step 3',
        description: `Occupational background`,
    },
    {
        label: 'Step 4',
        description: `Supporting documents`,
    },
    {
        label: 'Step 5',
        description: `Supporting documents`,
    },
    {
        label: 'Step 6',
        description: `Supporting documents`,
    },
    {
        label: 'Step 7',
        description: `Final review`,
    },
];

const stepLabelIcon = ({ active = false, compelete = false }) => {
    return (
        <div>
            {active ?
                <CircularProgress className={classes.activeIcon} />
                : compelete ?
                    <CheckCircleOutlineIcon className={classes.completeIcon} />
                    :
                    <PanoramaFishEyeIcon className={classes.defaultIcon} />
            }
        </div>
    );
};


const StepsProcess = () => {

    const [activeStep, setActiveStep] = useState(0);
    const [completed, setCompleted] = useState({});
    const [sliderValue, setSliderValue] = useState(7);
    const [stepsValidate, setStepsValidate] = useState({
        0: false,
        1: false,
        2: false,
        3: false,
        4: false,
        5: false
    });
    const [finishRegister, setFinishRegister] = useState(false);

    const stepContent = (step) => {
        switch (step) {
            case 0:
                return <FirstStep setValidate={SetFalseValidateHandler} validateForm={stepsValidate[0]} />;
                break;
            case 1:
                return <SecondStep setValidate={SetFalseValidateHandler} validateForm={stepsValidate[1]} />;
                break;
            case 2:
                return <ThirdStep setValidate={SetFalseValidateHandler} validateForm={stepsValidate[2]} />;
                break;
            case 3:
                return <FourthStep setValidate={SetFalseValidateHandler} validateForm={stepsValidate[3]} />;
                break;
            case 4:
                return <FifthStep setValidate={SetFalseValidateHandler} validateForm={stepsValidate[4]} />;
                break;
            case 5:
                return <SixthStep setValidate={SetFalseValidateHandler} validateForm={stepsValidate[5]} />;
                break;
            case 6:
                return <FinalReview />;
                break;
        }
    };

    const totalSteps = () => {
        return steps.length;
    };

    const SetFalseValidateHandler = (nextStep = false) => {
        let stateValidateVariable = { ...stepsValidate };
        stateValidateVariable[activeStep] = false;
        setStepsValidate({ ...stateValidateVariable });
        if (nextStep) {
            getNextStep();
        }
    };

    const completedSteps = () => {
        return activeStep === steps.length;
    };

    const isFirstStep = () => {
        return activeStep === 0;
    }

    const isLastStep = () => {
        return activeStep === totalSteps();
    };

    const allStepsCompleted = () => {
        return completedSteps() === totalSteps() - 1;
    };

    const handleNext = () => {
        // let stateValidateVariable = { ...stepsValidate };
        // stateValidateVariable[activeStep] = true;
        // setStepsValidate({ ...stateValidateVariable });
        const newActiveStep =
            isLastStep() && !allStepsCompleted()
                ?
                steps.findIndex((step, i) => !(i in completed))
                : activeStep + 1;
        setActiveStep(newActiveStep);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setSliderValue(sliderValue - 1)
    };

    const getNextStep = () => {
        const newActiveStep =
            isLastStep() && !allStepsCompleted()
                ?
                steps.findIndex((step, i) => !(i in completed))
                : activeStep + 1;
        setActiveStep(newActiveStep);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setSliderValue(sliderValue - 1)
    }

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
        window.scrollTo({ top: 0, behavior: 'smooth' });
        setSliderValue(sliderValue + 1)
    };

    const handleComplete = () => {
        const newCompleted = completed;
        newCompleted[activeStep] = true;
        setCompleted(newCompleted);
        handleNext();
    };

    const handleFinishPage = () => {
        setFinishRegister(true)
    }

    return (
        <>
            <Box >
                <Grid container spacing={5}>
                    <Grid item xs={3.3}>
                        <Item>
                            <Stepper sx={{
                                '.MuiStepConnector-line': {
                                    visibility: "hidden"
                                }
                            }}
                                nonLinear
                                spacing={4}
                                orientation="vertical"
                                activeStep={activeStep}>

                                <Grid container direction={"row"}>
                                    <Grid item xs={1}>
                                        < Slider
                                            className={classes.sliderSteps}
                                            orientation="vertical"
                                            size="small"
                                            value={sliderValue}
                                            max={7}
                                        />
                                    </Grid>
                                    <Grid item xs={11}>
                                        {steps.map((step, index) => {
                                            const stepProps = {};
                                            const labelProps = {};

                                            return (
                                                <>
                                                    <Step key={step.label} {...stepProps}>
                                                        <Card className={`${classes.stepperCard} ${activeStep === index && classes.activeStep} ${activeStep > index && classes.compeleteStep}`} >
                                                            {console.log(labelProps)}
                                                            <StepLabel StepIconComponent={() => stepLabelIcon({
                                                                active: activeStep === index,
                                                                compelete: activeStep > index,
                                                                stepnumber: index + 1
                                                            })}  {...labelProps} style={{ marginTop: "0.2rem" }} ></StepLabel>
                                                            <div className={classes.cardContant}>
                                                                <span className={classes.stepSpan}>{step.label}</span>
                                                                <span className={classes.stepSpan}>{step.description}</span>
                                                                <Button disabled className={`${classes.stepBtn} ${activeStep === index && classes.activeStepBtn} ${activeStep > index && classes.compeleteStepBtn}`}>
                                                                    <span className={classes.stepButtonSpan}>{
                                                                        activeStep === index ? ("in progress") : activeStep > index ? ("completed") : ("pending")
                                                                    }</span>
                                                                </Button>
                                                            </div>
                                                        </Card>
                                                    </Step>
                                                </>
                                            )
                                        })}
                                    </Grid>

                                </Grid>
                            </Stepper>
                        </Item>
                    </Grid>
                    <Grid item xs={8.5}>
                        <Item>
                            {stepContent(activeStep)}


                            {isLastStep() ? (
                                <FinishedRegisteration />
                            ) : null}


                            {isLastStep() ? (
                                null
                            ) : isFirstStep() ? (
                                <Grid item xs={12} style={{ marginTop: "5rem" }}>
                                    <Item>
                                        <Button className={classes.submitButton} sx={{ width: "50%" }} onClick={handleNext}>Submit</Button>
                                    </Item>
                                </Grid>
                            ) : (
                                <Grid item xs={12} style={{ display: "flex", justifyContent: "space-between", marginTop: "5rem" }}>
                                    <div style={{ width: "50%" }} >
                                        <Button sx={{ width: "50%" }} className={classes.submitButton} onClick={handleBack}>back</Button>
                                    </div>
                                    <div style={{ width: "50%" }} >
                                        <Button type="submit" className={classes.submitButton} sx={{ width: "50%" }} onClick={handleNext}>Next</Button>
                                    </div>
                                </Grid>
                            )}
                        </Item>
                    </Grid>
                </Grid>
            </Box>

        </>
    );
};

export default StepsProcess;