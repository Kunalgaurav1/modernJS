const hello = [4,3,2,6];

const result = hello.map(function(value, index, array){
    console.log(value, index, array);
    //return 4;
});

console.log("result" , result);