import React from 'react';

import classes from './styles/PersonalInfo.module.scss';

import styled from "@emotion/styled";

import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import Avatar from '@mui/material/Avatar';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import TableContainer from "@mui/material/TableContainer";

const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(even)': {
        backgroundColor: "#F5F5F5",
    },
}));

const PersonalInfo = () => {

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


    return (
        <>
            <Box sx={{ flexGrow: 1, width: '100%' }}>
                <Grid container columns={12}>
                    <Grid xs={12}>
                        <Card className={classes.profileCard}>
                            <Grid container className={classes.profileInfo}>
                                <Grid item xs={6}>
                                    <div className={classes.avatarDiv}>
                                        <Button className={classes.proBtn}
                                            style={{ borderRadius: "10px", backgroundColor: "#779EFF" }}>
                                            <span className={classes.proBtn}>Change Your Avatar</span>
                                        </Button>
                                    </div>
                                </Grid>
                                <Grid item xs={6}>
                                    <Avatar className={classes.avatar}></Avatar>
                                </Grid>
                            </Grid>
                        </Card>
                    </Grid>
                    <Grid xs={12}>
                        <Box sx={{ flexGrow: 1, width: '100%' }}>
                            <Grid container columns={12} >
                                <Grid xs={4} >
                                    <div className={classes.infoDiv}>
                                        <div className={classes.BioButton}>
                                            <span className={classes.reviewBiographyBtnSpan}>Biographical information </span>
                                        </div>
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
                                        <div className={classes.reviewFormButtonDiv}>
                                            <Button sx={{ width: "25%" }} className={classes.reviewFormButton}>Edit</Button>
                                        </div>
                                    </div>
                                </Grid>
                                <Grid xs={4}>
                                    <div className={classes.infoDiv}>
                                        <div sx={{ width: "100%" }} className={classes.BioButton}>
                                            <span sx={{ width: "100%" }} className={classes.reviewBiographyBtnSpan}>National info. </span>
                                        </div>
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
                                        <div className={classes.reviewFormButtonDiv}>
                                            <Button sx={{ width: "25%" }} className={classes.reviewFormButton}>Edit</Button>
                                        </div>
                                    </div>
                                </Grid>
                                <Grid xs={4}>
                                    <div className={classes.infoDiv}>
                                        <div sx={{ width: "100%" }} className={classes.BioButton}>
                                            <span sx={{ width: "100%" }} className={classes.reviewBiographyBtnSpan}>Languages</span>
                                        </div>
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
                                        <div className={classes.reviewFormButtonDiv}>
                                            <Button sx={{ width: "25%" }} className={classes.reviewFormButton}>Edit</Button>
                                        </div>
                                    </div>
                                </Grid>
                                <Grid xs={4}>
                                    <div className={classes.infoDiv}>
                                        <div sx={{ width: "100%" }} className={classes.BioButton}>
                                            <span sx={{ width: "100%" }} className={classes.reviewBiographyBtnSpan}>Occupational Background </span>
                                        </div>
                                        <Card className={classes.bioInfoReview}>
                                            <TableContainer >
                                                <Table size="small" className={classes.reviewTable}>
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
                                            <Button sx={{ width: "25%" }} className={classes.reviewFormButton}>Edit</Button>
                                        </div>
                                    </div>
                                </Grid>
                                <Grid xs={4}>
                                    <div className={classes.infoDiv}>
                                        <div sx={{ width: "100%" }} className={classes.BioButton}>
                                            <span sx={{ width: "100%" }} className={classes.reviewBiographyBtnSpan}>Supporting Documents </span>
                                        </div>
                                        <Card className={classes.bioInfoReview}>
                                            <TableContainer >
                                                <Table size="small" className={classes.reviewTable}>
                                                    <TableBody>
                                                        {SupportingDocReview.map((cell) => (
                                                            <StyledTableRow>
                                                                <TableCell>{cell.title}</TableCell>
                                                            </StyledTableRow>
                                                        ))}
                                                    </TableBody>
                                                </Table>
                                            </TableContainer>
                                        </Card>
                                        <div className={classes.reviewFormButtonDiv}>
                                            <Button sx={{ width: "25%" }} className={classes.reviewFormButton}>Edit</Button>
                                        </div>
                                    </div>
                                </Grid>
                            </Grid>
                        </Box>
                    </Grid>
                </Grid >
            </Box >
        </>
    );
};

export default PersonalInfo;