const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send(`This is a root`);
})

app.get('/user', (req, res) => {
  res.send(`This is a user page`);
})

app.get('/home', (req, res) => {
  res.send(`This is a home page`);
})

app.get('/index', (req, res) => {
  res.send(`This is a index page`);
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})

app.use((res,req,next)=>(
    console.log('request recive',new Date()),
    next()  // move to next step 
))

// Routing means deciding what response to send for diffrent URLs.

//Middleware
//  - middleware is a function that returns before sending the response.
//  - check Data, log info, authnticate User.
// Ex
//  app.use((res,req,next) ->(
//     console.log('request recive',new Date()),
//     next()  // move to next step 
//  ))
