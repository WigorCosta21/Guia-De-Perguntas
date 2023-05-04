const Sequelize = require('sequelize')
const connection = require('./database')

const Response = connection.define('answers', {
  body: {
    type: Sequelize.TEXT,
    allowNull: false
  },
  idQuestion: {
    type: Sequelize.INTEGER,
    allowNull: false
  }
});

Response.sync({force: false}).then(()=>{})

module.exports = Response