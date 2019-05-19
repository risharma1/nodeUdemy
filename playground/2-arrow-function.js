// const square = function (x) {
//     return x*x
// }
//ARROW FUNCTION
const square = (x) => { return x * x }
console.log(square(3))


// const trial = function(a,b){
//     console.log(a+b(2))
// }
// trial(3,(x)=> x*x)


/**Defining obejct and using 'this'
 * If we use  an arrow function to use member variable or functions
 * they wont bind to 'this' keyword, sort of like macro thing
 */
const event = {
    name: 'Birthday Party',
    //1 Standard way, will work
    // printGuestList: function () {
    //     console.log('Guest list for ' + this.name)
    // }
    //2 arrow function, will not work
    //printGuestList: ()=>{console.log('Guest list for ' + this.name)}
    //ES6 way to retain function features
    guestList: ['G1', 'G2','G3'],
    printGuestList() {
        console.log('Guest list for ' + this.name)
        /**standard function has its own this binding thats why when creating 
         * them locally, and may not use 'this' binding of parent functions
         * resulting in undefined variables and functions, it might be calling using this
         */
        //this.guestList.forEach(function(guestname){console.log(guestname +'is attending '+this.name)})
        /**Using an arrow function with no 'this' binding of its own can help here */
        this.guestList.forEach((guestname)=>{console.log(guestname +'is attending '+this.name)})
    }
}

event.printGuestList()

