const express = require('express')
const app = express()
const { products } = require('./data')
app.get('/', (req, res) => {
  res.json(products)
})

app.listen(5000, () => {
  console.log('Server is listening on port 5000....')
})


// express has 2 following options: to set up APIs or template with server side rendering (SSR)
// API: setting up http interface to interact with data
// data is sent using json (javascript object notation)
// send response with res.json() method


//SSR: send entire template ourselves; html, css, javascript
// send this with res.render() method