
import Header from '../components/Header'
import Footer from '../components/Footer'
import Background from '../components/Background'
import { Box, Stack } from '@mui/material'
import Profileupdationform from '../components/Profileupdationform'

function profileupdationpage() {
  return (
    <Box>
    <Stack>
      <Header/>
      <Background/>
      <Box sx={{ width: "90%", height: 'auto', borderRadius: 6, backgroundColor: 'white', marginLeft:10, marginTop:40, boxShadow: 6, zIndex: 1, '@media (max-width: 800px)': {
              width: 700, marginTop: 30, marginLeft: 2
            }, }}>
        <Profileupdationform />
       
      </Box>
      <Footer/>
    </Stack>
  </Box>
   
  )
}

export default profileupdationpage   