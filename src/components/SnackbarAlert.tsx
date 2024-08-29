import { Snackbar,Alert, Slide } from '@mui/material';

interface SnackbarProps {
    showSnackBar: boolean;
    handleClose(): any;
}

export default function SnackbarAlert({ showSnackBar, handleClose }: SnackbarProps) {

    return (
        <>
        <Snackbar 
            open={showSnackBar} 
            autoHideDuration={5000} 
            onClose={handleClose} 
            anchorOrigin={{ vertical: 'bottom', horizontal: 'center' }} 
            TransitionComponent={Slide}
            >
            <Alert
                onClose={handleClose}
                severity="success"
                variant="filled"
                sx={{ width: '60vh', fontSize: 'large', marginBottom: '8vh' }}
            >
                Message Received! Thank you!
            </Alert>
        </Snackbar>
        </>
    )
}