
import Header from '../components/Header'
import Footer from '../components/Footer'
import SideBar from '../components/Sidebar'
import { Box, Stack, Typography } from '@mui/material'
import Applicant from '../components/Applicant'
import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import recruiterapi from '../utils/axios.ts';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';
import Background from '../components/Background';

type User = {
  _id: string;
  userId: string;
  name: string;
  email: string;
  phone: string;
  location: string;
  jobRole: string;
  language: string;
  about: string;
  education:string;
  image: string;
  cv: string;
  

 
};

function Applicantsdetails() {
  const [users, setUsers] = useState<User[]>([]);
  const { jobId } = useParams();
  const theme = useTheme();
  const isMobile: boolean = useMediaQuery(theme.breakpoints.down('sm'));    
  
  useEffect(() => {
    recruiterapi
      .get('/jobs/applicants?id=' + jobId)
      .then((response) => {
        setUsers(response.data.jobapplicants)
      })
      .catch((error) => {
        console.error(error.message);
      });
  }, [jobId]);
 
  

  return (
    <Box>
      <Stack>

      <Header />
      <Background/>
      <Box
          sx={{
            width: '95%',
            height: 'auto',
            borderRadius: 6,
            backgroundColor: 'white',
            marginLeft: 5,
            marginTop: 40,
            boxShadow: 6,
            zIndex: 1,
            '@media (max-width: 800px)': {
              width: 850, marginTop: 30, marginLeft: 2
            },
          }}
        >
          <Stack direction={isMobile?'column':'row'} spacing={2} marginTop={15}>
        <SideBar />
        <Box sx={{ width:isMobile?"95%": "78%", height: 'auto', borderRadius: 2 }}>
          {users.length === 0 ? (
            <Typography variant="h5" align="center" mt={4}>
              No applicants found
            </Typography>
          ) : (
            users.map((user) => (
              <Applicant
                key={user._id}
                userId={user.userId}
                name={user.name}
                email={user.email}
                phone={user.phone}
                jobRole={user.jobRole}
                about={user.about}
                image={user.image}
                cv={user.cv}
                education={user.education}
                language={user.language}
                location={user.location}
                jobId={jobId ?? ''}
               
            
              />
            ))
          )}
        </Box>
      </Stack>

        </Box>

      </Stack>
    
      
      
      <Footer />
    </Box>
  )
}

export default Applicantsdetails;
