const path = require('path')
const express = require('express') //exposes a single function

console.log(__dirname)
//platform independent core path module
console.log(path.join(__dirname,'../public'))

const publicDirectoryPath = path.join(__dirname,'../public')
const app = express()

app.use(express.static(publicDirectoryPath))

/** Configuring routesfor our server
 * app.com - root
 * app.com/help - subroute
 */

 //first argument route and second is a function returning content
 app.get('', (req, res)=>{
    res.send('<h1>Weather</h1>')
 })

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