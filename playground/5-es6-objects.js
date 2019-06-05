//Object property shorthand syntax

const name = "rishabh"
const userAge= 26

//if property name is same as the variable that its value is coming from 
//then we can only use the name of the variable as below property "name"
const user = {
    name,
    age: userAge,
    location: "Bengaluru"
}

console.log(user)

// Object destructuring
//Helpful while accessing properties from objects
//into indivudual variables

const product = {
    label: "Red notebook",
    price: 3,
    stock: 201,
    salePrice: undefined //not on sale yet
}

// const label = product.label
// const stock = product.stock

//Destructuring syntax
//resembles the type casting to base type 
//so it keeps a few and throws aways others
const {label, stock} = product 

console.log(label+" "+stock)