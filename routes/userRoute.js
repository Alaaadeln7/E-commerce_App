import express from "express"
import  { LogIn, getUser, register,updateAccount  } from "../controllers/userController.js";

const userRoute = express.Router();


userRoute.post('/register',register)
userRoute.post('/login',LogIn)
userRoute.get('/get', getUser)
userRoute.put('/update', updateAccount )
export default userRoute
