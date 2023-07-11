import  { useState, useEffect } from 'react'
import { Box, Stack, Typography, Avatar } from '@mui/material'
import recruiterapi from '../../RECRUITER/utils/axios';
import axios from '../../USER/utils/axios'

type UserData={
  name:string;
  image:string;


}
type RecruiterData={
  name:string;
  image:string;
}

function Conversation({ data, currentuser, onClick, online }:any) {
  const [userdata, setuserdata] = useState<UserData | null>(null)
  const [recruiterdata, setrecruiterdata] = useState<RecruiterData | null>(null)

  const fetchuserData = () => {
    const chatAuthId = currentuser.recId ? currentuser.recId : currentuser.useId;
    const Id = data.members.find((id: any) => id !== chatAuthId)
    const userIdIndex = data?.members.indexOf(Id);
   

    try {
      if (userIdIndex == 0) {
        recruiterapi.get('/getrecruiterdata?id=' + Id)
          .then((response) => {
            setrecruiterdata(response.data.recruiterdata)


          })
          .catch((error) => {
            console.error(error.message);
          });

      } else {
        axios.get('/profile/getprofile?id=' + Id).then((response) => {
          setuserdata(response.data.profiledata)

        }).catch((response) => {
          console.error(response.message);



        })


      }

    } catch (error) {
      console.log(error);
    }



  }


  useEffect(() => {
    fetchuserData()

  }, []);



  return (
    <Box onClick={onClick} sx={{ width: "90%", height: 80, borderRadius: 4, backgroundColor: '#c6e3fa', marginTop: 1, marginLeft: 2, cursor: 'pointer' }}>
      <Stack direction={'row'}>
        <Avatar
          alt=""
          src={recruiterdata ? recruiterdata.image : userdata?.image}
          sx={{ width: 50, height: 50, marginTop: 2, marginLeft: 2 }}
        />
        <Stack>
        <Typography textAlign={'center'} marginTop={3} fontSize={18} fontWeight={500} marginLeft={3}>
          {recruiterdata ? recruiterdata.name : userdata?.name}

        </Typography>
        <Typography fontSize="0.75rem" marginLeft={3} >
          {online ? 'Online' : 'Offline'}
        </Typography>

        </Stack>
        

      </Stack>


    </Box>
  )
}

export default Conversation