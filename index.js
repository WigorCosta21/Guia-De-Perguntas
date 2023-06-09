const dotenv = require('dotenv')
const express = require('express')
const app = express()
const bodyParser = require('body-parser')
const connection = require('./database/database')

const Ask = require('./database/Ask')
const Response = require('./database/Response')

dotenv.config()

connection.authenticate()
  .then(() => console.log('conexão feita com o banco de dados'))
  .catch((error) => console.log(error))

app.set('view engine', 'ejs')
app.use(express.static('public'))

app.use(bodyParser.urlencoded({ extended: false }))
app.use(bodyParser.json())


// Routes
app.get('/', (req, res) => {

  Ask.findAll({
    raw: true, order: [
      ['id', 'DESC']
    ]
  }).then(questions => {
    res.render('index', {
      questions
    })
  })
})

app.get('/ask', (req, res) => {

  res.render('ask')
})

app.post('/savequestion', (req, res) => {
  const { title, description } = req.body

  Ask.create({ title, description })
    .then(() => res.redirect('/'))

})

app.get('/question/:id', (req, res) => {
  const { id } = req.params
  Ask.findOne({
    where: { id }
  }).then((question) => {
    if (question != undefined) {

      Response.findAll({
        where: { idQuestion: question.id },
        order: [['id', 'DESC']]
      }).then(answers => {
        res.render('question', { question, answers })
      })
    } else {
      res.redirect('/')
    }
  })
})

app.post('/respond', (req, res) => {
  const { body, idQuestion } = req.body
  Response.create({ body, idQuestion })
    .then(() => {
      res.redirect(`/question/${idQuestion}`)
    })
})


// Server
app.listen(process.env.DB_PORT, (error) => error ? console.log(`Ocorreu um erro ${error}`) : console.log(`Servidor iniciado!`))