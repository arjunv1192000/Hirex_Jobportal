
import { Box, Stack , Grid } from '@mui/material'
import SideBar from './SideBar'



function Jobview() {
  return (
    <Box sx={{ width: "95%", height: 'auto', borderRadius: 6, backgroundColor: 'white', marginLeft: 5, position: 'absolute', marginTop: 40, boxShadow: 6 }}>
      <Stack>
        

        <Stack direction={'row'} sx={{ marginTop: 10, marginLeft: 3 }} spacing={1}>

          <SideBar />
          <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} >
            
            




          </Grid>


        </Stack>

        </Stack>


    </Box>

  )
}

export default Jobview