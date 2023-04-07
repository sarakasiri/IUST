import React, { useState } from 'react';

import classes from './styles/googleAcc.module.scss';

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import { useForm } from "react-hook-form";

import { LazyLoadImage } from 'react-lazy-load-image-component';

import backgroundImage from '../../../assets/images/background-image.png';
import logoImage from '../../../assets/images/logo-image.png';

const GoogleAcc = () => {

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    const onSubmit = data => {
        console.log(data)
    };

    return (
        <>
            <LazyLoadImage src={backgroundImage} className={classes.cover} />
            <Grid className={classes.container} container style={{ maxWidth: 400, margin: "0 auto", padding: "20px 5px" }}>
                <Grid container direction="column" className={classes.formLogo}>
                    <LazyLoadImage src={logoImage} className={classes.logo} />
                    <Grid container direction="column" className={classes.logoSpan}>
                        <span className={classes.iranUniversitySpan}>Iran University Of Science and Technology</span>
                        <span className={classes.departmentSpan}>Department Of international Students </span>
                    </Grid>
                </Grid>

                <Grid item xs={12} sm={6} >
                    <form className={classes.googleAccForm} onSubmit={handleSubmit(onSubmit)}>

                        <div className={classes.googleAccTextbox}>
                            <div className={classes.googleAccTextDiv}>
                                <input
                                    type="text"
                                    className={classes.googleAccInputText}
                                    placeholder="enter your email address"
                                    {...register("email", {
                                        required: "Email is required.",
                                        pattern: {
                                            value: /^[^@ ]+@[^@ ]+\.[^@ .]{2,}$/,
                                            message: "Email is not valid."
                                        }
                                    })}
                                />
                            </div>
                            <div className={classes.errorMsgDiv}>
                                {errors.email && <p className={classes.errorMsg}>{errors.email.message}</p>}
                            </div>
                        </div>

                        <div className={classes.signIn}>
                            <Button
                                variant="contained"
                                sx={{ width: "45%" }}
                                style={{
                                    borderRadius: "1rem",
                                    backgroundColor: "#FF5271"
                                }}
                                className={classes.signInBtn}
                                type="submit"
                            >
                                <span className={classes.signInSpan}>
                                    sign in
                                </span>
                            </Button>
                        </div>

                    </form>
                </Grid>
            </Grid>
        </>
    );
};

export default GoogleAcc;