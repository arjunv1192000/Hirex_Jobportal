const Getallgraphdata = async (recruiterrepositories) => {
  

    try {
        const jobdata=await recruiterrepositories.jobscountforgraph() 
        console.log(jobdata);
    

        return { status: true,jobdata }

    } catch {
        return { message: 'Error getting all data', status: false };

    }
}
export default Getallgraphdata