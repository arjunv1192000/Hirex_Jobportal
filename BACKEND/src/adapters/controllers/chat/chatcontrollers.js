import createChat from "../../../application/useCase/chat/createChat.js"
import getAllChats from "../../../application/useCase/chat/getAllchat.js"
import getChat from "../../../application/useCase/chat/getchat.js"



const chatController=(chatRepositoryInt,chatRepositoryImp)=>{
    const chatRepository=chatRepositoryInt(chatRepositoryImp())

    const createchat = (req, res) => {
        const { senderId,receiverId } = req.body

        createChat(senderId,receiverId,chatRepository).then((response) => {

            console.log(response);

            res.json(response)

        }).catch((err) => console.log(err))

    }

    const userchat = (req, res) => {

        const { userId } = req.params;
        console.log(userId,"caht userid");

        getAllChats(userId,chatRepository).then((response) => {

            console.log(response);

            res.json(response)

        }).catch((err) => console.log(err))

    }
    const findchat = (req, res) => {
        
        const { firstId } = req.params;
        const { secondId } = req.params;

        getChat(firstId,secondId,chatRepository).then((response) => {

            console.log(response);

            res.json(response)

        }).catch((err) => console.log(err))

    }
return{
    createchat,
    userchat,
    findchat
}

    

}
export default chatController