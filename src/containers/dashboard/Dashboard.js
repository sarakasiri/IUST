import React from 'react';

import classes from './styles/Dashboard.module.scss';

import Notification from '../../components/dashboard/notification/Notification';
import Profile from '../../components/dashboard/profile/Profile';
import Request from '../../components/dashboard/tickets/Tickets';
import Tickets from '../../components/dashboard/tickets/Tickets';

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Button from '@mui/material/Button';

import { Link } from 'react-router-dom';

import SmsIcon from '@mui/icons-material/Sms';

const Dashboard = () => {
    return (
        <>
            <Box sx={{ flexGrow: 1 }}>
                <Grid rowSpacing={3} columnSpacing={5} container columns={12}>
                    <Grid xs={12}>
                        <div className={classes.searchDiv}>
                            <form>
                                <input
                                    type="search"
                                    placeholder='enter your search term here '
                                    className={classes.searchInput}
                                ></input>
                            </form>
                        </div>
                    </Grid>
                    <Grid item xs={8}>
                        <Notification />
                    </Grid>
                    <Grid item xs={4}>
                        <Profile />
                    </Grid>
                    <Grid item xs={12} style={{ display: "flex", justifyContent: "center" }}>
                        <Request />
                    </Grid>
                    <Grid item xs={12} style={{ display: "flex", justifyContent: "center" }}>
                        <Tickets />
                    </Grid>
                    <Grid xs={12}>
                        <div className={classes.buttonsDiv}>
                            <div className={classes.newTicketDiv}>
                                <Link to="/dashboard/new_ticket" className={classes.ticketLink} >
                                    <Button className={classes.newTicketBtn}>
                                        <span className={classes.newTicketSpan}>New Ticket</span>
                                    </Button>
                                </Link>
                            </div>
                            <div className={classes.helpDiv}>
                                <div>
                                    <Button variant='outlined' className={classes.helpBtn}>
                                        <span className={classes.helpSpan}>How Can I Help You ?</span>
                                    </Button>
                                </div>
                                <div>
                                    <SmsIcon className={classes.smsIcon} />
                                </div>
                            </div>
                        </div>
                    </Grid>
                </Grid>
            </Box>
        </>
    );
};

export default Dashboard;