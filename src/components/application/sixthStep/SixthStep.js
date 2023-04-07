import React, { useState, useEffect } from 'react';

import classes from './styles/SixthStep.module.scss';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { useForm } from 'react-hook-form';


const Item = styled(Box)(({ theme }) => ({
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const SixthStep = ({ validateForm = false, setValidate }) => {

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
                <Grid container columns={16} >
                    <Grid item xs={16} >
                        <Box >

                            <Grid xs={12} className={classes.bioForm} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

                                <Grid item xs={12}>
                                    <Item>
                                        <div style={{ display: "flex", justifyContent: "space-around", margin: "1.5rem 0" }}>
                                            <div >
                                                <input
                                                    type="checkbox"
                                                    id="certifyInfo"
                                                    name="certifyInfo"
                                                    {...register("certifyInfo",
                                                        { required: true })}
                                                />
                                                <label for="certifyInfo" >I hereby certify that the above information is true and accurate </label>
                                            </div>
                                            <div className={classes.errorField}>
                                                {errors.certifyInfo && <span className={classes.errorMsg}>required</span>}
                                            </div>
                                        </div>
                                    </Item>
                                </Grid>
                                <Grid item xs={6} >
                                    <Item >
                                        <div className={classes.formDiv}>
                                            <form className={classes.form}>

                                                <div style={{ display: "flex", justifyContent: "space-between", }}>
                                                    <label style={{ marginTop: "0.3rem" }} >Applicant’s full name</label>
                                                    <div className={classes.inputBox}>
                                                        <div>
                                                            <input
                                                                className={classes.formInput}
                                                                type="text"
                                                                name="fullName"
                                                                {...register("fullName",
                                                                    { required: true })}
                                                            />
                                                        </div>
                                                        <div className={classes.errorField}>
                                                            {errors.fullName && <span className={classes.errorMsg}>required</span>}
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </Item>
                                </Grid>
                                <Grid item xs={6}>
                                    <Item>
                                        <div className={classes.formDiv}>
                                            <form className={classes.form}>

                                                <div style={{ display: "flex", justifyContent: "space-between", }}>
                                                    <label style={{ marginTop: "0.3rem" }} >Date of application </label>
                                                    <div className={classes.inputBox}>
                                                        <div>
                                                            <input
                                                                className={classes.formInput}
                                                                type="text"
                                                                name="dateOfApp"
                                                                {...register("dateOfApp",
                                                                    { required: true })}
                                                            />
                                                        </div>
                                                        <div className={classes.errorField}>
                                                            {errors.dateOfApp && <span className={classes.errorMsg}>required</span>}
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </Item>
                                </Grid>

                                <Grid item xs={12} >
                                    <Item>
                                        <div className={classes.textArea}>
                                            <div className={classes.textP}>
                                                <p className={classes.p}>Comments</p>
                                            </div>
                                            <textarea
                                                rows="4"
                                                cols="10"
                                                name="comment"
                                                form="usrform"
                                            />
                                        </div>
                                    </Item>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid >
            </Box >
        </>
    );
};

export default SixthStep;