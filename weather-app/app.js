const request = require('request')

const urlWithKey = 'https://api.darksky.net/forecast/c6f3879289c51ce92d1411e9d8ec1c0b/'

const lat = '37.8267'
const long = '-122.4233'

const optionalParam = '?units=si'

request({
    url: urlWithKey+lat+','+long+ optionalParam,
    json: true, //using this our reuqest package will parse the response assuming its json
}, (error, response) => {
    console.log('It is currently %s degrees', response.body.currently.temperature)
    console.log('There is %s \% chance of rain', response.body.currently.precipProbability)
    console.log(response.body.currently)
})