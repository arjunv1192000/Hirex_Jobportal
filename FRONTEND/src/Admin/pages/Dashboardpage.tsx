
import Header from '../components/Header';
import Background from '../components/Background';
import { Box, Stack } from '@mui/material'
import Footer from '../components/Footer'
import Dashboard from '../components/Dashboard';
import Graph from '../components/Graph';
import { useEffect, useState } from 'react';
import axios from '../utils/axios'

type datas = {
  user: number;
  recruiter: number;
  jobs: number;
};
type CompanyData = {
  companyname: string;
  jobCount: number;
};




function Dashboardpage() {
  const [data, setdata] = useState<datas>({ user: 0, recruiter: 0, jobs: 0 });
  const [graphdata, setgraphdata] = useState<CompanyData[]>([]);



  const fetchData = () => {

    axios.get('/dashboarddata')
      .then((response) => {
        setdata(response.data);
      })
      .catch((response) => {
        console.error(response.message);
      });
  }
  const fetchGraphData = () => {

    axios.get('/graphdata')
      .then((response) => {
        setgraphdata(response.data?.jobdata);
      })
      .catch((response) => {
        console.error(response.message);
      });
  }
  useEffect(() => {
    fetchGraphData()

  }, []);

  useEffect(() => {
    fetchData()

  }, []);

  return (

    <Box >

      <Stack direction={'column'}  >
        <Header />
        <Background />

        <Box sx={{ width: "95%", height: 'auto', borderRadius: 6, backgroundColor: 'white', marginLeft: 5, marginTop: 40, boxShadow: 6, zIndex: 1 }}>
          <Stack direction={'column'}>
            <Dashboard user={data.user} recruiter={data.recruiter} jobs={data.jobs} />
            <Graph data={graphdata} />

          </Stack>

        </Box>


        <Footer />
      </Stack>
    </Box>


  )
}

export default Dashboardpage