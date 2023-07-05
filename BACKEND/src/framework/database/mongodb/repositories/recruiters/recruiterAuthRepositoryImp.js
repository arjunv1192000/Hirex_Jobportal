import recruiterdata from "../../models/recruitermodels/recruiterModels.js";

 const  recruiterAuthRepositoryImp=()=>{

    const recruiterExist=(email)=> recruiterdata.findOne({email:email});

    
    const createrecruiter=(recruiter)=>{
        const newuser=new recruiterdata({
            companyname:recruiter?.getcompanyname(),
            name:recruiter?.getname(),
            email:recruiter?.getemail(),
            password:recruiter?.getpassword(),
            image:recruiter?.getimage(),
            profile: false,
            isBlock:false

        })
        return newuser.save()


       

    } 

    const profile = async (recruiterId) => {
        try {
          const data = await recruiterdata.findById(recruiterId);
      
          if (!data) {
            throw new Error('Job not found');
          }
      
          data.profile = true;
          const updatedData = await data.save();
      
          return updatedData;
        } catch (error) {
          throw error;
        }
      };

      const recruiterData = async (recruiterId) => {

         
        return await recruiterdata.findOne({ _id: recruiterId })
      }


      const recruiterDatas = async () => {
        return await recruiterdata.find();
      }

      const blockrecruiter = async (recruiterId) => {
        console.log(recruiterId);
        try {
        
          const recruiter = await recruiterdata.findById(recruiterId);
          console.log(recruiter);
    
          if (!recruiter) {
           
            throw new Error('user not found');
          }
    
         
          recruiter.isBlock =true;
          const updateduser = await recruiter.save();
    
          return updateduser;
        } catch (error) {
          throw error;
        }
      };

      const unblockrecruiter = async (recruiterId) => {
        console.log(recruiterId);
        try {
        
          const recruiter = await recruiterdata.findById(recruiterId);
          console.log(recruiter);
    
          if (!recruiter) {
           
            throw new Error('user not found');
          }
    
         
          recruiter.isBlock =false;
          const updateduser = await recruiter.save();
    
          return updateduser;
        } catch (error) {
          throw error;
        }
      };

      const recruitercount = async () => {
        return await recruiterdata.find().countDocuments();
      }

      const jobscountforgraph = async () => {
        console.log("keriiii");
        try {
          const recruitersWithJobCount = await recruiterdata.aggregate([
            {
              $lookup: {
                from: "jobs",
                localField: "_id",
                foreignField: "recruiterId",
                as: "jobs",
              },
            },
            {
              $project: {
                companyname: 1,
                jobCount: { $size: "$jobs" },
              },
            },
          ]);
      
          console.log(recruitersWithJobCount);
          return recruitersWithJobCount;
        } catch (error) {
          console.error("Error fetching recruiter data:", error);
          return [];
        }
      };
      
    

    return{
        recruiterExist,
        createrecruiter,
        profile,
        recruiterData,
        recruiterDatas,
        blockrecruiter,
        unblockrecruiter,
        recruitercount,
        jobscountforgraph

    }
}


export default recruiterAuthRepositoryImp 