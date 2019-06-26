console.log("Client side js is loaded")

// //client side js
// //async io
// //a browser provided feature
// fetch('http://localhost:3000/weather?address=Boston').then((response) => {
//     response.json().then(({error, fullname, forecast} = {}) => {
//         //runs when the json has arrived and parsed
//         if(error){
//             console.log(error)
//         }else{
//             console.log(fullname)
//             console.log(forecast)
//         }
//     })
// })

const weatherForm = document.querySelector('form')
const searchBox = document.querySelector('input')

//selecting paragraphs
const messageOne = document.querySelector('#message-error')
const messageTwo = document.querySelector('#message-success')

weatherForm.addEventListener('submit', (e) =>{
    e.preventDefault() //prevents default behavior to refresh the browser on formsubmit
    
    const location = searchBox.value
    //console.log(location)

    messageOne.textContent = "LOADING...."
    messageTwo.textContent = ''
    //change url to point to relative positionwhen hosted on cliud
    fetch('/weather?address='+location).then((response) => {
    response.json().then(({error, fullname, forecast} = {}) => {
        //runs when the json has arrived and parsed
        if(error){
            messageOne.textContent = error
            messageTwo.textContent = ''
        }else{
            messageOne.textContent = fullname+forecast
            messageTwo.textContent = ''
        }
    })
})
})