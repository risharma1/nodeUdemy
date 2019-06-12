const request = require('request')

const getGeocode = (address, callback=undefined) => {
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+encodeURIComponent(address)+".json?access_token=pk.eyJ1IjoicmlzaGFybWEwNCIsImEiOiJjanczZzd5azYwYXo0M3lrbXQzanpwcDR3In0.6P8iV6IMPzLmHENdOAWwrg"
    request({
        url,
        json: true,
    },(error, response)=>{
        if(error){
            callback("Unable to connect to geocoding service", undefined)
        }else if(0 === response.body.features.length){
            callback("Cannot find any place with name: "+address, undefined)
        }else{
            //console.log(error)
            const {place_name, center} = response.body.features[0]
            //lat is at index 1
            if(callback){
                callback(undefined, {
                    fullname: place_name,
                    latitude: center[1],
                    longitude: center[0],
                })
            }
        }
    }) 
}

module.exports = {
    getGeocode: getGeocode
}

//geocoding api
//forward ge//ocoding
/*const geocodingAPIURL = "https://api.mapbox.com/geocoding/v5/mapbox.places/"
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