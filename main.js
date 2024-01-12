const express=require('express')
const app=express();

const PORT=process.env.PORT||8000

app.get('/',(req,res)=>{
    return res.json({message:"Hey I m Nodejs in Container"})
})
app.get(PORT,()=>console.log(`Server Listening at Port ${PORT}`))