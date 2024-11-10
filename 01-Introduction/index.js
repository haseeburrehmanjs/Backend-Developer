import express from "express"
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})
app.get('/about', (req, res) => {
  res.send('this is about section')
})

const userArray = [
    {
        id : new Date(),
        name : 'haseeb ur rehman'
    },
    {
        id : new Date(),
        name : 'jawad akhtar'
    },
    {
        id : new Date(),
        name : 'ahmed'
    },
]

app.get('/services', (req, res) => {
  res.send('this is services section...')
  res.Json(userArray)
})


app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})