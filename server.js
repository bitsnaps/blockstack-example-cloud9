const express = require('express')  
const opn = require('opn')

const app = express()  
const port = process.env.PORT; // 5000
const ip = process.env.IP;

function allowCrossDomain(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*')
  res.header('Access-Control-Allow-Methods', 'GET,PUT,POST,DELETE')
  res.header('Access-Control-Allow-Headers', 'Content-Type')
  next()
}

app.use(allowCrossDomain)
app.use('/', express.static(__dirname + '/public'))
app.listen(port, (err) => {  
  if (err) {
    return console.log('something bad happened', err)
  }
  console.log(`server is listening on http://${ip}:${port}`)
  opn('http://'+ip+':'+port)
})