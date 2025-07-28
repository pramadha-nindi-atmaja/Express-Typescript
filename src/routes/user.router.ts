import { Router } from 'express'
import {
  loginUser,
  refreshToken,
  registerUser,
  logoutUser
} from '../controllers/user.controller'
const userRouter = Router()

userRouter.post('/register', registerUser)
userRouter.post('/login', loginUser)
userRouter.get('/refresh', refreshToken)
userRouter.post('/logout', logoutUser)

export default userRouter