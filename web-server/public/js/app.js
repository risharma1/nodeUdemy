console.log("Client side js is loaded")

//client side js
//async io
//a browser provided feature
fetch('http://localhost:3000/weather?address=Boston').then((response) => {
    response.json().then(({error, fullname, forecast} = {}) => {
        //runs when the json has arrived and parsed
        if(error){
            console.log(error)
        }else{
            console.log(fullname)
            console.log(forecast)
        }
    })
})