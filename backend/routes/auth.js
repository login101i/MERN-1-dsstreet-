const express = require("express")
const router = express.Router()

const { registerUser, loginUser, logoutUser, forgotPassword, resetPassword} =require('../controllers/authControllers')


router.post('/register', registerUser)
router.post('/login', loginUser)
router.get('/logout', logoutUser)
router.get('/password/forgot', forgotPassword)
router.put('/password/reset/:token', resetPassword)


module.exports=router