const express =require('express')
const bodyParser=require('body-parser')
const multer = require('multer');
const fs = require('fs');
const csv = require('csv-parser');
const {workflowFunctions}=require('./workflowFunction.js')
const {wait}=require('./wait.js')

const app=express()
app.use(bodyParser.json());
const upload = multer({ dest: 'uploads/' }); // Configure multer
app.all('/',(req,res)=>{
    console.log(`Request from client  => `,req)
    console.log(`Responce from server => `,res)
    res.send("Im ready")
})


const PORT=5000

app.post('/work-flow-execution/',upload.single('file'),(req,res)=>{
    const uploadedFile = req.file;
    const uploadedObj= JSON.parse(req.body.objectData)
    
    console.log(uploadedFile)
    //console.log(uploadedObj)
    
    // console.log(req.body)
    // const newTodo=req.body	
    res.json({message:"post successfull"})
    workflowFunctions(uploadedObj,uploadedFile)
})

app.listen(PORT,()=>{
    console.log(`port started at ${PORT}`)
})
