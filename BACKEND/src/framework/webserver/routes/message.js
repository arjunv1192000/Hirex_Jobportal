import messageController from "../../../adapters/controllers/messages/messagecontroller.js";
import messageRepositoryImp from "../../database/mongodb/repositories/message/messageRepositoryImp.js";
import messageRepositoryInt from "../../../application/repositories/message/messageRepositoryInt.js";

const messageRouter=(express)=>{
    const router=express.Router()
    const controller=messageController(messageRepositoryInt,messageRepositoryImp)

    router.route('/').post(controller.addMessage)
    router.route('/:chatId').get(controller.getMessages)
  

    return router;

}
export default messageRouter ;