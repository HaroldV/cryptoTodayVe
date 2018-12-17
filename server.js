const express = require('express')
const path = require('path')
const bodyParser = require('body-parser')
const app = express()
const Pusher = require('pusher')
const axios = require('axios')

// Initialize Pusher 
var pusher = new Pusher({
  app_id: '648802',
  key: 'f36887d03f799d430834',
  secret: 'bdd0d5291d99adc20fa8',
  cluster: 'us2',
  encrypted: true
})

// Body parser middleware
app.use(bodyParser.json)
app.use(bodyParser.urlencoded({extended: false}))

// CORS middleware
app.use((req,res,next) => {
  res.setHeader('Access-Control-Allow-Origin', '*')
  res.setHeader('Access-Control-Allow-Credentials', true)
  res.setHeader('Access-Control-Allow-Methods', 'GET','POST','OPTIONS')
  res.setHeader('Access-Control-Allow-Headers', 'X-Requested-With, content-type')
  next()
})

// routes
app.get('/', _ => res.send('Welcome'))

// Simulated Cron
setInterval(_ => {
  let url = 'https://min-api.cryptocompare.com/data/pricemulti?fsyms=BTC,ETH,LTC&tsyms=USD'

  axios.get(url).then(res => {
    pusher.trigger('prices-updates','coin-updates',{ coin: res.data })
  })
},5000)

// start app
app.listen(8000, () => console.log('App running port 8000!'))

