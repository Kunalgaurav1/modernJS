function somefunc1(args1, args2, args3, args4){
    console.log(args1, args2, args3, args4)
}

//by {...}  you can access all the parameters at once 
function somefunc(args1,args2, ...restofargs){   // we are providng arguments 
//console.log(args1,args2, restofargs);
}
somefunc("hello", "kunal", 33, ()=> { console.log()}, 3);  //parameters we passing 



//making a object
const person = {
    name : "kunalgaurav",
    age :32,
    address : "gohana"
}
//object destructing
//  const {...restofagrs} = person;
// console.log( restofagrs);





//creating objects
const female = {
    // name: "chahal",
    // age : 23,
    // address : "haryana",
    hobby : "insta stories",
    relation: "friend",
}
//destructing object so that it can be accessible 
// const { ...restofargs} = female;
// console.log(restofargs);





//destructring the array
const somearr = [3,4,5,6,3];
const [e1, e2, ...restofsomearr] = somearr;
// console.log(e1,e2,restofsomearr);




//merging two different objects 
//for merging we use spread to merge the objects 
const mergeobj = {...female , ...person};
console.log(mergeobj);

//IMPORTANT POINT 
//when we are merging two objects if the both object have same fiels then 2nd object's field will override the 1st field 
//when using differents field for different objects then it will be beneficial 





const person3 = {
    name: "raushan",
    age : 23,
    color : "fair"
}

const person4 = {
    name : "vicky",
    age :22,
    color : "dark",

    person3,
}

console.log(person4);





//mergin arrays by using spread

const arr1 = [3,4,5,7,8];
const arr2 = [9,1,44,55];

//const mergearr = [...arr2,...arr1 ]
const mergearr = [arr1, arr2]
console.log(mergearr);
