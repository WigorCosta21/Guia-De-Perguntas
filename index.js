const express = require('express')
const app = express()

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.get('/', (req, res) => {
  res.render('index')
})



const PORT  = 3000

app.listen(PORT, (error) => error ? console.log(`Ocorreu um erro ${error}`) : console.log(`Servidor iniciado na porta ${3000}`))