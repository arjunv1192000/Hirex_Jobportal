import profilecontroller from "../../../../adapters/controllers/users/userProfileController.js"
import userprofileRepositoryImp from "../../../database/mongodb/repositories/users/userprofileRepositoryImp.js"
import userprofileRepositoryInt from "../../../../application/repositories/users/userprofileRepositoryInf.js"
import userAuthRepositoryImp from "../../../database/mongodb/repositories/users/userAuthRepositoryImp.js"
import userAuthRepositoryInt from "../../../../application/repositories/users/userRepositoriInf.js"
import authMiddleware from "../../middlewares/usermiddlewares.js";


const profileRouter=(express)=>{
    const router=express.Router()
    const controller=profilecontroller(userprofileRepositoryInt,userprofileRepositoryImp,userAuthRepositoryInt,userAuthRepositoryImp)

    router.route('/addprofile').post(authMiddleware,controller.addprofile)
    router.route('/getprofile').get(controller.selectprofiledata)
    router.route('/getmyjobs').get(authMiddleware,controller.selectappliedjob)
    router.route('/getsavedjobs').get(authMiddleware,controller.selectsavedjob)
    router.route('/updateprofile').post(authMiddleware,controller.updateprofile)
   
    return router;

}
export default profileRouter ;