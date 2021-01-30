const express = require("express")
const router = express.Router()

const { isAuthenticatedUser, authorizeRoles}=require('../middlewares/auth')

const { 
    getProducts,
    newProduct,
    getSingleProduct,
    updateProduct,
    deleteProduct,
    createProductReview,
    getProductReviews,
    deleteReview
    
} = require("../controllers/productControllers")


router.get('/products', getProducts)
router.post('/admin/product/new', isAuthenticatedUser, authorizeRoles('admin'), newProduct)
router.get('/product/:id', getSingleProduct)
router.put('/admin/product/:id', isAuthenticatedUser, authorizeRoles('admin'),updateProduct)
router.delete('/admin/product/:id', isAuthenticatedUser, authorizeRoles('admin'),deleteProduct)


router.put('/review', isAuthenticatedUser, createProductReview)
router.get('/reviews', isAuthenticatedUser, authorizeRoles('admin'), getProductReviews)
router.delete('/review', isAuthenticatedUser, authorizeRoles('admin'), deleteReview)

// params piszemy w adresie dodając :, ale już req.query już nie ..



module.exports = router