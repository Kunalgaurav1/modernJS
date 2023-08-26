const car  = {

    color : "red",
    gears : 4,
    brand : "audi",
}

// car.color;
// car.gears;
// car.brand;

// const { color, gears , brand : carBrand} = car;

// console.log("color", color,  "gear", gears , "brand", carBrand);
// car.gears;
// car.brand;

// const someFunc = (argCar) =>{
//     console.log(argCar.brand);
//     console.log(argCar.color);

// };

// someFunc(car);

//Object destructing

const someFunc2 = ({ color, gears , brand : carBrand})=>{
    console.log(color, carBrand);
  // this is object destructing ..humne saare objects to tod diya outside the function 
}

someFunc2(car);

const somefunc3 =({color, gears} = {color : "red"}) =>{
    console.log(color, gears);
}

somefunc3();
