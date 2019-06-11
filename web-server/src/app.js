const path = require('path')
const express = require('express') //exposes a single functio

//Define paths for Express configs
const publicDirectoryPath = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname, '../templates')
const app = express()

/* using this we can directly access this content fromurl by giving full path
and as the file name is index.html it also means that if we go for
root route, then express still searches for index.html if it doesnot find
rootroute configured 

All the files in the static folder can be accessed via their path
.../help.html
.../about..html
without setting up explicit app.get routes
*/
app.use(express.static(publicDirectoryPath))

//app.set allows us to set a value for given Express setting
//here we are setting our Dynamic Templating Engine handlebars
//and Express starts expecting "views"
app.set('view engine', 'hbs')
//setting views location
app.set('views', viewsPath)

//setting route for serving hbs
app.get('', (req, res)=>{
   //here we use res.render() method to serve views or hbs templates
   res.render('index', { //knows to look in "views" folder
   title: 'Weather',
   name: "Rishabh"
   })
})

app.get('/about', (req, res)=>{
   res.render('about', {
      title: 'About Me',
      name: 'Rishabh'
   })
})


app.get('/help', (req, res)=>{
   res.render('help', {
      helptext: 'Help Page text',
      name: 'Rishabh'
   })
})

/** Configuring routesfor our server
 * app.com - root
 * app.com/help - subroute
 */

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