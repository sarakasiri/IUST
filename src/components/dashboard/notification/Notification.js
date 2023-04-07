import React from 'react';

import classes from './styles/Notification.module.scss';

import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";

const Item = styled(Box)(({ theme }) => ({
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));

const Notification = () => {
    return (
        <Box sx={{ width: '55%', marginTop: "2rem" }} className={classes.box}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }} style={{ paddingTop: "2rem" }}>
                <Grid item xs={7} style={{ marginTop: "0.9rem" }}>
                    <Item>
                        <div className={classes.applySpanBox}>
                            <span className={classes.applySpan}>You can apply for two or more majors in different faculties.</span>
                        </div>
                    </Item>
                </Grid>
                <Grid item xs={5} >
                    <Item>
                        <Button className={classes.chanceBtn}
                            sx={{ width: "100%" }}
                            style={{
                                borderRadius: "1.3rem",
                                backgroundColor: "#FF5271"
                            }}>
                            <span className={classes.proBtn}>Take Your Chance!</span>
                        </Button>
                    </Item>
                </Grid>
                <Grid item xs={12}>
                    <Item>
                        <Card style={{
                            boxShadow: "none",
                            borderRadius: "1.3rem",
                            backgroundColor: "#F5F5F5",
                            marginBottom: "0.7rem",
                            marginTop: "0.7rem"
                        }}>
                            <CardContent>
                                <div className={classes.notifSpan}>
                                    <span style={{ color: "black" }}>Notification Center </span>
                                </div>
                            </CardContent>
                        </Card>
                    </Item>
                </Grid>
                <Grid item xs={7}>
                    <Item>
                        <Button className={classes.notifBtn}
                            sx={{ width: "100%" }}
                            style={{ borderRadius: "1.3rem", backgroundColor: "#FF5271" }}>
                            <span className={classes.proBtn}>Apply Now !</span>
                        </Button>
                    </Item>
                </Grid>
                <Grid item xs={5}>
                    <Item>
                        <Button className={classes.notifBtn}
                            sx={{ width: "100%" }}
                            style={{ borderRadius: "1.3rem", backgroundColor: "#779EFF" }}>
                            <span className={classes.proBtn}>Take a Tour!</span>
                        </Button>
                    </Item>
                </Grid>
            </Grid>
        </Box>
    );
};

export default Notification;
