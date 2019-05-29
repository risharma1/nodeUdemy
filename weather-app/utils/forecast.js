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