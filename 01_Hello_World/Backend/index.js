import express from 'express'
const app = express()
const port = 3000

// middle wear
app.use(express())

// my first hello world api created
app.get('/', (req, res) => {
  res.send('Hello World!')
})

