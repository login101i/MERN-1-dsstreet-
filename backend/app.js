const express=require("express")
const app=express()

const errorMiddleware=require("./middlewares/errors")

const products = require('./routes/product')



app.use(express.json())


app.use('/api/v1', products)


// do zapobieżenia erororm
app.use(errorMiddleware)



module.exports=app