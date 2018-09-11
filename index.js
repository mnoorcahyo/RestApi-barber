require("dotenv").config()

const PORT = process.env.PORT||3000
const express = require('express')
const logger = require('morgan')
const bodyParser=require ('body-parser')
const cors = require('cors')

const barbershop_list = require("./api/barbershop_list")
const index = require("./api")

const app = express()

app.use(logger('dev'))
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({extended: false}))
app.use(cors())


app.use('/', index)
app.use("/barbershop_list", barbershop_list )


app.listen(PORT,() => console.log(`Application Running on port ${PORT}`))
