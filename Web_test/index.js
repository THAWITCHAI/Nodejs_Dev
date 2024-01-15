const express = require('express')
const ejs = require('ejs')
const app = express()
const port = 3000

app.get('/', (req, res)=>{
    res.render('index.ejs')
})


app.listen(port, () => {
    console.log(`Example app listening on port ${port}!`)
})