// const hello = [3,4,5,6,2];

// const result  = hello.reduce(function(acc, currVal){
//     console.log(acc, currVal);
//     return 5;

// },1);


// console.log("result",result);



//This array.reduce() is used to calculate the sum of given array


// const hello  = [4,5,3,2,5];

// const result  = hello.reduce(function(preValue, currValue){
//     console.log(preValue, currValue);
//     return preValue  + currValue;
// },0)

// console.log("result" , result);


//we have to give the index number with their correponding weight 

const hello = [4,5,6,3,2];

const result =  hello.reduce(function(acc, currValue, currIndx){

    const mappedCurrentElement = {};
    mappedCurrentElement[currIndx] = currValue;

    console.log(acc);

    return Object.assign(acc, mappedCurrentElement);

},{})

console.log("result", result);



//here acc means previous value 