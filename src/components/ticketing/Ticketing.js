import React from "react";

import classes from './styles/Ticketing.module.scss';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import { Container } from "@mui/system";
import { Button } from "@mui/material";

const Ticketing = () => {
    return (
        <>
            <Box className={classes.ticketingBox}>
                <Grid container columns={12}>
                    <Grid xs={4}>
                        <form className={classes.form}>
                            <div className={classes.inputBox}>
                                <input
                                    className={classes.formInput}
                                    type="text"
                                    name="firstName"
                                    placeholder="problem type"
                                />
                            </div>
                        </form>
                    </Grid>
                    <Grid xs={12}>
                        <div className={classes.ticketingTextAreaDiv}>
                            <textarea placeholder="problem type" className={classes.ticketingTextArea} />
                        </div>
                        <div className={classes.sendButtonDiv}>
                            <Button className={classes.sendButton}>send
                            </Button>
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default Ticketing;