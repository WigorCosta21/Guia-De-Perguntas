const express = require('express')
const app = express()
const bodyParser = require('body-parser')

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.use(bodyParser.urlencoded({extended: false}))
app.use(bodyParser.json())


// Routes
app.get('/', (req, res) => {
  res.render('index')
})

app.get('/ask', (req, res) => {

  res.render('ask')
})

app.post('/savequestion', (req, res) => {
  const { title, description } = req.body

  res.send(`Formulário recebido: Título ${title} - Descrição ${description}`)
})


// Server
const PORT  = 3000

app.listen(PORT, (error) => error ? console.log(`Ocorreu um erro ${error}`) : console.log(`Servidor iniciado na porta ${3000}`))