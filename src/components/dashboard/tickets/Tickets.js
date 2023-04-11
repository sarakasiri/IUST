import React from "react";

import classes from './styles/Tickets.module.scss';

import { DataGrid } from "@mui/x-data-grid";

const ticketsColumns = [
    {
        field: 'Ticket No.',
        headerName: 'request ID',
        width: 200
    },

    {
        field: 'Date',
        headerName: 'Data',
        width: 211
    },

    {
        field: 'Status',
        headerName: 'Field ',
        width: 211
    },

    {
        field: 'The Support Teams Answer',
        headerName: 'Degree',
        width: 411,
    },
];

const ticketsRows = [
    { id: 1, requestId: 1, date: 'Snow', field: 'Jon', },
    { id: 2, requestId: 2, date: 'Snow', field: 'Jon', },
];

const Tickets = () => {
    return (
        <>
            <div style={{ display: "flex", justifyContent: "center", height: 400, width: '90%' }}>
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
                        backgroundColor: "#F5F5F5",
                        borderRadius: "1.4rem",
                        margin: 1,
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
                    rows={ticketsRows}
                    columns={ticketsColumns}
                    pageSize={5}
                    rowsPerPageOptions={[5]}
                ></DataGrid>
            </div>
        </>
    );
};

export default Tickets;