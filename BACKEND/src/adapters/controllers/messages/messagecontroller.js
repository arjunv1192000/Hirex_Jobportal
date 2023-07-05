import messageAdd from "../../../application/useCase/message/messageAdd.js";
import getMessage from "../../../application/useCase/message/getMessage.js";

const messageController=(messageRepositoryInt,messageRepositoryImp)=>{
    const messageRepository=messageRepositoryInt(messageRepositoryImp())

    
    const addMessage = (req, res) => {
        const { chatId, senderId, message } = req.body;
        console.log(chatId, senderId, message,"sdjdjdjdjsdj");
        messageAdd( chatId, senderId, message,messageRepository).then((response) => {

            console.log(response);

            res.json(response)

        }).catch((err) => console.log(err))

    }

    
    const getMessages = (req, res) => {
        const { chatId } = req.params;

        getMessage(chatId,messageRepository).then((response) => {

            console.log(response);

            res.json(response)

        }).catch((err) => console.log(err))

    }
return{
    addMessage,
    getMessages


}




}
export default messageController