import React, { useState, useEffect, useRef } from 'react'
import { Box, Stack, Typography, Avatar } from '@mui/material';
import SendIcon from '@mui/icons-material/Send';
import Button from '@mui/material/Button';
import recruiterapi from '../../RECRUITER/utils/axios';
import axios from '../../USER/utils/axios'
import messageAPI from '../utils/messageaxios';
import { TDate, format } from 'timeago.js'
import InputEmoji from 'react-input-emoji';



function Chatbox({ data, currentuser, setSendMessage,receivedMessage }:any) {



  const [userdata, setuserdata] = useState<any>(null)
  const [recruiterdata, setrecruiterdata] = useState<any>(null)
  const [message, setmessage] = useState<any>([])
  const [newmessage, setnewmessage] = useState("")



  useEffect(() => {
    if (receivedMessage !== null && receivedMessage.chatId === data?._id) {
     

      setmessage([...message, receivedMessage]);
    }
  }, [data?._id, message, receivedMessage]);


  const fetchUserData = () => {
    const chatAuthId = currentuser?.recId ? currentuser?.recId : currentuser?.useId;
    const Id = data?.members?.find((id: any) => id !== chatAuthId);
    const userIdIndex = data?.members?.indexOf(Id);



    try {
      if (userIdIndex === 0) {
        recruiterapi
          .get('/getrecruiterdata?id=' + Id)
          .then((response) => {
            setrecruiterdata(response.data.recruiterdata);
           
          })
          .catch((error) => {
            console.error(error.message);
          });
      } else {
        axios
          .get('/profile/getprofile?id=' + Id)
          .then((response) => {
          
            setuserdata(response.data.profiledata);
          })
          .catch((response) => {
            console.error(response.message);
          });
      }
    } catch (error) {
      console.log(error);
    }
  };
  const fetchMessage = () => {
    const chatId = data?._id
    try {
      messageAPI
        .get(`/${chatId}`)
        .then((response) => {
          setmessage(response.data.Getmessage);
        })
        .catch((error) => {
          console.error(error.message);
        });



    } catch (error) {
      console.log(error);

    }

  }



  useEffect(() => {

    fetchMessage()
  }, [data]);



  useEffect(() => {
    fetchUserData();

  }, [data]);


  const handlechange = (newmessage: React.SetStateAction<string>) => {
    setnewmessage(newmessage)

  }
  
  useEffect(() => {
    
    scroll.current?.scrollIntoView({ behavior: 'smooth' });
  }, [message]);

  const handleSend = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();
    if (!newmessage.trim()) {
      return;
    }

    const chatAuthId = currentuser?.recId ? currentuser?.recId : currentuser?.useId;

    const messages = {
      senderId: chatAuthId,
      message: newmessage,
      chatId: data?._id,
    };

    try {
      await messageAPI.post('/', messages).then((response) => {
       console.log(response.data.addmessage,"addd");
       

        setmessage([...message, response.data.addmessage]);
        setnewmessage('');
      })
        .catch((error) => {
          console.error(error.message);
        });



    } catch (error) {
      console.log(error);

    }
    const receiverId = data?.members.find((id: any) => id !== chatAuthId);
    setSendMessage({ ...messages, receiverId });



  }
  const scroll = useRef<HTMLDivElement | null>(null);



  return (
    <Box sx={{ width: "60%", height: 820, borderRadius: 6, backgroundColor: 'white', marginLeft: 6, boxShadow: 6, marginTop: 5 }}>
      {data ? (<Stack>
        <Box sx={{ width: "95%", height: 80, borderRadius: 3, marginLeft: 2, marginTop: 2, boxShadow: 6, zIndex: 1, backgroundColor: "#c6e3fa" }}>
          <Stack direction={'row'}>
            <Avatar
              alt=""
              src={recruiterdata ? recruiterdata.image : userdata?.image}
              sx={{ width: 50, height: 50, marginTop: 2, marginLeft: 3 }}
            />
             <Typography textAlign={'center'} marginTop={3} fontSize={18} fontWeight={500} marginLeft={3}>
                {recruiterdata ? recruiterdata.name : userdata?.name}

              </Typography>
            

          </Stack>

        </Box>
        <Box sx={{
          display: 'flex',
          flexDirection: 'column',
          height: 600,
          overflow: 'auto',
          maxHeight: '600px',
          marginLeft: 2,
          marginTop: 1,
          zIndex: 1,
          backgroundColor: '#f6fbff'
        }}>
          {message.map((msg: { senderId: any; id: React.Key | null | undefined; message: string | number | boolean | React.ReactElement<any, string | React.JSXElementConstructor<any>> | React.ReactFragment | React.ReactPortal | null | undefined; createdAt: TDate; }) => {
            const isCurrentUserMessage = msg?.senderId === currentuser.recId || msg?.senderId === currentuser.useId;
            return (
              <Box key={msg.id} sx={{ display: 'flex', justifyContent: isCurrentUserMessage ? 'flex-end' : 'flex-start' }}  >
                <Box ref={scroll}
                  sx={{
                    backgroundColor: isCurrentUserMessage ? '#5A96E3' : '#C1ECE4',
                    marginLeft: 2,
                    borderTopLeftRadius: isCurrentUserMessage ? 6 : 0,
                    borderBottomLeftRadius: isCurrentUserMessage ? 6 : 10,
                    borderBottomRightRadius: isCurrentUserMessage ? 10 : 6,
                    padding: '3px 40px ',
                    margin: '10px',
                    maxWidth: '75%',
                  }}
                >
                  <Typography sx={{ fontSize: 18 }} >{msg.message}</Typography>
                  <Typography sx={{ fontSize: 10 }}>{format(msg.createdAt)}</Typography>
                </Box>
              </Box>
            );
          })}
        </Box>
        <Box sx={{ width: "95%", height: 80, backgroundColor: '#f6fbff', marginLeft: 2, marginTop: 1, zIndex: 1 }}>
          <Stack direction={'row'}>
            <Box
              sx={{
                width: 800,
                maxWidth: '100%',
                backgroundColor: 'white',
                marginTop: 1.5,
                marginLeft: 1,
                borderRadius: 4

              }}
            >

              <InputEmoji
                value={newmessage}
                onChange={handlechange}

              />
            </Box>


            <Button endIcon={<SendIcon />} sx={{ color: 'skyblue', marginLeft: 2, marginTop: 1 }} onClick={handleSend}>
            </Button>

          </Stack>


        </Box>

      </Stack>) : (
        <Typography textAlign={'center'} marginTop={4} fontSize={18} fontWeight={500} marginLeft={3}>
          Tap on a chat to start Conversation
        </Typography>


      )}


    </Box>

  )
}

export default Chatbox