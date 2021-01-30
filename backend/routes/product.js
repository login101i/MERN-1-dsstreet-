const express = require("express")
const router = express.Router()

const { isAuthenticatedUser, authorizeRoles}=require('../middlewares/auth')

const { 
    getProducts,
    newProduct,
    getSingleProduct,
    updateProduct,
    deleteProduct,
    
} = require("../controllers/productControllers")


router.get('/products', getProducts)
router.post('/admin/product/new', isAuthenticatedUser, authorizeRoles('admin'), newProduct)
router.get('/product/:id', getSingleProduct)
router.put('/admin/product/:id', isAuthenticatedUser, authorizeRoles('admin'),updateProduct)
router.delete('/admin/product/:id', isAuthenticatedUser, authorizeRoles('admin'),deleteProduct)



module.exports = router