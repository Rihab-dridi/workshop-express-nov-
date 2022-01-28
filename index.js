//----*create a server 
//import express
const express=require('express')
const { sendFile } = require('express/lib/response')
//create an instance for express 
const app=express()
//create a port
const port=5000

//----* middleware
 //type1: third party middleware:
 const cors=require('cors')
 const multer=require('multer')


  //type2: built-in middelware 
  app.use(express.static('public'))


  //type3: custum middleware

  const middleExp=(req, res, next)=>{
console.log(' this is from the middleware ')
next()
  }
  app.use(middleExp)
//----*route 
// app.get('/', (req,res)=>{
// res.send("hello from express")
// })

app.get('/', (req,res)=>{
res.sendFile(__dirname+'/public/home.html')
})

app.use(middleExp)
app.get('/about',middleExp,  (req,res)=>{
res.sendFile(__dirname+'/public/about.html')
})




//listen to the port 
app.listen(port,(err)=>{
    err? console.log(err):
console.log(`the server is up and running on${port} `)
} )