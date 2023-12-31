
import Header from '../components/Header';
import Background from '../components/Background';
import { Box, Stack } from '@mui/material'
import Sidebarprofile from '../components/Sidebarprofile';
import Footer from '../components/Footer'
import Profileformupdate from '../components/profileformupdation';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

function Profileupdate() {
  const theme = useTheme();
  const isMobile: boolean = useMediaQuery(theme.breakpoints.down('sm'));
  return (
    <Box >

            <Stack direction={'column'}  >
                <Header />
                <Background />
                <Box sx={{ width: "95%", height: 'auto', borderRadius: 6, backgroundColor: 'white', marginLeft: 5, marginTop: 40, boxShadow: 6,zIndex:1,'@media (max-width: 800px)': {
              width: 700, marginTop: 30, marginLeft: 2}, }}>
                <Stack direction={isMobile ?'column':'row'}>
                    <Sidebarprofile/>
                    <Profileformupdate/>

                </Stack>

                </Box>
                

                
                <Footer/>
            </Stack>


        </Box>
    
  )
}

export default Profileupdate