const express = require('express')
const morgan=require('morgan')
const app = express()
const myMiddleware=require('./middleware/customMiddle')

//middleware
app.use(express.json())
//custome midleware
app.use(function(req,res,next){
    console.log('Middleware checking');
    next()
})

app.use((req,res,next)=>{
console.log('custome middleware');
next()
})

//import middleware from other folder
app.use(myMiddleware)

//install thirdparty middleware
app.use(morgan())

let companys=[
    {id:1,name:'VVT'},
    {id:2,name:'Google'},
    {id:3,name:'Microsoft'},
    {id:4,name:'FaceBook'},
    {id:5,name:'ThoughtWorks'},
]
app.get('/',(req,res) => {
    res.send('Hello from express')
})

app.get('/check',(req,res)=>{
    res.send('Checking without nodemon')
})

app.get('/nodemon',(req,res)=>{
    res.send('its working')
})

app.get('/contact',(req,res)=>{
    res.send('unnalmuiyum6@gmail.com')
})

//routing parameters

app.get('/names/:id?',(req,res)=>{
    if(req.params.id==1){
        res.send("Kirubha")
    }
    else if(req.params.id==2){
        res.send('Sowmy')
    }
    else{
        res.send('KirubhaSowmy')
    }
    console.log(req.params,req.params.id);
})

//multi parametere
app.get('/company/:name',(req,res)=>{
    const findCompany=companys.find(cmp=>cmp.name===req.params.name)
    if(!findCompany)res.status(404).send('Something went wrong')
    res.send(findCompany.id.toString())
})

//post method
app.post('/companyadd',(req,res)=>{
let newCompany={
    id:companys.length+1,
    name:req.body.name
}
companys.push(newCompany)
res.send(newCompany)
})

//put method
app.put('/updatecompany/:id',(req,res)=>{
    const companyId = parseInt(req.params.id)
    const findCompany=companys.find(cmp=>cmp.id===companyId)
    if(!findCompany)res.status(404).send('Something went wrong')
    findCompany.name=req.body.name
    res.send(findCompany)
})

//deleet method 1

// app.delete('/deletecompany/:name',(req,res)=>{
//     const deleted=companys.filter(cmp=>cmp.name !== req.params.name)
//     companys=deleted
//     res.send(companys)
// })

//delete method 2
app.delete('/deletecompany/:id',(req,res)=>{
    const deleted = companys.findIndex(cmp=>cmp.id=== parseInt(req.params.id))
    if(deleted === -1){
        res.send('Company not found')
    }
    companys.splice(deleted,1)
    res.send(companys)
})

app.get('/companyadd',(req,res)=>{
    res.send(companys)
})

const port=process.env.port || 3300

app.listen(port,()=>{console.log(`Port is running on ${port}`);})

