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