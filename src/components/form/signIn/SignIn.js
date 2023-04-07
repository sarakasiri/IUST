import React, { useState, useRef, useEffect } from 'react';

import classes from './styles/signIn.module.scss';

import DialogContent from '@mui/material/DialogContent';

import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';

import { Box, Checkbox, Container, FormControlLabel } from '@mui/material';

import { Link, useNavigate } from 'react-router-dom';

import { useDispatch } from 'react-redux';
import { useSnackbar } from 'notistack';


import { useForm } from "react-hook-form";

import backgroundImage from '../../../assets/images/background-image.png';
import logoImage from '../../../assets/images/logo-image.png';

import { LoginAPI } from "../../../api/Auth";
import CallApi from "../../../functions/CallApi";

import { sendActiveAccountCodeAction, loginAction } from '../../../redux/actions/UserActions';

import { LazyLoadImage } from 'react-lazy-load-image-component';
import { FiberManualRecordRounded } from '@material-ui/icons';



const SignIn = () => {

    const reduxDispatch = useDispatch();
    const { enqueueSnackbar } = useSnackbar();
    const history = useNavigate();

    const [agentBtn, setAgentBtn] = useState(false);
    const [isLoading, setIsLoading] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();
    const onSubmit = data => {
        console.log(data)
    };

    // const onSubmit = async data => {
    //     setLoading(true);
    //     try {
    //         // await CallApi(RegisterAPI(data.email, data.password, data.password_repeat));
    //         reduxDispatch(sendActiveAccountCodeAction(data.email));
    //         history('/auth/signin');
    //     } catch (error) {
    //         console.log(error);
    //     } finally {
    //         setLoading(false);
    //     }
    // };

    const agentBtnHandler = () => {
        setAgentBtn(value => !value);
    };


    return (
        < >
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
                    <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                        <div className={classes.signInTextbox}>

                            <div className={classes.signInTextField}>
                                <div className={classes.signInTextDiv}>
                                    <input
                                        type="text"
                                        className={classes.signInInputText}
                                        placeholder="Username "
                                        name="firstName"
                                        {...register("firstName",
                                            { required: true, maxLength: 15 })}

                                    />
                                </div>
                                <div className={classes.errorMsgDiv}>
                                    {errors.firstName && <p className={classes.errorMsg}>username is required</p>}
                                </div>
                            </div>

                            <div >
                                <div className={classes.signInTextDiv}>
                                    <input
                                        type="text"
                                        className={classes.signInInputText}
                                        placeholder="Password"
                                        name="password"
                                        {...register("password", {
                                            required: true,
                                            validate: {
                                                checkLength: (value) => value.length >= 6,
                                                matchPattern: (value) =>
                                                    /(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?!.*\s)(?=.*[!@#$*])/.test(
                                                        value
                                                    )
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

                        </div>


                        <div className={classes.btnBox}>

                            <div className={classes.frogetPassBtn}>
                                <Link className={classes.forgetPass} to="/auth/forget_password">
                                    forget password ?
                                </Link>
                            </div>

                            <div className={classes.checkBoxBtn}>
                                <FormControlLabel label={<span className={classes.checkBox}>i'm an agent</span>} control={
                                    <Checkbox
                                        name="agentBtn"
                                        onClick={agentBtnHandler}
                                        icon={<FiberManualRecordRounded style={{ color: "#D9D9D9" }} />}
                                        checkedIcon={< FiberManualRecordRounded style={{ color: "#FF5271" }} />} />} />
                            </div>

                            {agentBtn ? (

                                <div>
                                    <form className={classes.agent}>
                                        <div className={classes.signInTextField}>
                                            <div>
                                                <input
                                                    type="text"
                                                    placeholder='Agent’s Email Adress'
                                                    className={classes.agentEmail}
                                                    name="email"
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
                                    </form>
                                    <div className={classes.agent}>
                                        <span className={classes.agentspan}>if you are an agent, enter your email address here.</span>
                                    </div>
                                </div>
                            ) : null}


                            <div className={classes.googleAccBtn}>
                                <Link className={classes.googleAcc} to="/auth/google_account">
                                    Sign in with your google account
                                </Link>
                            </div>

                        </div>
                        <div className={classes.submit}>
                            <Button
                                variant="contained"
                                size='large'
                                type="submit"
                                sx={{ width: "50%" }}
                                style={{ borderRadius: "15px", backgroundColor: "#FF5271" }}
                                className={classes.submitBtn}>

                                <span className={classes.submitSpan}>
                                    submit
                                </span>
                            </Button>
                        </div>

                        {agentBtn ? (
                            null
                        ) : (
                            <div className={classes.signUp}>
                                <div className={classes.signUpBtnSpan}>
                                    <span className={classes.dontHaveAccSpan}>Don't Have an Account?</span>
                                </div>
                                <div className={classes.signUpBtnDiv}>
                                    <Button sx={{ width: "30%" }} className={classes.signUpButton}>
                                        <Link className={classes.signUpBtn} to="/auth/signup">
                                            SignUp
                                        </Link>
                                    </Button>
                                </div>
                            </div>
                        )}
                    </form>
                </Grid>
            </Grid>
        </>
    )
}


export default SignIn;