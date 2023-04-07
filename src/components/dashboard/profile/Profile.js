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
    backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
}));


const Profile = () => {
    return (
        <Card className={classes.profileCard}>
            <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
                <Grid item xs={6}>
                    <Item>
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
                    </Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>
                        <Avatar className={classes.avatar}></Avatar>
                    </Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>
                        <Button className={classes.proBtn}
                            style={{ borderRadius: "15px", backgroundColor: "#779EFF" }}>
                            <span className={classes.proBtn}>Edit your profile </span>
                        </Button>
                    </Item>
                </Grid>
                <Grid item xs={6}>
                    <Item>
                        <Button className={classes.proBtn}
                            sx={{ width: "50%" }}
                            style={{ borderRadius: "15px", backgroundColor: "#779EFF" }}>
                            <span>Exit</span>
                        </Button>
                    </Item>
                </Grid>
            </Grid>
        </Card>
    );
};

export default Profile;
