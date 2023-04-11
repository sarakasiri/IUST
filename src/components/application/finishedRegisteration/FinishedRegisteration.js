import React, { useState } from 'react';

import classes from './styles/FinishedRegisteration.module.scss';

import { styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';
import { LazyLoadImage } from 'react-lazy-load-image-component';

import { Link } from 'react-router-dom';

import finished from '../../../assets/images/finished.png';
import checked from '../../../assets/images/checked.png';


const Item = styled(Box)(({ theme }) => ({
    ...theme.typography.body2,
    // padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const FinishedRegisteration = () => {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid container columns={16} >
                    <Grid item xs={16} >
                        <Box >
                            <Grid xs={16} className={classes.finishedRegister} container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                                <div>
                                    <div >
                                        <LazyLoadImage src={finished} style={{ width: "30rem", marginTop: "3rem" }} />
                                    </div>
                                    <div>
                                        <LazyLoadImage src={checked} style={{ width: "4.5rem", marginTop: "1rem" }} />
                                    </div>
                                    <div className={classes.subDiv} style={{ marginTop: "1rem" }}>
                                        <span className={classes.subSpan}>Your Submission has been completed.</span>
                                    </div>
                                    <div>
                                        <span className={classes.subSpan}> you must wait for the results !</span>
                                    </div>
                                    <div>
                                        <Link to="/dashboard" className={classes.dashboardLink}>
                                            <Button
                                                className={classes.finishedBtn}
                                                sx={{ width: "75%" }}
                                                style={{
                                                    backgroundColor: "#608af5c3", marginTop: "1.3rem"
                                                }}>
                                                <span classname={classes.btnSpan
                                                } style={{ color: "#ffffff" }}>Return to dashboard</span>
                                            </Button>
                                        </Link>
                                    </div>
                                    <div>
                                        <Link>
                                            <Button
                                                className={classes.makeNewApp}
                                                sx={{ width: "75%" }}
                                                style={{ backgroundColor: "#FF5271", marginTop: "1rem" }}>
                                                <span >Make a New Application!</span>
                                            </Button>
                                        </Link>
                                    </div>
                                </div>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid >
            </Box >
        </>
    );
};

export default FinishedRegisteration;