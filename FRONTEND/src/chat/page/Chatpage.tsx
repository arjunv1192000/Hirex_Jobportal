import React, { useRef } from 'react'
import { Box, Stack, Typography } from '@mui/material';
import Footer from '../../USER/components/Footer';
import Background from '../../USER/components/Background';
import Conversation from '../components/Conversation';
import Chatbox from '../components/Chatbox';
import { useState,useEffect } from 'react';
import { useSelector } from 'react-redux';
import chatAPI from '../utils/axios';
import { io} from 'socket.io-client';

type RootState = {
    recruiter: {
      value: {
        id: string | null;
        companyname: string | null;
        name: string | null;
        email: string | null;
        image: string | null;
        access_token: string;
      };
    };
    user: {
        value: {
          id: string | null;
          name: string | null;
          email: string | null;
          image: string | null;
          access_token: string;
          profile: boolean | null;
        };
      };
  };

  type Chat = {
    id: string;
    _id: string;
    members: any[];
    createdAt: string;
    updatedAt: string;
  };
  
  
 

  


function Chatpage() {

    const Id = useSelector((state: RootState) =>state?.user && state?.user?.value?.id || state?.recruiter && state?.recruiter?.value.id );
   

    const recruiterId = useSelector((state: RootState) => state?.recruiter?.value?.id);

    const recId = {
        recId: recruiterId,
      };


    const userId:any = useSelector((state: RootState) => state?.user?.value?.id);

    const usId = {
        useId: userId,
      };
     
      
      

      const currentUserId = recruiterId && recId || userId && usId;

    

    const [chats, setchats] = useState<Chat[]>([]);
    const[currentchat,setcurrentchat]=useState<unknown>(null)
    const [sendMessage, setSendMessage] = useState<unknown>(null);
    const [receiveMessage, setReceiveMessage] = useState<unknown>(null); 
    const [onlineUsers, setOnlineUsers] = useState<any>([]);
    const socket:any=useRef()
    

    useEffect(() => {
      
      socket.current= io('http://hirex.social');
      socket.current?.emit('new-user-add', Id);
      socket.current?.on('get-users', (users: any) => {
        setOnlineUsers(users);
      });

      
      return () => {
        if (socket.current) {
          socket.current.disconnect();
        }
      };
  
     
    }, [Id]);

    useEffect(() => {
      if (sendMessage !== null) {
        socket.current.emit('send-message', sendMessage);
      }
    }, [sendMessage]);


    useEffect(()=>{
      socket.current.on('receive-message', (data: React.SetStateAction<null>) => {
        setReceiveMessage(data);
      });

    },[])
    
   
    
     

    const fetchData = () => {

        chatAPI.get(`/${Id}`).then((response) => {
            setchats(response.data.Getchats);
          })
          .catch((response) => {
            console.error(response.message);
          });
      }
    
    
      useEffect(() => {
        fetchData()
    
      }, [Id]);

      const checkOnlineStatus = (chat: { id?: string; _id?: string; members: any; createdAt?: string; updatedAt?: string; }) => {
        const chatMember = chat.members.find((member: string | null) => member !== Id);
        const online = onlineUsers.find((user: { userId: any; }) => user.userId === chatMember);
        return online ? true : false;
      };

    return (
        <Box >
            <Stack direction={'column'}  >
                <Background />
                <Box sx={{ width: "95%", height: 900, borderRadius: 6, backgroundColor: 'white', marginLeft: 5, marginTop: 40, boxShadow: 6, zIndex: 1 }}>
                    <Stack direction={'row'}>
                        <Box sx={{ width: "20%", height: 800, borderRadius: 6, backgroundColor: 'white', marginLeft: 5, boxShadow: 6, marginTop: 5 }}>
                            <Typography textAlign={'center'} marginTop={1} fontSize={24} fontWeight={500}>
                                Chats

                            </Typography>
                            {chats.map((chat)=>(

                                <Conversation 
                                key={chat?.id} 
                                 data={chat}
                                 currentuser={currentUserId}
                                 onClick={() =>setcurrentchat(chat)}
                                 online={checkOnlineStatus(chat)}
                                 
                                 />
                            )
                            )}
                            
                        </Box>
                        
                        <Chatbox   data={currentchat} currentuser={currentUserId}  setSendMessage={setSendMessage}  receivedMessage={receiveMessage}  />



                    </Stack>

                </Box>





                <Footer />
            </Stack>



        </Box>
    )
}

export default Chatpage



