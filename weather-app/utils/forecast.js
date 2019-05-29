const request = require('request')

const getWeatherForecast = (latitude, longitude, callback=undefined) => {
    const url = "https://api.darksky.net/forecast/c6f3879289c51ce92d1411e9d8ec1c0b/"+encodeURIComponent(latitude)+','+encodeURIComponent(longitude)+"?units=si&lang=en"

    request({
        url: url,
        json: true,
    },(error, response)=>{
        if(error){
            const errorString = "unable to connect to weather service"
            if(callback){
                callback(errorString, undefined)
            }else{
                console.log(errorString)
            }
        }else if(response.body.error){
            const errorString = "Server error: "+response.body.error
            if(callback){
                callback(errorString, undefined)
            }else{
                console.log(errorString)
            }
        }else{
            const responseString = response.body.daily.data[0].summary + ' It is currently '+response.body.currently.temperature+' degrees'+'\nThere is '+response.body.currently.precipProbability+' \% chance of rain'
            if(callback){
                callback(undefined, responseString)
            }else{
                console.log(responseString)
            }
        }
    })
}

module.exports = {
    getWeatherForecast: getWeatherForecast
}

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
})*/