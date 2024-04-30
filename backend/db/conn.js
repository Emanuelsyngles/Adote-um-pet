const mongoose = require('mongoose')
const { options } = require('../routes/UserRoutes')

async function main() {
  await mongoose.connect('mongodb://localhost:27017/getapetref', options)
  console.log('Conectou com Mongoose!')
}

main().catch((err) => console.log(err))

module.exports = mongoose