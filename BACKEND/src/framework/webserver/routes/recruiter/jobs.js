import jobcreationcontroller from "../../../../adapters/controllers/recruiters/jobsController.js"
import jobRepositoryImp from "../../../database/mongodb/repositories/recruiters/recruiterJobRepositoryImp.js"
import jobRepositoryInf from "../../../../application/repositories/recruiters/recruiterJobRepositoryInf.js"
import userprofileRepositoryImp from "../../../database/mongodb/repositories/users/userprofileRepositoryImp.js"
import userprofileRepositoryInt from "../../../../application/repositories/users/userprofileRepositoryInf.js"
import authMiddleware from "../../middlewares/recruitermiddleware.js"



const recruiterjobs=(express)=>{
    const router=express.Router()
    const controller=jobcreationcontroller(jobRepositoryInf,jobRepositoryImp,userprofileRepositoryInt,userprofileRepositoryImp)
    router.route('/createjob').post(authMiddleware,controller.createnewjob)
    router.route('/getrecruiterjob').get(authMiddleware,controller.selectrecruiterjob)
    router.route('/getsinglejob').get(authMiddleware,controller.selectsinglejob)
    router.route('/updatejob').post(authMiddleware,controller.updatejob)
    router.route('/applicants').get(authMiddleware,controller.getapplicants)
    router.route('/unlist').post(authMiddleware,controller.unlistjob)
    router.route('/updateApplicantStatus').post(authMiddleware,controller.applicantstatus)
   

   

    return router;

}
export default recruiterjobs;