import express from 'express'
import dotenv from 'dotenv'
import router from './routes/index.js';




dotenv.config();

const app=express();

app.use(express.json())
app.use(router)

const http =process.env.HTTP
const mode=process.env.MODE
const port=process.env.PORT || 3000

if(mode === 'development'){
    app.listen(port,()=>{
        console.log(`Server is running on ${http}:${port}`)
    })
}else{


    app.listen(port,()=>{
        console.log(`Server is running on ${http}:${port}`)
    })
}
