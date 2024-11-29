// import express from 'express'
// const app = express()
// const port = 3000


// app.get('/', (req, res) => {
//     res.cookie('name', 'haseeb ur rehman js')
//     res.send('done')
// })

// app.listen(`your port is live on local host 3000 ${port}`)

import express from 'express'
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.cookie('name', 'haseeb')
  res.send('done')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})