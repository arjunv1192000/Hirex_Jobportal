import Message from "../../models/chat/messageModels.js"

const messageRepositoryImp=()=>{

    const messageAdd = async (chatId,senderId,message ) => {
        const newMessage = new Message({
          chatId,
          senderId,
          message,
        });
        return await newMessage.save();
      };
      const getMessage = async (chatId) => {
        return await Message.find({ chatId });
      };
    
      return {
        messageAdd,
        getMessage,
      };


    

}
export default messageRepositoryImp