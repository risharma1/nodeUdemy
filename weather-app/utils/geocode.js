const request = require('request')

const getGeocode = (address, callback=undefined) => {
    const url = "https://api.mapbox.com/geocoding/v5/mapbox.places/"+encodeURIComponent(address)+".json?access_token=pk.eyJ1IjoicmlzaGFybWEwNCIsImEiOiJjanczZzd5azYwYXo0M3lrbXQzanpwcDR3In0.6P8iV6IMPzLmHENdOAWwrg"
    request({
        url: url,
        json: true,
    },(error, response)=>{
        if(error){
            callback("Unable to connect to geocoding service", undefined)
        }else if(0 === response.body.features.length){
            callback("Cannot find any place with name: "+address, undefined)
        }else{
            //console.log(error)
            const feature = response.body.features[0]
            //lat is at index 1
            if(callback){
                callback(undefined, {
                    fullname: feature.place_name,
                    latitude: feature.center[1],
                    longitude: feature.center[0],
                })
            }
        }
    }) 
}

module.exports = {
    getGeocode: getGeocode
}