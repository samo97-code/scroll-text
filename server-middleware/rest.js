const express = require('express')

const app = express()
app.use(express.json())
app.use(express.urlencoded({ extended: false }))

app.post('/api/save', (req, res) => {

  const stateOnTexts = {
    'idOne': req.body.idOne
  }
  res.json({ link: `/?id=${stateOnTexts.idOne}` })
})


module.exports = app
