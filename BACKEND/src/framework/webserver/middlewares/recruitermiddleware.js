import authServiceImp from "../../services/recruiters/authServiceImp.js";
import authServiceInterface from "../../../application/services/recruiters/authServiceInt.js";


const authMiddleware = async (req, res, next) => {
    let token = req.header('authorization');
    console.log(token);
    const authService = authServiceInterface(authServiceImp());
    if (req.headers.authorization && req.headers.authorization.startsWith('Bearer')) {
      token = req.headers.authorization.split(' ')[1];
      console.log(token, 'token in authorization');
    }
    try {
      const decoded = await authService.verifyAccessToken(token);
      req.user = decoded.id;
      next();
    } catch (error) {
      console.log(error, 'its the error');
      error.status = 401;
      next(error);
    }
  }
  
  export default authMiddleware;
  