const express = require('express')
const cors = require('cors')

const app = express()

app.use(express.json()) // parse content type to json
app.use(express.urlencoded({extended: true})) // aktifkan req dalam bentuk x-www-form-urlencoded

//koneksi ke db
const db = require('./app/models/index')
db.mongoose.connect(
  db.url, 
  {
    useNewUrlParser: true,
    useUnifiedTopology: true
  })
  .then(() => {
    console.log(`Database connected!`)
  }).catch((err) => {
    console.log(`Cannot connect to database!`, err)
    process.exit()
  })


app.get('/', (req, res) => {
  res.json({
    message : `Welcome to moexpress API`
  })
})

require('./app/routes/post.routes')(app)
require('./app/routes/auth.routes')(app)

const PORT = 8000

app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
})

