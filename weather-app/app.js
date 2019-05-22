console.log('Starting')

//basic async behavior
setTimeout( () => {
    console.log('2 second timer')
}, 2000)

setTimeout(()=>{
    console.log('0 second timer')
}, 0) //comesafter the following sync commandds even if its just 0 sec wait


console.log('Stopping')