//http requests without request module
const  http = require('http')
const https = require('https')

const latitude = 12
const longitude = 45
const url = "https://api.darksky.net/forecast/c6f3879289c51ce92d1411e9d8ec1c0b/"+encodeURIComponent(latitude)+','+encodeURIComponent(longitude)+"?units=si&lang=en"

//raw request function returns a request object
const request = https.request(url, (response) => {
//callback on a bit lower level
//We DONT get the full response instead individual chunks of response
//We got to handle the separately and make sure we have a full response

    let data = '' //let allows modifying values

//response.on allows us to register handlers on events using argument
    response.on('data', (chunk) => {
        //console.log(chunk) //printsbytes in hex
        data = data + chunk.toString()
    })

    response.on('end', ()=>{
        console.log(JSON.parse(data))
    })
})

request.on('error',(error)=>{
    console.log('An error has occurred: ',error)
})

request.end() //start a request by saying we are done with it