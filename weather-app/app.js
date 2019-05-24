const request = require('request')

const urlWithKey = 'https://api.darksky.net/forecast/c6f3879289c51ce92d1411e9d8ec1c0b/'

const lat = '37.8267'
const long = '-122.4233'

request({
    url: urlWithKey+lat+','+long,
    json: true, //using this our reuqest package will parse the response assuming its json
}, (error, response) => {
    console.log(response.body.currently)
    //debugger
    //const data = JSON.parse(response.body)
    //console.log(data.currently)
})