const express=require("express")
const app=express()

const errorMiddleware=require("./middlewares/errors")

const products = require('./routes/product')
const auth=require('./routes/auth')

const cookieParser = require('cookie-parser')



app.use(express.json())
app.use(cookieParser())


app.use('/api/v1', products)
app.use('/api/v1', auth)


// do zapobieżenia erororm
app.use(errorMiddleware)




module.exports=app