import React, { useState } from 'react';

import classes from './styles/ChangePass.module.scss';

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import { useForm } from 'react-hook-form';

import { LazyLoadImage } from 'react-lazy-load-image-component';

import backgroundImage from '../../../assets/images/background-image.png';
import logoImage from '../../../assets/images/logo-image.png';

const ChangePass = () => {

    const {
        register,
        handleSubmit,
        getValues,
        watch,
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
                    <form className={classes.changePassForm} onSubmit={handleSubmit(onSubmit)}>

                        <div className={classes.form}>
                            <div className={classes.changePassTextbox}>
                                <div className={classes.changePassTextDiv}>
                                    <input
                                        type="text"
                                        className={classes.changePassInputText}
                                        placeholder="enter your email address"
                                        {...register("password", {
                                            required: true,
                                            validate: {
                                                checkLength: (value) => value.length >= 6,
                                                matchPattern: (value) =>
                                                    /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/.test(value)
                                            }
                                        })}
                                    />
                                </div>
                                <div className={classes.errorMsgDiv}>
                                    {errors.password?.type === "required" && (
                                        <p className={classes.errorMsg}>Password is required.</p>
                                    )}
                                    {errors.password?.type === "checkLength" && (
                                        <p className={classes.errorMsg}>
                                            Password should be at-least 6 characters.
                                        </p>
                                    )}
                                    {errors.password?.type === "matchPattern" && (
                                        <p className={classes.errorMsg}>
                                            Password should contain at least one uppercase letter, lowercase
                                            letter, digit, and special symbol.
                                        </p>
                                    )}
                                </div>
                            </div>
                            <div className={classes.changePassTextbox}>
                                <div className={classes.changePassTextDiv}>
                                    <input
                                        type="text"
                                        className={classes.changePassInputText}
                                        placeholder="enter your email address"
                                        {...register("password_repeat", { required: true })}
                                    />
                                </div>
                                {watch("password_repeat") !== watch("password") &&
                                    getValues("password_repeat") ? (
                                    <div className={classes.errorMsgDiv}>
                                        <p className={classes.errorMsg}>password not match</p>
                                    </div>
                                ) : null}
                            </div>


                            <div className={classes.changePass}>
                                <Button
                                    variant="contained"
                                    sx={{ width: "40%" }}
                                    style={{
                                        borderRadius: "1rem",
                                        backgroundColor: "#FF5271"
                                    }}
                                    className={classes.changePassBtn}
                                    type="submit"
                                >
                                    <span className={classes.changePassSpan}>
                                        submit
                                    </span>
                                </Button>
                            </div>
                        </div>

                    </form>
                </Grid>
            </Grid>
        </>
    );
};

export default ChangePass;