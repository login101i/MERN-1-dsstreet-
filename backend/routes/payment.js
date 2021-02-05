const express = require("express")
const router = express.Router()

const { isAuthenticatedUser, authorizeRoles } = require('../middlewares/auth')

const {
    processPayment,
    sendStripeApi

} = require("../controllers/paymentController")


router.post('/payment/process', isAuthenticatedUser, processPayment)
router.get('/stripeapi', isAuthenticatedUser, sendStripeApi
)



module.exports = router