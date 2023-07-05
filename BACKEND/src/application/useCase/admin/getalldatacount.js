const GetalldataCount = async (userrepositories,recruiterrepositories,jobrepositories) => {
  

    try {
        console.log("haiiiiiiiii2222");

        const user=await userrepositories.usercount()
        const recruiter=await recruiterrepositories.recruitercount() 
        const jobs=await jobrepositories.jobcount()
        console.log(user,recruiter,jobs,"kkkkk");
       
   

        return { status: true,user,recruiter,jobs }

    } catch {
        return { message: 'Error getting all data', status: false };

    }
}
export default GetalldataCount