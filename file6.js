const name = "kunal";
const age = 34;
const err = "condition is not true";

const mycity = () => {
    return "patna";
};

const result5  = mycity();

// console.log(result5);

//string concatation
const result = "my name is " + name +  ". my age is " + age; //old method

//sting interpolation
const result2  = `my name is ${name} and my age is ${ 4>2 ? age : err}  and my city is ${result5}`;

console.log(result);
console.log(result2);