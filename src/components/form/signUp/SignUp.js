import React, { useState } from 'react';

import classes from './styles/signUp.module.scss';

import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import { useForm } from "react-hook-form";

import { useDispatch } from 'react-redux';
import { useNavigate, Link } from 'react-router-dom';
import { sendActiveAccountCodeAction } from '../../../redux/actions/UserActions';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import Loading from '../../loading/Loading';

import { RegisterAPI } from "../../../api/Auth";
import CallApi from "../../../functions/CallApi";

import backgroundImage from '../../../assets/images/background-image.png';
import logoImage from '../../../assets/images/logo-image.png';


const SignUp = () => {
    const reduxDispatch = useDispatch();
    const history = useNavigate();

    const {
        register,
        handleSubmit,
        getValues,
        watch,
        formState: { errors }
    } = useForm();

    const [loading, setLoading] = useState(false);

    const onSubmit = async data => {
        setLoading(true);
        try {
            // await CallApi(RegisterAPI(data.email, data.password, data.password_repeat));
            reduxDispatch(sendActiveAccountCodeAction(data.email));
            history('/auth/signin');
        } catch (error) {
            console.log(error);
        } finally {
            setLoading(false);
        }
    };


    return (
        <>
            {loading && <Loading />}
            <LazyLoadImage src={backgroundImage} className={classes.cover} />
            <Grid className={classes.container} container spacing={1} style={{ maxWidth: 400, margin: "0 auto", padding: "20px 5px" }}>
                <Grid container direction="column" className={classes.formLogo}>
                    <LazyLoadImage src={logoImage} className={classes.logo} />
                    <Grid container direction="column" className={classes.logoSpan}>
                        <span className={classes.iranUniversitySpan}>Iran University Of Science and Technology</span>
                        <span className={classes.departmentSpan}>Department Of international Students </span>
                    </Grid>
                </Grid>

                <Grid item xs={12} sm={6} >
                    <form className={classes.signUpForm} onSubmit={handleSubmit(onSubmit)}>
                        <div className={classes.signUpTextbox}>

                            <div className={classes.eachTextField}>
                                <div className={classes.signUpTextDiv}>
                                    <input
                                        type="text"
                                        name="email"
                                        placeholder="email "
                                        className={classes.signUpTextField}
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

                            <div className={classes.eachTextField}>
                                <div className={classes.signUpTextDiv}>
                                    <input
                                        type="text"
                                        placeholder="password"
                                        className={classes.signUpTextField}

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

                            <div className={classes.signUpTextDiv}>
                                <input
                                    type="text"
                                    placeholder="repeat password"
                                    className={classes.signUpTextField}
                                    autoComplete="current-password"
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

                        <div className={classes.signUp}>
                            <Button
                                variant="contained"
                                sx={{ width: "50%" }}
                                style={{ borderRadius: "1rem", backgroundColor: "#FF5271" }}
                                className={classes.signUpBtn}
                                type="submit"
                            >
                                <span className={classes.signUpSubmitSpan}>
                                    submit
                                </span>
                            </Button>
                        </div>

                        <div className={classes.signIn}>
                            <div className={classes.signInBtnSpan}>
                                <span className={classes.haveAccSpan}>Already have an account? </span>
                            </div>
                            <div className={classes.signInBtnDiv}>
                                <Button sx={{ width: "30%" }} className={classes.signInButton}>
                                    <Link className={classes.signInBtn} to="/auth/signin">
                                        Sign in
                                    </Link>
                                </Button>
                            </div>
                        </div>
                    </form>
                </Grid>
            </Grid>
        </>
    );
};

export default SignUp;