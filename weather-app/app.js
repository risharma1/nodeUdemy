const request = require('request')
const geocodeApis = require('./utils/geocode.js/index.js')
const forecastApis = require('./utils/forecast.js/index.js')
/* //weather api
const weatherForecastApiURL = 'https://api.darksky.net/forecast/c6f3879289c51ce92d1411e9d8ec1c0b/'
const lat = '37.8267'
const long = '-122.4233'
const forecastURLWithCoordinates = weatherForecastApiURL+lat+','+long
const optionalParam = '?units=si&lang=en'

Weatherforecast
request({
    url: forecastURLWithCoordinates+optionalParam,
    json: true, //using this our request package will parse the response assuming its json
}, (error, response) => {
    if(error){
        //only one of error or response are populated
        //the other one is undefined
        console.log("unable to connect to weather service")
    }else if(response.body.error){
        console.log("Server error: ",response.body.error)
    }else{
        console.log(response.body.daily.data[0].summary + ' It is currently %s degrees', response.body.currently.temperature)
        console.log('There is %s \% chance of rain', response.body.currently.precipProbability)
        //console.log(response.body.currently)
    }
})
 
//geocoding api
//forward ge//ocoding
const geocodingAPIURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/"
const place = "Bengaluru"
const tokenString = ".json?access_token=pk.eyJ1IjoicmlzaGFybWEwNCIsImEiOiJjanczZzd5azYwYXo0M3lrbXQzanpwcDR3In0.6P8iV6IMPzLmHENdOAWwrg"
const optionalParam2 = "&limit=1"

request({
    url: geocodingAPIURL+place+tokenString+optionalParam2,
    json: true
}, (error, response)=>{
    if(error){
        console.log("unable to connect to geocoding service")
    }else if(0 === response.body.features.length){
        console.log("Cannot find any place with this name!")
    }else{
        //console.log(error)
        const feature = response.body.features[0]
        console.log("Place full Name: %s",feature.place_name)
        //lat is at index 1
        console.log("Co-ordinates: %s Lat, %s Long", feature.center[1], feature.center[0])
    }
}) */
geocodeApis.getGeocode('Bengaluru',(error, response)=>{
    if(error){
        console.log(error)
    }else{
        console.log(response.fullname)
        forecastApis.getWeatherForecast(response.latitude, response.longitude)
    }
})
