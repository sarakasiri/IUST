import React, { useState, useEffect } from 'react';

import classes from './styles/FifthStep.module.scss';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';

import { useForm } from 'react-hook-form';


const Item = styled(Box)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


const FifthStep = ({ validateForm = false, setValidate }) => {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();

    const onSubmit = data => {
        console.log(data)
    };

    useEffect(() => {
        if (validateForm) {
            console.log("validation...");

            setValidate(true);
        }
    }, [validateForm])

    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container columnSpacing={8} columns={16} >
                    <Grid item xs={16}>
                        <Box sx={{ width: '100%', justifyContent: "space-between" }}>
                            <Grid className={classes.containerGrid} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >

                                <Grid item xs={6} >
                                    <Item style={{ height: '4rem' }}>
                                        <div className={classes.title}>
                                            <p></p>
                                        </div>
                                        <Card className={classes.bioForm} style={{ height: "9.2rem" }}>
                                            <div className={classes.formDiv}>
                                                <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>


                                                    <div className={classes.title} style={{ display: "flex", flexDirection: "column", }}>
                                                        <label className={classes.title} >Self Support</label>
                                                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", marginTop: "1.1rem" }}>
                                                            <div>

                                                                <label for="yesRadio">Yes</label>
                                                                <input
                                                                    type="radio"
                                                                    id="yesRadio"
                                                                    name="radioOne"
                                                                    {...register("selfSupport",
                                                                        { required: true })}
                                                                />
                                                            </div>
                                                            <div>

                                                                <label for="noRadio">No</label>
                                                                <input
                                                                    type="radio"
                                                                    id="noRadio"
                                                                    name="radioOne"
                                                                    {...register("selfSupport",
                                                                        { required: true })}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className={classes.errorField} style={{ marginLeft: "9.5rem" }}>
                                                            {errors.selfSupport && <span className={classes.errorMsg}>required</span>}
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </Card>
                                    </Item>
                                </Grid>

                                <Grid item xs={6}>
                                    <Item >
                                        <div className={classes.title}>
                                            <p></p>
                                        </div>
                                        <Card className={classes.bioForm} >
                                            <div className={classes.formDiv}>
                                                <form className={classes.form}>

                                                    <div className={classes.title} style={{ display: "flex", flexDirection: "column", }}>
                                                        <label className={classes.title} >Do you hold any Governmental / Institutional Scholarship for the applied program?</label>
                                                        <div style={{ display: "flex", flexDirection: "row", justifyContent: "space-evenly", marginTop: "1.1rem" }}>
                                                            <div>

                                                                <label for="yesRadio">Yes</label>
                                                                <input
                                                                    type="radio"
                                                                    id="yesRadio"
                                                                    name="radioTwo"
                                                                    {...register("financialStatus",
                                                                        { required: true })}
                                                                />
                                                            </div>
                                                            <div>

                                                                <label for="noRadio">No</label>
                                                                <input
                                                                    type="radio"
                                                                    id="noRadio"
                                                                    name="radioTwo"
                                                                    {...register("financialStatus",
                                                                        { required: true })}
                                                                />
                                                            </div>
                                                        </div>
                                                        <div className={classes.errorField} style={{ marginLeft: "9.5rem" }}>
                                                            {errors.financialStatus && <span className={classes.errorMsg}>required</span>}
                                                        </div>
                                                    </div>
                                                </form>
                                            </div>
                                        </Card>
                                    </Item>
                                </Grid>

                            </Grid>
                        </Box>
                    </Grid>
                </Grid>
            </Box >
        </>
    );
};

export default FifthStep;