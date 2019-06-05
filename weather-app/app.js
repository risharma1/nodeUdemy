const request = require('request')
const geocodeApis = require('./utils/geocode.js')
const forecastApis = require('./utils/forecast.js')

if(process.argv.length > 2){
    debugger
    const placeName = process.argv[2]
    //console.log(process.argv)
    geocodeApis.getGeocode(placeName,(error, {fullname, latitude, longitude})=>{
        if(error){
            console.log(error)
            return
        }
        console.log(fullname)
        forecastApis.getWeatherForecast(latitude, longitude)  
    })
}else{
    console.log("provide an argument \"PlaceName\" to getg weather forecast")
}


