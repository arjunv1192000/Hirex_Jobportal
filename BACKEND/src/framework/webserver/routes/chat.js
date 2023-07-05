import chatController from "../../../adapters/controllers/chat/chatcontrollers.js";
import chatRepositoryImp from "../../database/mongodb/repositories/chat/chatRepositoryImp.js";
import chatRepositoryInt from "../../../application/repositories/chat/chatRepositoryInt.js";



const chatRouter=(express)=>{
    const router=express.Router()
    const controller=chatController(chatRepositoryInt,chatRepositoryImp)

    router.route('/').post(controller.createchat)
    router.route('/:userId').get(controller.userchat)
    router.route('/findchat/:firstId/:secondId').get(controller.findchat)

   
  

    return router;

}
export default chatRouter ;