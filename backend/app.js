
const express= require('express')
const mongoose=require('mongoose')
const bodyParser=require('body-parser')
const router=require('./routes/book-routes')
const cors=require('cors')


const app = express()
app.use(bodyParser.json())
app.use(cors())
app.use('/books',router)

mongoose.connect("mongodb+srv://admin:h83e89y2SS1xgump@cluster0.up31f3z.mongodb.net/bookstore"

).then(()=> console.log("connected"))
.then(()=>{
    app.listen(5000)
}).catch((error)=> console.log(error))