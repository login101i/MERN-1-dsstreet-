const Product = require('../models/product')

const ErrorHandler=require("../utils/ErrorHandler")
const catchAsynchErrors=require("../middlewares/catchAsyncErrors")


// Create new product   =>   /api/v1/admin/product/new
exports.newProduct =catchAsynchErrors(async (req, res, next) => {

    const product = await Product.create(req.body);

    res.status(201).json({
        success: true,
        product
    })
})

// Create new product   =>   /api/v1//products

exports.getProducts = catchAsynchErrors( async (req, res, next) => {

    const products = await Product.find()

    res.status(200).json({
        success: true,
        count: products.length,
        products
    })

})


// Create new product   =>   /api/v1//product/:id

exports.getSingleProduct = catchAsynchErrors(async (req, res, next) => {

    const product = await Product.findById(req.params.id)

    if (!product) {
       return next(new ErrorHandler("Nie odnaleziono produktu", 404))
    }

    res.status(200).json({
        success: true,
        product
    })

})

// Update Product   =>   /api/v1/admin/product/:id
exports.updateProduct = catchAsynchErrors(async (req, res, next) => {

    let product = await Product.findById(req.params.id);

    if (!product) {
        return next(new ErrorHandler("Nie odnaleziono produktu takiego produktu do zaktualizowania", 404))

    }

    product = await Product.findByIdAndUpdate(req.params.id, req.body, {
        new: true,
        runValidators: true,
        useFindAndModify: false
    });

    res.status(200).json({
        success: true,
        product
    })

})

// Delete Product   =>   /api/v1/admin/product/:id
exports.deleteProduct = catchAsynchErrors(async (req, res, next) => {

    let product = await Product.findById(req.params.id);

    if (!product) {
        return next(new ErrorHandler("Nie odnaleziono produktu do usunięcia", 404))

    }

    product = await product.remove()
    res.status(200).json({
        message: "Pomyślnie usunięto poniższy produkt",
        product
    })
})

