const express = require('express') //exposes a single function

const app = express()

/** Configuring routesfor our server
 * app.com - root
 * app.com/help - subroute
 */

 //first argument route and second is a function returning content
 app.get('', (req, res)=>{
    res.send('Hi Express! ')
 })

 app.get('/help',(req, res)=>{
    res.send('Help page.')
 })

 app.get('/about',(req,res)=>{
    res.send('About page.')
 })

 app.get('/weather',(req,res)=>{
    res.send('Weather page.')
 })

 //starting up the server
 app.listen(3000, ()=>{
    console.log("Server is up on port 3000")
 })