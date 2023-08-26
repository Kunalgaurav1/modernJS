function myName(){
    console.log("kunal");
}


//using callback function 

const myName2 = () => {
    console.log("gaurav");

};

myName();

myName2();

const mycity = () => {
    console.log("biharsharif");
}


mycity();


//Return syntax

const mycollege = () => "ldh";

const m  = mycollege();

console.log(m);

//another way to return syntax

const mycity2 = () => {
    
    return "gohana";
}

const x = mycity2();

 console.log(x);

 //object return syntax

 const mysurname = () => ({
      surname : "gaurav",
 });

 const s = mysurname();
console.log(s);


//providing agruments / parameters

const myname33 = (name ,age) => {
    console.log("my name is ", name);
    console.log("my age is ",  age);
}

myname33("kunal" ,  34);