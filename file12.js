//pending
//resolve
//rejected



// const dosome = new Promise((resolve, rejected)=>{
//     resolve("hello");
//     //rejected(new Error('promise rejected'));
// });

//console.log(dosome); //return promise object

//for returning  promise value  
// dosome.then((resolvedValue)=>{
//     console.log(resolvedValue);

// }) //used when resolving 

// dosome
// .then((resolvedValue)=>{
//     console.log(resolvedValue);
// })
// //multiple promises
// .then((val)=>{
//     console.log("value in 2nd");
// })
// .then((val2)=>{
//     console.log("value in 3rd");
// })
// .catch((err)=>{
//     console.log('Error occured ' , err.message);

// });

const waitSome = (kunal)=>{
    return new Promise((resolve)=>{
        resolve();

    });
};

console.log("1");

waitSome(5000).then(()=>{
    console.log("after 4 sec");
});

console.log("2");
