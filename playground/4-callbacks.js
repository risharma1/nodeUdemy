//An async callback function usage
setTimeout(()=>{
    console.log("2 seconds are up")
}, 2000)

const names = ["rishabh", "rishu", "rishi"]
//a synchronous callback function usage
const shortNames = names.filter((name)=>{
    return name.length>5
})

console.log(shortNames)

const geocode = (address, callback) => {
    setTimeout(()=>{
        const data = {
            latitude: 0,
            longitude: 0,
        }
        callback(data);
    }, 2000)
}

geocode('New Delhi',(data)=>{
    console.log(data)
})
//simple mead challenge


const add = (first, second, callback) => {
    setTimeout(()=>{
        callback(first+second)
    }, 2000)
}

add(1, 4, (sum) => {
    console.log(sum) // Should print: 5
})

