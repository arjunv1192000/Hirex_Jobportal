import fileUpload from '../../application/useCase/common/FileuploadingUrl.js'
import nodemaileremailsending from '../../application/useCase/common/nodeMailer.js'

const commonserviceController=()=>{
    const s3service=(req,res)=>{
        fileUpload().then((response)=>{
            
            res.json({response})
            

        }).catch(()=>console.log(ErrorEvent))
    }
    const createemail=(req,res)=>{
        const {email,username,recruiter,companyname,status,image}=req.body
        console.log(status,"dfsfsjdfjsdgsdgbfdsksf");
        nodemaileremailsending(email,username,recruiter,companyname,status,image).then((response)=>{
            
            res.json({response})
            

        }).catch(()=>console.log(ErrorEvent))
    }

return{
    s3service,
    createemail
}

}
export default commonserviceController