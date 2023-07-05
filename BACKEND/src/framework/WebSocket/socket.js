import { Server } from 'socket.io';

let activeUsers= [];

const socketConfig=(io)=>{

    io.on('connection',(socket)=>{
       

        socket.on('new-user-add',(newUserId)=>{
           

            if (!activeUsers.some((user) => user.userId === newUserId)) {
                activeUsers.push({ userId: newUserId, socketId: socket.id });
                
              }
              // send all active users to new user
             
        
              io.emit('get-users', activeUsers);
        });

        socket.on('send-message',(data)=>{
            console.log(data);
            const { receiverId } = data;
            console.log('Sending from socket to:', receiverId);
            const user = activeUsers.find((user) => user.userId === receiverId);    
            console.log('Data:', data);
            if (user) {
              
      
              io.to(user.socketId).emit('receive-message', data);
            }

        })

        socket.on('disconnect',()=>{

            activeUsers = activeUsers.filter((user) => user.socketId !== socket.id);
            // send all active users to all users
            io.emit('get-users', activeUsers);



        })

        // send message to a specific user

      

    })

   

    


}
export default socketConfig
