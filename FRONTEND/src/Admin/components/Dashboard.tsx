import React from 'react'
import { Box, Stack, Typography } from '@mui/material'

type Props = {
  user:number;
  recruiter:number;
  jobs:number;
};


const Dashboard:React.FC<Props>=({user,recruiter,jobs})=> {
  return (
    <Box sx={{ width: '80%', height: 400, borderRadius: 2, boxShadow: 6, backgroundColor: 'white', marginTop: 3, marginLeft: 20 }}>
      <Stack direction={'row'}>
        <Box sx={{ width: 200, height: 200, borderRadius: 2, boxShadow: 6, backgroundColor: 'blue', marginTop: 10, marginLeft: 20 }}>
          <Typography fontSize={21} fontWeight={500} width={200} textAlign={'center'} marginTop={4}>
            USERS
          </Typography>
          <Typography fontSize={32} fontWeight={300} marginTop={2} width={200} textAlign={'center'}>
            {user}

          </Typography>

        </Box>
        <Box sx={{ width: 200, height: 200, borderRadius: 2, boxShadow: 6, backgroundColor: 'blue', marginTop: 10, marginLeft: 20 }}>
          <Typography fontSize={21} fontWeight={500} width={200} textAlign={'center'} marginTop={4}>
            RECRUITERS
          </Typography>
          <Typography fontSize={32} fontWeight={300} marginTop={2} width={200} textAlign={'center'}>
            {recruiter}

          </Typography>

        </Box>
        <Box sx={{ width: 200, height: 200, borderRadius: 2, boxShadow: 6, backgroundColor: 'blue', marginTop: 10, marginLeft: 20 }}>
          <Typography fontSize={21} fontWeight={500} width={200} textAlign={'center'}marginTop={4}>
            JOBS
          </Typography>
          <Typography fontSize={32} fontWeight={300} marginTop={2} width={200} textAlign={'center'}>
            {jobs}

          </Typography>

        </Box>


      </Stack>

    </Box>

  )
}

export default Dashboard