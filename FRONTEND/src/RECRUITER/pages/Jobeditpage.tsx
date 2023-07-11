
import Header from '../components/Header'
import Footer from '../components/Footer'
import SideBar from '../components/Sidebar'
import Updatejob from '../components/Updatejob'

import { Box, Stack } from '@mui/material'
import useMediaQuery from '@mui/material/useMediaQuery';
import { useTheme } from '@mui/material/styles';

function Jobeditpage() {
    const theme = useTheme();
    const isMobile: boolean = useMediaQuery(theme.breakpoints.down('sm'));  

    return (

        <Box>
            <Header />
            <Stack direction={isMobile?'column':'row'} spacing={6} marginTop={10}  >
                <SideBar />
                <Updatejob/>

            </Stack>
            <Footer />



        </Box>

    )
}

export default Jobeditpage