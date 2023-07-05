import chatdata from "../../models/chat/chatModels.js"


const chatRepositoryImp=()=>{

    const createChat = async (senderId, receiverId) => {
        try {
          const existingChat = await chatdata.findOne({
            members: { $all: [senderId, receiverId] },
          });
    
          if (existingChat) {
            return existingChat;
          }
    
          const newChat = new chatdata({
            members: [senderId, receiverId],
          });
    
          const savedChat = await newChat.save();
    
          return savedChat;
        } catch (error) {
          console.error('Error creating chat:', error);
          throw error;
        }
      };


      const getAllChat = async (userId) => {
        return await chatdata.find({
          members: { $in: [userId] },
        });
      };

      const getChat = async (firstId, secondId) => {
        return await chatdata.find({
          members: { $all: [firstId, secondId] },
        });
      };




      return{
        createChat,
        getAllChat,
        getChat


      }


    

}
export default chatRepositoryImp