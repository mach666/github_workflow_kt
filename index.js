const express=require('express')
const app=express()
const PORT= process.env.PORT || 8000




app.get('/',(req,res)=>{
    res.status(200).send(" This is Show and Tell on Github Actions")
})




app.listen(PORT,()=>{
    console.log(`Server is up at 127.0.0.1:${PORT}`)
})

module.exports=app