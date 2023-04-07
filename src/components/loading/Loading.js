import React from 'react';

import { Backdrop } from '@mui/material';
import { CircularProgress } from '@material-ui/core';


const Loading = () => {
    return (
        <Backdrop
            sx={{ color: '#fff', zIndex: (theme) => theme.zIndex.drawer + 1 }}
            open={true}
        >
            <CircularProgress color="primary" />
        </Backdrop>
    );
};

export default Loading