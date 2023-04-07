import React from "react";

import classes from './styles/Request.module.scss';

import { DataGrid } from "@mui/x-data-grid";
import { textAlign } from "@mui/system";

const columns = [
    {
        field: 'requestId',
        headerName: 'request ID',
        width: 200
    },

    {
        field: 'date',
        headerName: 'Data',
        width: 211
    },

    {
        field: 'field',
        headerName: 'Field ',
        width: 211
    },

    {
        field: 'degree',
        headerName: 'Degree',
        width: 211,
    },
    {
        field: 'universityApproved ',
        headerName: 'University approved ',
        width: 211,
    },
    {
        field: 'facultyApproved ',
        headerName: 'Faculty approved ',
        width: 211,
    },
    {
        field: 'nextStep',
        headerName: 'your next step',
        width: 160,
    },
];

const rows = [
    { id: 1, requestId: 1, date: 'Snow', field: 'Jon', },
    { id: 2, requestId: 2, date: 'Snow', field: 'Jon', },
];

const Request = () => {
    return (
        <>
            <div style={{ display: "flex", justifyContent: "center", height: 400, width: '100%' }}>
                <DataGrid
                    sx={{
                        fontSize: "1.1rem",
                        padding: 3,
                        '.MuiDataGrid-columnHeaders': {
                            border: 'none',
                            display: "flex",
                            justifyContent: "center"
                        },
                        '.MuiDataGrid-row': {
                            background: '#fff',
                            marginBottom: '.75rem',
                            borderRadius: '1rem',
                            display: "flex",
                            justifyContent: "center",
                        },
                        '.MuiDataGrid-cell': {
                            border: 'none',
                        },
                        boxShadow: 2,
                        backgroundColor: "#F5F5F5",
                        borderRadius: "1.4rem",
                        margin: 3,
                        justifyContent: "center",
                        "& .MuiDataGrid-cell:hover": {
                            color: "primary.main",
                        },
                        '.MuiDataGrid-cell--textCenter': {
                            display: "flex",
                            alignItems: "center"
                        }
                    }}
                    initialState={{
                        pagination: {
                            paginationModel: {
                                pageSize: 5,
                            },
                        },
                    }}
                    cell--textCenter
                    rows={rows}
                    columns={columns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                ></DataGrid>
            </div>
        </>
    );
};

export default Request;



