import React, { useState, useEffect } from 'react';

import classes from './styles/SecondStep.module.scss';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import { useForm } from "react-hook-form";


const Item = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    // padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));



const SecondStep = ({ validateForm = false, setValidate }) => {


    const {
        register,
        handleSubmit,
        formState: { errors }
    } = useForm();


    const onSubmit = data => {
        alert(data);
    };


    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container columns={16} >
                    <Grid item xs={16}>
                        <Box sx={{ width: '100%', justifyContent: "space-between" }}>
                            <Grid className={classes.containerGrid} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >

                                <Grid item xs={6} >
                                    <Item style={{ height: '4rem' }}>
                                        <div className={classes.title}>
                                            <p>Program requested for admission</p>
                                        </div>
                                        <Card className={classes.bioForm} style={{ height: '16.8rem' }}>
                                            <div className={classes.formDiv}>
                                                <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>

                                                    <div style={{ display: "flex", justifyContent: "space-between", margin: "1.2rem 0" }}>
                                                        <label style={{ marginTop: "0.2rem" }}>Degree</label>
                                                        <div style={{ marginLeft: "7rem" }}>
                                                            <label for="weakRadio">weak</label>
                                                            <input
                                                                type="radio"
                                                                id="weakRadio"
                                                                name="persian"
                                                            />
                                                        </div>
                                                        <div>
                                                            <label for="femaleRadio">Good</label>
                                                            <input
                                                                type="radio"
                                                                id="femaleRadio"
                                                                name="persian"
                                                            />
                                                        </div>
                                                        <div>
                                                            <label for="excellentRadio">Excellent</label>
                                                            <input
                                                                type="radio"
                                                                id="excellentRadio"
                                                                name="persian"
                                                            />
                                                        </div>
                                                    </div>
                                                    <div className={classes.errorField} style={{ marginLeft: "9rem" }}>
                                                        {errors.degree && <span className={classes.errorMsg}>required</span>}
                                                    </div>

                                                    <div style={{ display: "flex", justifyContent: "space-between", margin: "1rem 0" }}>
                                                        <label >Faculty</label>
                                                        <div className={classes.inputBox}>
                                                            <div>
                                                                <input
                                                                    className={classes.formInput}
                                                                    type="text"
                                                                    name="faculty"
                                                                    {...register("faculty",
                                                                        { required: true })}
                                                                />
                                                            </div>
                                                            <div className={classes.errorField}>
                                                                {errors.faculty && <span className={classes.errorMsg}>required</span>}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div className={classes.errorMsgDiv}>
                                                        {errors.email && <p className={classes.errorMsg}>{errors.email.message}</p>}
                                                    </div>
                                                    <div style={{ display: "flex", justifyContent: "space-between", margin: "0.4rem 0" }}>
                                                        <label style={{ marginTop: "0.2rem" }}>Field of Study</label>
                                                        <div className={classes.inputBox}>
                                                            <div>
                                                                <input
                                                                    className={classes.formInput}
                                                                    type="text"
                                                                    name="fieldOfStudy"
                                                                    {...register("fieldOfStudy",
                                                                        { required: true })}
                                                                />
                                                            </div>
                                                            <div className={classes.errorField}>
                                                                {errors.fieldOfStudy && <span className={classes.errorMsg}>required</span>}
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
                                            <p>High School</p>
                                        </div>
                                        <Card className={classes.bioForm}>
                                            <div className={classes.formDiv}>
                                                <form className={classes.form}>
                                                    <div style={{ display: "flex", justifyContent: "space-between", margin: "0" }}>
                                                        <label>Subject (type of certificate)</label>
                                                        <input
                                                            className={classes.formInput}
                                                            type="text"
                                                            name="username"
                                                        />
                                                    </div>
                                                    <div style={{ display: "flex", justifyContent: "space-between", margin: "0.4rem 0" }}>
                                                        <label style={{ marginTop: "0.2rem" }}>Date of Graduation</label>
                                                        <input
                                                            className={classes.formInput}
                                                            type="text"
                                                            name="familyname"
                                                        />
                                                    </div>
                                                    <div style={{ display: "flex", justifyContent: "space-between", margin: "0.4rem 0" }}>
                                                        <label style={{ marginTop: "0.3rem" }}>Country</label>
                                                        <input
                                                            className={classes.formInput}
                                                            type="text"
                                                            name="username"
                                                        />
                                                    </div>
                                                    <div style={{ display: "flex", justifyContent: "space-between", margin: "0.4rem 0" }}>
                                                        <label style={{ marginTop: "0.3rem" }}>GPA</label>
                                                        <input
                                                            className={classes.formInput}
                                                            type="text"
                                                            name="username"
                                                        />
                                                    </div>
                                                    <div style={{ display: "flex", justifyContent: "space-between", margin: "0.4rem 0" }}>
                                                        <label style={{ marginTop: "0.3rem" }}>City </label>
                                                        <input
                                                            className={classes.formInput}
                                                            type="text"
                                                            name="username"
                                                        />
                                                    </div>
                                                </form>
                                            </div>
                                        </Card>
                                    </Item>
                                </Grid>

                                <Grid item xs={6}>
                                    <Item >
                                        <div className={classes.title}>
                                            <p>Master’s degree</p>
                                        </div>
                                        <Card className={classes.bioForm}>
                                            <div className={classes.formDiv}>
                                                <form className={classes.form}>
                                                    <div style={{ display: "flex", justifyContent: "space-between", margin: "0" }}>
                                                        <label>Universty</label>
                                                        <div className={classes.inputBox}>
                                                            <div>
                                                                <input
                                                                    className={classes.formInput}
                                                                    type="text"
                                                                    name="university"
                                                                    {...register("university",
                                                                        { required: true })}
                                                                />
                                                            </div>
                                                            <div className={classes.errorField}>
                                                                {errors.university && <span className={classes.errorMsg}>required</span>}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div style={{ display: "flex", justifyContent: "space-between", margin: "0.4rem 0" }}>
                                                        <label style={{ marginTop: "0.2rem" }}>Field of Study </label>
                                                        <div className={classes.inputBox}>
                                                            <div>
                                                                <input
                                                                    className={classes.formInput}
                                                                    type="text"
                                                                    name="fieldOfStudy"
                                                                    {...register("fieldOfStudy",
                                                                        { required: true })}
                                                                />
                                                            </div>
                                                            <div className={classes.errorField}>
                                                                {errors.fieldOfStudy && <span className={classes.errorMsg}>required</span>}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div style={{ display: "flex", justifyContent: "space-between", margin: "0.4rem 0" }}>
                                                        <label style={{ marginTop: "0.2rem" }}>Date of Graduation</label>
                                                        <div className={classes.inputBox}>
                                                            <div>
                                                                <input
                                                                    className={classes.formInput}
                                                                    type="text"
                                                                    name="dateOfGraduation"
                                                                    {...register("dateOfGraduation",
                                                                        { required: true })}
                                                                />
                                                            </div>
                                                            <div className={classes.errorField}>
                                                                {errors.dateOfGraduation && <span className={classes.errorMsg}>required</span>}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div style={{ display: "flex", justifyContent: "space-between", margin: "0.4rem 0" }}>
                                                        <label style={{ marginTop: "0.3rem" }}>Country</label>
                                                        <div className={classes.inputBox}>
                                                            <div>
                                                                <input
                                                                    className={classes.formInput}
                                                                    type="text"
                                                                    name="country"
                                                                    {...register("country",
                                                                        { required: true })}
                                                                />
                                                            </div>
                                                            <div className={classes.errorField}>
                                                                {errors.country && <span className={classes.errorMsg}>required</span>}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div style={{ display: "flex", justifyContent: "space-between", margin: "0.4rem 0" }}>
                                                        <label style={{ marginTop: "0.3rem" }}>GPA</label>
                                                        <div className={classes.inputBox}>
                                                            <div>
                                                                <input
                                                                    className={classes.formInput}
                                                                    type="text"
                                                                    name="gpa"
                                                                    {...register("gpa",
                                                                        { required: true })}
                                                                />
                                                            </div>
                                                            <div className={classes.errorField}>
                                                                {errors.gpa && <span className={classes.errorMsg}>required</span>}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div style={{ display: "flex", justifyContent: "space-between", margin: "0.4rem 0" }}>
                                                        <label style={{ marginTop: "0.3rem" }}>City </label>
                                                        <input
                                                            className={classes.formInput}
                                                            type="text"
                                                            name="username"
                                                        />
                                                    </div>
                                                </form>
                                            </div>
                                        </Card>
                                    </Item>
                                </Grid>

                                <Grid item xs={6}>
                                    <Item>
                                        <div className={classes.title}>
                                            <p>Bachelor’s degree</p>
                                        </div>
                                        <Card className={classes.bioForm}>
                                            <div className={classes.formDiv}>
                                                <form className={classes.form}>
                                                    <div style={{ display: "flex", justifyContent: "space-between", margin: "0" }}>
                                                        <label>Universty</label>
                                                        <div className={classes.inputBox}>
                                                            <div>
                                                                <input
                                                                    className={classes.formInput}
                                                                    type="text"
                                                                    name="university"
                                                                    {...register("university",
                                                                        { required: true })}
                                                                />
                                                            </div>
                                                            <div className={classes.errorField}>
                                                                {errors.university && <span className={classes.errorMsg}>required</span>}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div style={{ display: "flex", justifyContent: "space-between", margin: "0.4rem 0" }}>
                                                        <label style={{ marginTop: "0.2rem" }}>Field of Study </label>
                                                        <div className={classes.inputBox}>
                                                            <div>
                                                                <input
                                                                    className={classes.formInput}
                                                                    type="text"
                                                                    name="fieldOfStudy"
                                                                    {...register("fieldOfStudy",
                                                                        { required: true })}
                                                                />
                                                            </div>
                                                            <div className={classes.errorField}>
                                                                {errors.fieldOfStudy && <span className={classes.errorMsg}>required</span>}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div style={{ display: "flex", justifyContent: "space-between", margin: "0.4rem 0" }}>
                                                        <label style={{ marginTop: "0.2rem" }}>Date of Graduation</label>
                                                        <div className={classes.inputBox}>
                                                            <div>
                                                                <input
                                                                    className={classes.formInput}
                                                                    type="text"
                                                                    name="dateOfGraduation"
                                                                    {...register("dateOfGraduation",
                                                                        { required: true })}
                                                                />
                                                            </div>
                                                            <div className={classes.errorField}>
                                                                {errors.dateOfGraduation && <span className={classes.errorMsg}>required</span>}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div style={{ display: "flex", justifyContent: "space-between", margin: "0.4rem 0" }}>
                                                        <label style={{ marginTop: "0.3rem" }}>Country</label>
                                                        <div className={classes.inputBox}>
                                                            <div>
                                                                <input
                                                                    className={classes.formInput}
                                                                    type="text"
                                                                    name="country"
                                                                    {...register("country",
                                                                        { required: true })}
                                                                />
                                                            </div>
                                                            <div className={classes.errorField}>
                                                                {errors.country && <span className={classes.errorMsg}>required</span>}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div style={{ display: "flex", justifyContent: "space-between", margin: "0.4rem 0" }}>
                                                        <label style={{ marginTop: "0.3rem" }}>GPA</label>
                                                        <div className={classes.inputBox}>
                                                            <div>
                                                                <input
                                                                    className={classes.formInput}
                                                                    type="text"
                                                                    name="gpa"
                                                                    {...register("gpa",
                                                                        { required: true })}
                                                                />
                                                            </div>
                                                            <div className={classes.errorField}>
                                                                {errors.gpa && <span className={classes.errorMsg}>required</span>}
                                                            </div>
                                                        </div>
                                                    </div>
                                                    <div style={{ display: "flex", justifyContent: "space-between", margin: "0.4rem 0" }}>
                                                        <label style={{ marginTop: "0.3rem" }}>City </label>
                                                        <input
                                                            className={classes.formInput}
                                                            type="text"
                                                            name="username"
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

export default SecondStep;