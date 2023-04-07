import React, { useState, useEffect } from 'react';

import classes from './styles/ThirdStep.module.scss';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';

import { useForm } from 'react-hook-form';


const Item = styled(Box)(({ theme }) => ({
    // backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    // padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const ThirdStep = ({ validateForm = false, setValidate }) => {

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
                    <Grid item xs={16}>
                        <Box sx={{ width: '100%', justifyContent: "space-between" }}>
                            <Grid className={classes.containerGrid} container columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

                                <Grid xs={12} className={classes.bioForm} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>

                                    <Grid item xs={6}>
                                        <Item>
                                            <div className={classes.formDiv}>
                                                <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>

                                                    <div style={{ display: "flex", justifyContent: "space-between", margin: "1rem 0" }}>
                                                        <label >Occupation</label>
                                                        <div className={classes.inputBox}>
                                                            <div>
                                                                <input
                                                                    className={classes.formInput}
                                                                    type="text"
                                                                    name="occupation"
                                                                    {...register("occupation",
                                                                        { required: true })}
                                                                />
                                                            </div>
                                                            <div className={classes.errorField}>
                                                                {errors.occupation && <span className={classes.errorMsg}>required</span>}
                                                            </div>
                                                        </div>
                                                    </div>

                                                    <div style={{ display: "flex", justifyContent: "space-between", margin: "1rem 0" }}>
                                                        <label >Country</label>
                                                        <input
                                                            className={classes.formInput}
                                                            type="text"
                                                            name="username"
                                                        />
                                                    </div>
                                                    <div style={{ display: "flex", justifyContent: "space-between", margin: "0.4rem 0" }}>
                                                        <label style={{ marginTop: "0.2rem" }}>From</label>
                                                        <input
                                                            className={classes.formInput}
                                                            type="text"
                                                            name="familyname"
                                                        />
                                                    </div>
                                                </form>
                                            </div>
                                        </Item>
                                    </Grid>
                                    <Grid item xs={6}>
                                        <Item>
                                            <div className={classes.formDiv}>
                                                <form className={classes.form}>

                                                    <div style={{ display: "flex", justifyContent: "space-between", margin: "1rem 0" }}>
                                                        <label >Organization</label>
                                                        <input
                                                            className={classes.formInput}
                                                            type="text"
                                                            name="username"
                                                        />
                                                    </div>
                                                    <div style={{ display: "flex", justifyContent: "space-between", margin: "1rem 0" }}>
                                                        <label >City</label>
                                                        <input
                                                            className={classes.formInput}
                                                            type="text"
                                                            name="username"
                                                        />
                                                    </div>
                                                    <div style={{ display: "flex", justifyContent: "space-between", margin: "0.4rem 0" }}>
                                                        <label style={{ marginTop: "0.2rem" }}>TO</label>
                                                        <input
                                                            className={classes.formInput}
                                                            type="text"
                                                            name="familyname"
                                                        />
                                                    </div>
                                                </form>
                                            </div>
                                        </Item>
                                    </Grid>
                                    <Grid item xs={12}>
                                        <Item>
                                            <div className={classes.textArea}>
                                                <div className={classes.textP}>

                                                    <p className={classes.p}>Please specify</p>
                                                </div>
                                                <textarea rows="4" cols="50" name="comment" form="usrform" />
                                            </div>
                                        </Item>
                                    </Grid>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid >
            </Box >
        </>
    );
};

export default ThirdStep;