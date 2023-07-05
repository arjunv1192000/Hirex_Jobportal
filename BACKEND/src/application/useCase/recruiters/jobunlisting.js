const jobunlist = async (jobId, repositories) => {
 

    try {


        const unlist=await repositories.jobUnlist(jobId)
       
        return { status: true,unlist }

    } catch {
        return { message: 'Error getting applicants', status: false };

    }
}
export default jobunlist