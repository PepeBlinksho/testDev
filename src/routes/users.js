const express = require('express')
const router = express.Router()
const { Sequelize } = require('sequelize')
const mongoose = require('mongoose')

const sequelize = new Sequelize('test', 'user', 'password', {
  host: 'mysql',
  dialect: 'mysql',
})

const options = {
  useUnifiedTopology: true,
  useNewUrlParser: true,
}

router.get('/', async (req, res, next) => {
  try {
    console.log('start connect to Mysql')
    await sequelize.authenticate()
    console.log('Connection has been established successfully.')
  } catch (error) {
    console.error('Unable to connect to the database:', error)
  }

  try {
    console.log('start connect to Mongo')
        // await mongoose.connect('mongodb://localhost:27017/test', options)
        await mongoose.connect('mongodb://root:example@mongo:27017/', {useNewUrlParser: true})
        // const db = mongoose.connection
        // db.on('error', console.error.bind(console, 'MongoDB connection error:'))
        // db.once('open', () => console.log('MongoDB connection successful'))
        await mongoose.connection.close()
        console.log('success')
  } catch (err) {
    console.log('Unable to connect Mongo:', err)
  }
  res.send('respond with a resource')
})

module.exports = router
