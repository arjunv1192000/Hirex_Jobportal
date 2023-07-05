
const  jobRepositoryInf=(repository)=>{

    const createnewjob=(jobdata)=>repository.createnewjob(jobdata);
    const recruiterjobs=(recruiterId)=>repository.recruiterjobs(recruiterId)
    const singlejob=(jobId)=>repository.singlejob(jobId)
    const Updatejob=(jobdata,jobId)=>repository.Updatejob(jobdata,jobId)
    const jobApplicants=(jobId)=>repository.jobApplicants(jobId)
    const jobUnlist=(jobId)=>repository.jobUnlist(jobId)
    const jobcount=()=>repository.jobcount()
  
    

    
    

    return{
        createnewjob,
        recruiterjobs,
        singlejob,
        Updatejob,
        jobApplicants,
        jobUnlist,
        jobcount,
       
  
    }

}
export default jobRepositoryInf