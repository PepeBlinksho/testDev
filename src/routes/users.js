const express = require('express')
const router = express.Router()
const { Sequelize } = require('sequelize')
// const mongoose = require('mongoose')

const sequelize = new Sequelize('test', 'user', 'password', {
  host: 'mysql',
  dialect: 'mysql',
})

// const initTestSchema = new mongoose.Schema({
//   name: String,
//   age: Number
// })

// const options = {
//   useUnifiedTopology: true,
//   useNewUrlParser: true,
//   user: 'root',
//   pass: 'password',
//   dbName: 'test'
// }

router.get('/', async (req, res, next) => {
  try {
    await sequelize.authenticate()
    console.log('Connection has been established successfully.')
    // await mongoose
    //   .connect('mongodb://127.0.0.1:27017/', options)
    //   .then(() => {
    //     console.log('successfully connected to the database')
    //   })
    //   .catch((err) => {
    //     console.log('error connecting to the database')
    //     console.log(err)
    //     process.exit()
    //   })
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }
  res.send('respond with a resource')
})

module.exports = router
