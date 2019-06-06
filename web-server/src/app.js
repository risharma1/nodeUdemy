const path = require('path')
const express = require('express') //exposes a single functio

const publicDirectoryPath = path.join(__dirname,'../public')
const app = express()

/* using this we can directly access this content fromurl by giving full path
and as the file name is index.html it also means that if we go for
root route, then express still searches for index.html if it doesnot find
rootroute configured */
app.use(express.static(publicDirectoryPath))

/** Configuring routesfor our server
 * app.com - root
 * app.com/help - subroute
 */

 //first argument route and second is a function returning content
 app.get('/help',(req, res)=>{
    res.send('Help page.')
 })

 app.get('/about',(req,res)=>{
    res.send({
        name: 'rishabh',
        age: 26
    })
 })

 app.get('/weather',(req,res)=>{
    res.send({
        forecast: 'its raining',
        location: 'Bengaluru'
    })
 })

 //starting up the server
 app.listen(3000, ()=>{
    console.log("Server is up on port 3000")
 })