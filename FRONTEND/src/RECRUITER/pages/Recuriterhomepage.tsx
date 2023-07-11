
import { Box, Stack, Grid, Typography, Button } from '@mui/material';
import { Link } from 'react-router-dom';
import Header from '../components/Header';
import Footer from '../components/Footer';
import SideBar from '../components/Sidebar';
import Background from '../components/Background';
import Dashboard from '../components/Dashboard';
import { useEffect, useState } from 'react';
import recruiterapi from '../utils/axios.ts';
import { useSelector } from 'react-redux';
import { useTheme } from '@mui/material/styles';
import useMediaQuery from '@mui/material/useMediaQuery';

type RootState = {
  recruiter: {
    value: {
      id: string | null;
      companyname: string | null;
      name: string | null;
      email: string | null;
      access_token: string;
    };
  };
};
type Job = {
  _id: string;
  jobTitle: string;
  about: string;
  salary: string;
  expiring: boolean;
};

function RecruiterHomepage() {
  const recruiterData = useSelector((state: RootState) => state.recruiter.value);
  const id = recruiterData.id;
  const theme = useTheme();
  const isMobile: boolean = useMediaQuery(theme.breakpoints.down('sm'));

  const [jobs, setJobs] = useState<Job[]>([]);

  const fetchData = () => {

    recruiterapi
      .get('/jobs/getrecruiterjob?id=' + id)
      .then((response) => {
        setJobs(response.data.jobs);
      })
      .catch((response) => {
        console.error(response.message);
      });
  }


  useEffect(() => {
    fetchData()

  }, []);

  return (
    <Box>
      <Stack>
        <Header />
        <Background />
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
              width: 1000, marginTop: 30, marginLeft: 3
            },
          }}
        >
          <Stack direction={isMobile?'column':'row'} spacing={isMobile?4:2} marginTop={10}>
            <SideBar />
            <Grid container rowSpacing={2} columnSpacing={{ xs: 1, sm: 2, md: 3 }} sx={{ padding:isMobile?10:1 }}>
              {jobs.length === 0 ? (
                <Box sx={{ textAlign: 'center', mt: 2, marginTop: 20, marginLeft: 60 }}>
                  <Typography variant="h6">No jobs found.</Typography>
                  <Button component={Link} to="/recruiter/creation" variant="outlined" sx={{ mt: 2 }}>
                    Create Job
                  </Button>
                </Box>
              ) : (
                jobs.map((job) => (
                  <Dashboard key={job._id} jobid={job._id} jobtitle={job.jobTitle} about={job.about} salary={job.salary} expiring={job.expiring} fetchData={fetchData} />
                ))
              )}
            </Grid>
          </Stack>
        </Box>
        <Footer />
      </Stack>
    </Box>
  );
}

export default RecruiterHomepage;
