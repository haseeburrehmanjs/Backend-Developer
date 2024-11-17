import express from 'express'
const app = express()
const port = 3000

// middle wear
app.use(express())

// my first hello world api created
app.get('/', (req, res) => {
  res.send('Hello World!')
})

// defalut user created
const user = [
  {
    id : new Date(),
    userName : 'haseeb ur rehman'
  }
]

app.get('/users', (req, res) => {
  res.send(user)
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})