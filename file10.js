const person = {
    name:"kunalgaurav",
    age :32,
    address : "bihar",
}

const {name, ...restofargs} = person;

console.log( name, restofargs );