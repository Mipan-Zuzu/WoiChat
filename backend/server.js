//todo : Proses require CommonJs
const express = require('express')
const chalk = require('chalk')
const fs = require('fs')
const { get } = require('http')

const app = express()
const port = 3000

app.get('/', (req, res) => {
    res.send('Something went /GET')
})

app.get('/index.html', (res , req) => {
    fs.readFile('../index.html' , 'utf8' , (data) => {
        res.send(data)
    })
})

app.listen(port, () => {
    console.log(`now listening on ${chalk.white.bgGreenBright.bold('https//:localhost:3000')} on ${port}`)
})