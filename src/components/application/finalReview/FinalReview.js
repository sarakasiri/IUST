import React from "react";

import classes from './styles/FinalReview.module.scss';

import styled from "@emotion/styled";

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableContainer from "@mui/material/TableContainer";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableRow from "@mui/material/TableRow";

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(even)': {
        backgroundColor: "#F5F5F5",
    },
}));


function createData(title) {
    return { title };
}

const biographyReview = [
    createData('First Name'),
    createData('Last Name'),
    createData('Date of Birth'),
    createData('Gender'),
];

const nationalInfoReview = [
    createData('Nationality'),
    createData('Country'),
    createData('Country Code'),
    createData('Postal Code'),
    createData('City'),
    createData('City Code'),
];

const languagesRevies = [
    createData('Mother Tongue'),
    createData('English'),
    createData('Persian'),
    createData('Other Languages'),
];

const contactInfo = [
    createData('Phone Or Cell number'),
    createData('Address'),
    createData('Email Address'),
];

const selfSupportReview = [
    createData('Self Support'),
    createData('Do you Hold any Scholarship'),
]

const programReqReview = [
    createData('Degree'),
    createData('Field Of Study'),
    createData('Faculty'),
];

const OccupationalBackReview = [
    createData('Occupational'),
    createData('Organizatoin'),
    createData('Country'),
    createData('City'),
    createData('From'),
    createData('To'),
    createData('More Information'),
];

const SupportingDocReview = [
    createData('CV'),
    createData('Personal Photo'),
    createData('Valid Passport'),
    createData('High School Certificate'),
    createData('Transcription of High school certificate'),
    createData('Supporting Letter'),
];

const FinalReview = (props) => {
    return (
        <>
            <Box sx={{ flexGrow: 1, width: '100%' }}>
                <Grid container columns={12} spacing={7}>
                    <Grid item xs={6}>
                        <div className={classes.reviewFormInfo}>
                            <div className={classes.reviewFormTitle}>
                                <p>Personal Information</p>
                            </div>
                            <Card className={classes.reviewCard}>
                                <Box sx={{ flexGrow: 1, width: '100%' }} >
                                    <Grid container columns={12}>
                                        <Grid xs={1}>
                                            <div sx={{ width: "100%" }} className={classes.verticalBioButtonOne}>
                                                <span sx={{ width: "100%" }} className={classes.reviewBiographyBtnSpanOne}>Biography</span>
                                            </div>
                                        </Grid>
                                        <Grid item xs={11}>
                                            <Card className={classes.bioInfoReview}>
                                                <TableContainer >
                                                    <Table size="small" className={classes.reviewTable}>
                                                        <TableBody>
                                                            {biographyReview.map((cell) => (
                                                                <StyledTableRow>
                                                                    <TableCell>{cell.title}</TableCell>
                                                                </StyledTableRow>
                                                            ))}
                                                        </TableBody>
                                                    </Table>
                                                </TableContainer>
                                            </Card>
                                        </Grid>
                                    </Grid>
                                    <Grid container columns={12}>
                                        <Grid item xs={1}>
                                            <div sx={{ width: "100%" }} className={classes.verticalBioButtonTwo}>
                                                <span sx={{ width: "100%" }} className={classes.reviewBiographyBtnSpanTwo}>National     </span>
                                            </div>
                                        </Grid>
                                        <Grid item xs={11}>
                                            <Card className={classes.bioInfoReview}>
                                                <TableContainer >
                                                    <Table size="small" className={classes.reviewTable}>
                                                        <TableBody>
                                                            {nationalInfoReview.map((cell) => (
                                                                <StyledTableRow>
                                                                    <TableCell>{cell.title}</TableCell>
                                                                </StyledTableRow>
                                                            ))}
                                                        </TableBody>
                                                    </Table>
                                                </TableContainer>
                                            </Card>
                                        </Grid>
                                    </Grid>
                                    <Grid container columns={12}>
                                        <Grid item xs={1}>
                                            <div sx={{ width: "100%" }} className={classes.verticalBioButtonThree}>
                                                <span sx={{ width: "100%" }} className={classes.reviewBiographyBtnSpanThree}>Languages</span>
                                            </div>
                                        </Grid>
                                        <Grid item xs={11}>
                                            <Card className={classes.bioInfoReview}>
                                                <TableContainer >
                                                    <Table size="small" className={classes.reviewTable}>
                                                        <TableBody>
                                                            {languagesRevies.map((cell) => (
                                                                <StyledTableRow>
                                                                    <TableCell>{cell.title}</TableCell>
                                                                </StyledTableRow>
                                                            ))}
                                                        </TableBody>
                                                    </Table>
                                                </TableContainer>
                                            </Card>
                                        </Grid>
                                    </Grid>
                                    <Grid container columns={12}>
                                        <Grid item xs={1}>
                                            <div sx={{ width: "100%" }} className={classes.verticalBioButtonFour}>
                                                <span sx={{ width: "100%" }} className={classes.reviewBiographyBtnSpanFour}>Contact </span>
                                            </div>
                                        </Grid>
                                        <Grid item xs={11}>
                                            <Card className={classes.bioInfoReview}>
                                                <TableContainer >
                                                    <Table size="small" className={classes.reviewTable}>
                                                        <TableBody>
                                                            {contactInfo.map((cell) => (
                                                                <StyledTableRow>
                                                                    <TableCell>{cell.title}</TableCell>
                                                                </StyledTableRow>
                                                            ))}
                                                        </TableBody>
                                                    </Table>
                                                </TableContainer>
                                            </Card>
                                        </Grid>
                                    </Grid>
                                </Box>
                            </Card>
                            <div className={classes.reviewFormButtonDiv}>
                                <Button sx={{ width: "30%" }} className={classes.reviewFormButton}>Edit</Button>
                            </div>
                        </div>
                        <div className={classes.reviewFormInfo}>
                            <div className={classes.reviewFormTitle}>
                                <p>Personal Information</p>
                            </div>
                            <Card className={classes.reviewCard}>
                                <TableContainer >
                                    <Table size="small">
                                        <TableBody>
                                            {selfSupportReview.map((cell) => (
                                                <TableRow>
                                                    <TableCell style={{ borderBottom: "none" }} >{cell.title}</TableCell>
                                                </TableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Card>
                            <div className={classes.reviewFormButtonDiv}>
                                <Button sx={{ width: "30%" }} className={classes.reviewFormButton}>Edit</Button>
                            </div>
                        </div>
                    </Grid>
                    <Grid item xs={6} >
                        <div className={classes.reviewFormInfo}>
                            <div className={classes.reviewFormTitle}>
                                <p>Personal Information</p>
                            </div>
                            <Card className={classes.reviewCard}>
                                <TableContainer >
                                    <Table size="small">
                                        <TableBody>
                                            {programReqReview.map((cell) => (
                                                <StyledTableRow>
                                                    <TableCell>{cell.title}</TableCell>
                                                </StyledTableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Card>
                            <div className={classes.reviewFormButtonDiv}>
                                <Button sx={{ width: "30%" }} className={classes.reviewFormButton}>Edit</Button>
                            </div>
                        </div>
                        <div className={classes.reviewFormInfo}>
                            <div className={classes.reviewFormTitle}>
                                <p>Personal Information</p>
                            </div>
                            <Card className={classes.reviewCard}>
                                <TableContainer >
                                    <Table size="small">
                                        <TableBody>
                                            {OccupationalBackReview.map((cell) => (
                                                <StyledTableRow>
                                                    <TableCell>{cell.title}</TableCell>
                                                </StyledTableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Card>
                            <div className={classes.reviewFormButtonDiv}>
                                <Button sx={{ width: "30%" }} className={classes.reviewFormButton}>Edit</Button>
                            </div>
                        </div>
                        <div className={classes.reviewFormInfo}>
                            <div className={classes.reviewFormTitle}>
                                <p>Personal Information</p>
                            </div>
                            <Card className={classes.reviewCard}>
                                <TableContainer >
                                    <Table size="small">
                                        <TableBody>
                                            {SupportingDocReview.map((cell) => (
                                                <StyledTableRow>
                                                    <TableCell>{cell.title}</TableCell>
                                                    <TableCell>
                                                        <Button className={classes.tableViewBtn}>view</Button>
                                                    </TableCell>
                                                    <TableCell >
                                                        <Button className={classes.tableEditBtn}>edit</Button>
                                                    </TableCell>
                                                </StyledTableRow>
                                            ))}
                                        </TableBody>
                                    </Table>
                                </TableContainer>
                            </Card>
                        </div>
                    </Grid>
                </Grid>
            </Box >
        </>
    );
};

export default FinalReview;