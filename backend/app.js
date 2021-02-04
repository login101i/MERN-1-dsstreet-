const express=require("express")
const app=express()

const errorMiddleware=require("./middlewares/errors")

const products = require('./routes/product')
const auth=require('./routes/auth')
const order=require('./routes/order')

const cookieParser = require('cookie-parser')

// Wpisujemy przy tworzeniu rejestracji użytkowniaka
const bodyparser=require('body-parser')
const fileUpload = require('express-fileupload')




app.use(express.json())
app.use(cookieParser())
app.use(bodyparser.urlencoded({extended:true}))
app.use(fileUpload());


// ustawienia cloudinary przy Tworzeniu rejestracji użytkownika na frontcie


app.use('/api/v1', products)
app.use('/api/v1', auth)
app.use('/api/v1', order)


// do zapobieżenia erororm
app.use(errorMiddleware)




module.exports=app