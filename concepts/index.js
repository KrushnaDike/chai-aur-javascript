// ** Checking object is empty **
// const myObj = {};

// if(Object.keys(myObj).length === 0 ) {
//     console.log("Object is empty");
// }




// ** Checking array is empty **
// const myArray = [];

// if(myArray.length === 0) {
//     console.log("Array is empty");
// }




// false values
// false, 0, -0, null, undefined, bigIng 0n, NaN

// truethy values
// "0", "false", " ", [], {}, functio(){}




// for (let index = 0; index < array.length; index++) {
//     const element = array[index];
    
// }




const map = new Map();

map.set("IN", "India");
map.set("USA", "United States");
map.set("Fr", "France");

console.log(map);

for (const [key, value] of map) {
    console.log(`${key} => ${value}`);    
}