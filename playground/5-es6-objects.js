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
const {label, stock, rating} = product 

console.log(label+" "+stock)
console.log(rating) //no property in source prdouct

//renaming properties while copying
const {label:productLabel} = product
console.log(productLabel)

//setting up default propertyif object doesnt have it
//for prop "rating"
//the object property values is used if  object has it
const {productRating = 5} = product
console.log(productRating)

//Passing by destructuring
const transaction = (type, {label, price,stock}) => {
    console.log(type, label, stock)
}

transaction('order', product)