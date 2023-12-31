import authRouter from "./user/auth.js"
import authRouterRecruiter from "./recruiter/auth.js"
import commonservice from "./commonservice.js"
import profileRouter from "./user/userprofile.js"
import recruiterjobs from "./recruiter/jobs.js"
import jobRouter from "./user/jobs.js"
import recruiterprofileRouter from "./recruiter/profile.js"
import authRouterAdmin from "./admin/auth.js"
import chatRouter from "./chat.js"
import messageRouter from "./message.js"


const  routes=( app,express)=>{
    app.use('/api/v1/user',authRouter(express))
    app.use('/api/v1/recruiter',authRouterRecruiter(express))
    app.use('/api/v1/service',commonservice(express))
    app.use('/api/v1/user/profile',profileRouter(express))
    app.use('/api/v1/recruiter/jobs',recruiterjobs(express))
    app.use('/api/v1/user/jobs',jobRouter(express))
    app.use('/api/v1/recruiter/profile',recruiterprofileRouter(express))
    app.use('/api/v1/admin',authRouterAdmin(express))
    app.use('/api/v1/chat',chatRouter(express))
    app.use('/api/v1/message',messageRouter(express))


}
export default routes