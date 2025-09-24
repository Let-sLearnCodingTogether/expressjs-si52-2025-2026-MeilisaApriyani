import express from "express"

const web = express.Router()

web.get('/', (req, res) => {
    res.render('index')
})

web.get('/username', (req, res) => {
    const username = req.params.username
   res.render('public-profile',{
    title : username
    })
})

export default web