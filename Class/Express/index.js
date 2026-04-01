const express = require('express')
const app = express()
const port = 3000

// function checkRoute(req, res, next)=>{
//     console.log(req.url);
// };

app.use((req,res,next) =>{
  console.log('middleware',new Date())
});

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})


// app.use(checkRoute)
// app.get();

// app.get('/', (req, res) => {
//   res.send('Hello World!')
// })

// app.get('/about', (req, res) => {
//   res.send('<h1>Welcome to about page!</h1>')
// })

// app.get('/profile', (req, res) => {
//   res.send('<h1>Welcome to Profile page!</h1>')
// })

// app.get('/contact', (req, res) => {
//   res.send('<h1>Welcome to contact page!</h1>')
// })

// app.get('/info', (req, res) => {
//   res.send('<h1>Welcome to info page!</h1>')
// })

// app.listen(port, () => {
//   console.log(`Example app listening on port ${port}`)
// })

// // app.use{

// // }



