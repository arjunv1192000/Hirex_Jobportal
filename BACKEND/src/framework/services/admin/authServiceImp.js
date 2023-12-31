import bcrypt from 'bcrypt';
import jwt from 'jsonwebtoken';
import config from '../../../config/config.js';
const authServiceImp=()=>{
    const bcryptpassword= async(password)=>{
        const salt=await bcrypt.genSalt(10);
        const hashpassword=await bcrypt.hash(password,salt);
        return hashpassword

    }
    
    const comparePassword = (password, hashPassword) => bcrypt.compare(password, hashPassword);
    const generateAccessToken=(admin)=>jwt.sign({admin},config.ACESS_TOKEN_SCERET,{expiresIn:'20m'})
    const generatRefreshToken=(admin)=>jwt.sign({admin},config.REFRESH_TOKEN_SECRET,{expiresIn:"7d"})
    const verifyAccessToken = (token) => jwt.verify(token, config.ACESS_TOKEN_SCERET);
    const verifyRefreshToken=(token)=>jwt.verify(token,config.REFRESH_TOKEN_SECRET)

    return{
        bcryptpassword ,
        comparePassword,
        generateAccessToken,
        generatRefreshToken,
        verifyAccessToken,
        verifyRefreshToken
    }

}
export default authServiceImp 