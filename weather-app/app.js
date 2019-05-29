const request = require('request')
const geocodeApis = require('./utils/geocode.js/index.js')
const forecastApis = require('./utils/forecast.js/index.js')

geocodeApis.getGeocode('Bengaluru',(error, response)=>{
    if(error){
        console.log(error)
    }else{
        console.log(response.fullname)
        forecastApis.getWeatherForecast(response.latitude, response.longitude)
    }
})
