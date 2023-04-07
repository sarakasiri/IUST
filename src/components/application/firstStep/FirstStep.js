import React, { useState, useEffect } from 'react';

import classes from './styles/FirstStep.module.scss';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';

import { useForm } from 'react-hook-form';



const Item = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const FirstStep = ({ validateForm = false, setValidate }) => {

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
        <Box sx={{ flexGrow: 1 }}>
            <Grid container columns={12} >
                <Grid item xs={12}>
                    <Box sx={{ width: '100%', justifyContent: "space-between" }}>
                        <Grid className={classes.containerGrid} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >

                            <Grid item xs={6}>
                                <Item >
                                    <div className={classes.title}>
                                        <p>Biographical information </p>
                                    </div>
                                    <Card className={classes.bioForm}>
                                        <div className={classes.formDiv}>
                                            <form className={classes.form}>
                                                <div style={{ display: "flex", justifyContent: "space-between", margin: "0.4rem 0" }}>
                                                    <label>Name</label>
                                                    <div className={classes.inputBox}>
                                                        <div>
                                                            <input
                                                                className={classes.formInput}
                                                                type="text"
                                                                name="firstName"
                                                                {...register("firstName",
                                                                    { required: true })}
                                                            />
                                                        </div>
                                                        <div className={classes.errorField}>
                                                            {errors.firstName && <span className={classes.errorMsg}>required</span>}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div style={{ display: "flex", justifyContent: "space-between", margin: "0.4rem 0" }}>
                                                    <label style={{ marginTop: "0.2rem" }}>Family name</label>
                                                    <div className={classes.inputBox}>
                                                        <div>
                                                            <input
                                                                className={classes.formInput}
                                                                type="text"
                                                                name="familyName"
                                                                {...register("familyName",
                                                                    { required: true })}
                                                            />
                                                        </div>
                                                        <div className={classes.errorField}>
                                                            {errors.familyName && <span className={classes.errorMsg}>required</span>}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div style={{ display: "flex", justifyContent: "space-between", margin: "0.4rem 0" }}>
                                                    <label style={{ marginTop: "0.3rem" }}>Date of Birth</label>
                                                    <div className={classes.inputBox}>
                                                        <div>
                                                            <input
                                                                className={classes.formInput}
                                                                type="text"
                                                                name="dateOfBirth"
                                                                {...register("dateOfBirth",
                                                                    { required: true })}
                                                            />
                                                        </div>
                                                        <div className={classes.errorField}>
                                                            {errors.dateOfBirth && <span className={classes.errorMsg}>required</span>}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div style={{ display: "flex", justifyContent: "space-between", margin: "0.4rem 0" }}>
                                                    <label style={{ marginTop: "0.2rem" }}>Gender</label>
                                                    <div className={classes.radioItem}>
                                                        <label for="maleRadio">male</label>
                                                        <input
                                                            type="radio"
                                                            id="maleRadio"
                                                            name="gender"
                                                            {...register("gender",
                                                                { required: true })}
                                                        />

                                                    </div>
                                                    <div>
                                                        <label for="femaleRadio">Female</label>
                                                        <input
                                                            type="radio"
                                                            id="femaleRadio"
                                                            name="gender"
                                                            {...register("gender",
                                                                { required: true })}
                                                        />
                                                    </div>
                                                </div>
                                                <div className={classes.errorField} style={{ marginLeft: "9.5rem" }}>
                                                    {errors.gender && <span className={classes.errorMsg}>required</span>}
                                                </div>
                                            </form>
                                        </div>
                                    </Card>
                                </Item>
                            </Grid>

                            <Grid item xs={6}>
                                <Item >
                                    <div className={classes.title}>
                                        <p>Languages</p>
                                    </div>
                                    <Card className={classes.bioForm}>
                                        <div className={classes.formDiv}>
                                            <form className={classes.form}>
                                                <div style={{ display: "flex", justifyContent: "space-between", margin: "0.4rem 0" }}>
                                                    <label>Mother Tongue </label>
                                                    <input
                                                        className={classes.formInput}
                                                        type="text"
                                                        name="username"
                                                    />
                                                </div>
                                                <div style={{ display: "flex", justifyContent: "space-between", margin: "0.4rem 0" }}>
                                                    <label style={{ marginTop: "0.2rem" }}>Other languages </label>
                                                    <input
                                                        className={classes.formInput}
                                                        type="text"
                                                        name="familyname"
                                                    />
                                                </div>
                                                <div style={{ display: "flex", justifyContent: "space-between", margin: "0.4rem 0" }}>
                                                    <label style={{ marginTop: "0.2rem" }}>English</label>
                                                    <div style={{ marginLeft: "3.6rem" }}>
                                                        <label for="weakRadio">weak</label>
                                                        <input
                                                            type="radio"
                                                            id="weakRadio"
                                                            name="english"
                                                            {...register("english",
                                                                { required: true })}
                                                        />
                                                    </div>
                                                    <div>
                                                        <label for="goodRadio">Good</label>
                                                        <input
                                                            type="radio"
                                                            id="goodRadio"
                                                            name="english"
                                                            {...register("english",
                                                                { required: true })}
                                                        />
                                                    </div>
                                                    <div>
                                                        <label for="excellentRadio">Excellent</label>
                                                        <input
                                                            type="radio"
                                                            id="excellentRadio"
                                                            name="english"
                                                            {...register("english",
                                                                { required: true })}
                                                        />
                                                    </div>
                                                </div>
                                                <div className={classes.errorField} style={{ marginLeft: "9rem" }}>
                                                    {errors.english && <span className={classes.errorMsg}>required</span>}
                                                </div>

                                                <div style={{ display: "flex", justifyContent: "space-between", margin: "0.4rem 0" }}>
                                                    <label style={{ marginTop: "0.2rem" }}>Persian</label>
                                                    <div style={{ marginLeft: "3.7rem" }}>
                                                        <label for="weakRadio">weak</label>
                                                        <input
                                                            type="radio"
                                                            id="weakRadio"
                                                            name="persian"
                                                            {...register("persian",
                                                                { required: true })}
                                                        />
                                                    </div>
                                                    <div>
                                                        <label for="femaleRadio">Good</label>
                                                        <input
                                                            type="radio"
                                                            id="goodRadio"
                                                            name="persian"
                                                            {...register("persian",
                                                                { required: true })}
                                                        />
                                                    </div>
                                                    <div>
                                                        <label for="excellentRadio">Excellent</label>
                                                        <input
                                                            type="radio"
                                                            id="excellentRadio"
                                                            name="persian"
                                                            {...register("persian",
                                                                { required: true })}
                                                        />
                                                    </div>
                                                </div>
                                                <div className={classes.errorField} style={{ marginLeft: "9rem" }}>
                                                    {errors.persian && <span className={classes.errorMsg}>required</span>}
                                                </div>
                                            </form>
                                        </div>
                                    </Card>
                                </Item>
                            </Grid>

                            <Grid item xs={6}>
                                <Item >
                                    <div className={classes.title}>
                                        <p>National Information </p>
                                    </div>
                                    <Card className={classes.bioForm}>
                                        <div className={classes.formDiv}>
                                            <form className={classes.form}>
                                                <div style={{ display: "flex", justifyContent: "space-between", margin: "0.4rem 0" }}>
                                                    <label>Nationality </label>
                                                    <input
                                                        className={classes.formInput}
                                                        type="text"
                                                    />
                                                </div>
                                                <div style={{ display: "flex", justifyContent: "space-between", margin: "0.4rem 0" }}>
                                                    <label style={{ marginTop: "0.2rem" }}>Country</label>
                                                    <div className={classes.inputBox} >
                                                        <div>
                                                            <input
                                                                className={classes.formInput}
                                                                type="text"
                                                                name="country"
                                                                {...register("country",
                                                                    { required: true })}
                                                            />
                                                        </div>
                                                        <div className={classes.errorField} style={{ display: 'flex', justifyContent: 'flex-start' }}>
                                                            {errors.country && <span style={{ fontFamily: "Abyssinica SIL", color: "red", paddingLeft: "1nprem" }} className={classes.errorMsg}>required</span>}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div style={{ display: "flex", justifyContent: "space-between", margin: "0.4rem 0" }}>
                                                    <label style={{ marginTop: "0.3rem" }}>Country Code </label>
                                                    <input
                                                        className={classes.formInput}
                                                        type="text"
                                                    />
                                                </div>
                                                <div style={{ display: "flex", justifyContent: "space-between", margin: "0.4rem 0" }}>
                                                    <label style={{ marginTop: "0.3rem" }}>Postal Code</label>
                                                    <input
                                                        className={classes.formInput}
                                                        type="text"
                                                    />
                                                </div>
                                                <div style={{ display: "flex", justifyContent: "space-between", margin: "0.4rem 0" }}>
                                                    <label style={{ marginTop: "0.3rem" }}>City </label>
                                                    <input
                                                        className={classes.formInput}
                                                        type="text"
                                                    />
                                                </div>
                                                <div style={{ display: "flex", justifyContent: "space-between", margin: "0.4rem 0" }}>
                                                    <label style={{ marginTop: "0.3rem" }}>City Code</label>
                                                    <div className={classes.inputBox}>
                                                        <div>
                                                            <input
                                                                className={classes.formInput}
                                                                type="text"
                                                                name="cityCode"
                                                                {...register("cityCode",
                                                                    { required: true })}
                                                            />
                                                        </div>
                                                        <div className={classes.errorField}>
                                                            {errors.cityCode && <span className={classes.errorMsg}>required</span>}
                                                        </div>
                                                    </div>
                                                </div>
                                            </form>
                                        </div>
                                    </Card>
                                </Item>
                            </Grid>

                            <Grid item xs={6}>
                                <Item>
                                    <div className={classes.title}>
                                        <p>Contact Information</p>
                                    </div>
                                    <Card className={classes.bioForm}>
                                        <div className={classes.formDiv}>
                                            <form className={classes.form} onSubmit={handleSubmit(onSubmit)}>
                                                <div style={{ display: "flex", justifyContent: "space-between", margin: "0.4rem 0" }}>
                                                    <label>Email Address</label>
                                                    <div className={classes.inputBox}>
                                                        <div>
                                                            <input
                                                                className={classes.formInput}
                                                                type="text"
                                                                name="username"
                                                                {...register("email",
                                                                    { required: true })}
                                                            />
                                                        </div>
                                                        <div className={classes.errorField}>
                                                            {errors.email && <span className={classes.errorMsg}>required</span>}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div style={{ display: "flex", justifyContent: "space-between", margin: "0.4rem 0" }}>
                                                    <label style={{ marginTop: "0.2rem" }}>Phone or cell No.</label>
                                                    <div className={classes.inputBox}>
                                                        <div>
                                                            <input
                                                                className={classes.formInput}
                                                                type="text"
                                                                name="phone"
                                                                {...register("phone",
                                                                    { required: true })}
                                                            />
                                                        </div>
                                                        <div className={classes.errorField}>
                                                            {errors.phone && <span className={classes.errorMsg}>required</span>}
                                                        </div>
                                                    </div>
                                                </div>
                                                <div style={{ display: "flex", justifyContent: "space-between", margin: "0.4rem 0" }}>
                                                    <label style={{ marginTop: "0.3rem" }}>Address</label>
                                                    <div className={classes.inputBox}>
                                                        <div>
                                                            <input
                                                                className={classes.formInput}
                                                                type="text"
                                                                name="address"
                                                                {...register("address",
                                                                    { required: true })}
                                                            />
                                                        </div>
                                                        <div className={classes.errorField}>
                                                            {errors.address && <span className={classes.errorMsg}>required</span>}
                                                        </div>
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
    );
};

export default FirstStep;
