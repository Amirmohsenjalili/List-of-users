import { useNavigate } from 'react-router-dom';
import styles from './styles.module.css';
import Box from '@mui/material/Box';
import { Button, Typography } from '@mui/material';

const NotFound = () => {

    const navigate = useNavigate();
   
    return (
        <Box className={styles.container}>
            <Button variant="text" onClick={() => navigate('/&/ListUser')} className={styles.childContainer}>Back To Home</Button>
            <Typography color='error' variant="h5">Your desired page was not found</Typography>
        </Box>
    );
};

export default NotFound;