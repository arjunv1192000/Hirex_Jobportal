
import Header from '../components/Header'
import Footer from '../components/Footer'
import SideBar from '../components/Sidebar'
import Creationform from '../components/Creationform'
import { Box, Stack } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

function Jobcreationpage() {
    const theme = useTheme();
    const isMobile: boolean = useMediaQuery(theme.breakpoints.down('sm'));  

    return (
        <Box>
            <Header />
            <Stack direction={isMobile?'column':'row'} spacing={4} marginTop={10}  >
                <SideBar/>
                <Creationform />
            </Stack>
            <Footer />



        </Box>
        


    )
}

export default Jobcreationpage