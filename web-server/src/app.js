const path = require('path')
const express = require('express') //exposes a single function
const hbs = require('hbs')
const geocodeApis = require('./utils/geocode')
const forecastApis = require('./utils/forecast')

//Define paths for Express configs
const publicDirectoryPath = path.join(__dirname,'../public')
const viewsPath = path.join(__dirname, '../templates/views')
const partialsPath = path.join(__dirname, '../templates/partials')


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

hbs.registerPartials(partialsPath)

//setting route for serving hbs
app.get('', (req, res) => {
   //here we use res.render() method to serve views or hbs templates
   res.render('index', { //knows to look in "views" folder
   title: 'Weather',
   name: "Rishabh Sharma"
   })
})

app.get('/about', (req, res) => {
   res.render('about', {
      title: 'About Me',
      name: 'Rishabh Sharma'
   })
})


app.get('/help', (req, res) => {
   res.render('help', {
      helptext: 'Help Page text',
      title: 'Help',
      name: 'Rishabh Sharma'
   })
})

/** Configuring routesfor our server
 * app.com - root
 * app.com/help - subroute
 */

app.get('/weather', (req,res) => {
   const address = req.query.address
   if (!address) {
      return res.send({
          error: 'You must provide an address'
       })
    }
    //Destructuring works only on source objects which are not undefined
    geocodeApis.getGeocode(address,(error, geocode)=>{
      if(error){
         return res.send({ error })
      }
      forecastApis.getWeatherForecast(geocode.latitude, geocode.longitude, (error, forecast)=>{
         if(error){
            return res.send({ error })
         }
         res.send({
            fullname: geocode.fullname,
            forecast
         })
      })  
  })
   
})

 app.get('/products', (req, res) => {
    if (!req.query.search) {
      return res.send({
          error: 'You must provide a search term.'
       })
    }
   res.send({
      products:[]
   })
 })

 //if we want to customize the subroute pages
 app.get('/help/*', (req, res) => {
    res.render('404',{
       title: '404',
       errorMessage:'Help article not found',
       name: 'Rishabh Sharma'
   })
 })

//rest of the routes that didnt match above
//express route match works like switch while comparing routes for requests
//we can think of this wildcard route as default case
 app.get('*', (req, res) => {
   res.render('404',{
      title: '404',
      errorMessage: 'Page Not Found!',
      name:'Rishabh Sharma'
   })
 })

 //starting up the server
 app.listen(3000, () => {
    console.log("Server is up on port 3000")
 })