import React, { useState, useEffect } from 'react';

import classes from './styles/FourthStep.module.scss';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';

import { useForm } from 'react-hook-form';


const Item = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    // padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


const FourthStep = ({ validateForm = false, setValidate }) => {

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
                    <Grid item xs={16} >
                        <Box sx={{ width: '100%', justifyContent: "space-between" }}>
                            <Grid className={classes.containerGrid} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >

                                <Grid item xs={6} >
                                    <Item style={{ height: '4rem' }}>
                                        <div className={classes.title}>
                                            <p></p>
                                        </div>
                                        <Card className={classes.bioForm} style={{ height: '14.5rem' }}>
                                            <div className={classes.formDiv}>
                                                <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>

                                                    <div style={{ display: "flex", justifyContent: "space-between", margin: "2rem 0" }}>
                                                        <label style={{ marginTop: "0.2rem" }}>Curriculum Vitae</label>
                                                        <div style={{ marginLeft: "7rem" }}>
                                                            <div className={classes.inputBox}>
                                                                <div>
                                                                    <input
                                                                        className={classes.formInput}
                                                                        type="file"
                                                                        name="curriculum"
                                                                        {...register("curriculum",
                                                                            { required: true })}
                                                                    />
                                                                </div>
                                                                <div className={classes.errorField}>
                                                                    {errors.curriculum && <span className={classes.errorMsg}>required</span>}
                                                                </div>
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div style={{ display: "flex", justifyContent: "space-between", margin: "2rem 0" }}>
                                                        <label>Personal photo (JPEG Only) </label>
                                                        <div className={classes.inputBox}>
                                                            <div>
                                                                <input
                                                                    className={classes.formInput}
                                                                    type="file"
                                                                    name="personal"
                                                                    {...register("personal",
                                                                        { required: true })}
                                                                />
                                                            </div>
                                                            <div className={classes.errorField}>
                                                                {errors.personal && <span className={classes.errorMsg}>required</span>}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div style={{ display: "flex", justifyContent: "space-between", margin: "0.4rem 0" }}>
                                                        <label style={{ marginTop: "0.2rem" }}>Scan Image of valid passport </label>
                                                        <div className={classes.inputBox}>
                                                            <div>
                                                                <input
                                                                    className={classes.formInput}
                                                                    type="file"
                                                                    name="passport"
                                                                    {...register("passport",
                                                                        { required: true })}
                                                                />
                                                            </div>
                                                            <div className={classes.errorField}>
                                                                {errors.passport && <span className={classes.errorMsg}>required</span>}
                                                            </div>
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
                                        <Card className={classes.bioForm} style={{ height: '14.5rem' }}>
                                            <div className={classes.formDiv}>
                                                <form className={classes.form}>
                                                    <div className={classes.justifyForm} style={{ display: "flex", justifyContent: "space-between", margin: "2rem 0" }}>
                                                        <label>Supporting Letter</label>
                                                        <input
                                                            className={classes.formInput}
                                                            type="file"
                                                            name="username"
                                                        />
                                                    </div>
                                                    <div className={classes.justifyForm} style={{ margin: "2rem 0" }}>
                                                        <label style={{ marginTop: "0.2rem" }}>Transcripts of High school's certificate</label>
                                                        <input
                                                            className={classes.formInput}
                                                            type="file"
                                                            name="familyname"
                                                        />
                                                    </div>
                                                    <div style={{ display: "flex", justifyContent: "space-between" }}>
                                                        <label style={{ marginTop: "0.2rem" }}>Scan Image of High school's certificate</label>
                                                        <input
                                                            className={classes.formInput}
                                                            type="file"
                                                            name="familyname"
                                                        />
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

export default FourthStep;