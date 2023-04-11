import React from 'react';

import classes from './styles/Profile.module.scss';

import { styled } from '@mui/material/styles';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardContent from "@mui/material/CardContent";
import Avatar from "@mui/material/Avatar";


const Item = styled(Box)(({ theme }) => ({
    backgroundColor: "#F5F5F5",
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


const Profile = () => {
    return (
        <Card className={classes.profileCard}>
            <Item className={classes.cardItem}>
                <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                    <Grid item xs={6}>
                        <Card className={classes.info}>
                            <CardContent>
                                <div>
                                    <span>Josef Conrad </span>
                                </div>
                                <div>
                                    <span>Student No. 1234235</span>
                                </div>
                                <div>
                                    <span>No. of Applications: 2 </span>
                                </div>
                            </CardContent>
                        </Card>
                    </Grid>
                    <Grid item xs={6}>
                        <Item>
                            <Avatar className={classes.avatar}></Avatar>
                        </Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item>
                            <Button className={classes.proBtn}
                                style={{ borderRadius: "10px", backgroundColor: "#779EFF" }}>
                                <span className={classes.editBtn}>Edit your profile </span>
                            </Button>
                        </Item>
                    </Grid>
                    <Grid item xs={6}>
                        <Item>
                            <Button className={classes.proBtn}
                                sx={{ width: "80%" }}
                                style={{ borderRadius: "10px", backgroundColor: "#779EFF" }}>
                                <span className={classes.exitSpan}>Exit</span>
                            </Button>
                        </Item>
                    </Grid>
                </Grid>
            </Item>
        </Card>
    );
};

export default Profile;
