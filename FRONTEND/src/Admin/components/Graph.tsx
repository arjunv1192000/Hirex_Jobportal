
import { BarChart } from '@mui/x-charts/BarChart';
import { Box} from '@mui/material'

interface CompanyData {
  companyname: string;
  jobCount: number;
}

function Graph({ data }: { data: CompanyData[] }) {
  if (data.length == 0) {
   
    return null;
  }

 
  const companyNames = data?.map((item) => item.companyname);
  const jobCounts = data?.map((item) => item.jobCount);
  console.log(companyNames);
  console.log(jobCounts);
  
  

  return (
    <Box sx={{ width: '80%', height: 'auto', borderRadius: 2, boxShadow: 6, backgroundColor: 'white', marginTop: 3, marginLeft:20 }}>
      <BarChart
        xAxis={[
          {
            id: 'barCategories',
            data: companyNames,
            scaleType: 'band',
          },
        ]}
        series={[
          {
            data: jobCounts,
          },
        ]}
        width={900}
        height={600}
        sx={{marginLeft:25}}
      />
    </Box>
  );
}


export default Graph