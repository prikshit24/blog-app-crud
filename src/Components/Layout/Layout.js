import { Box } from '@mui/material';
import { Outlet } from 'react-router-dom';
import Footer from '../Footer/Footer';
import Header from '../Header/Header';

const Layout = () => {
    return (
        <>
            <Header />
            <Box sx={{minHeight:'calc(100vh - 140px)'}} >
                <Outlet />
            </Box>
            <Footer />
        </>
    )
}

export default Layout