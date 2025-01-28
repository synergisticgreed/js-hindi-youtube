 const desc=Object.getOwnPropertyDescriptor(Math,"PI")

// console.log(Math.PI);
// Math.PI=5
// console.log(Math.PI);
//console.log(desc);






const chai={
    name: 'ginger chai',
    price: 250,
    isAvailable: true
}

console.log(Object.getOwnPropertyDescriptor(chai,"name"));

//Its Output=---------------------->
// {
//     value: 'ginger chai',
//     writable: true,
//     enumerable: true,
//     configurable: true
//   }



Object.defineProperty(chai,'name',{
    writable: false,
    enumerable: false

})
console.log(Object.getOwnPropertyDescriptor(chai,"name"));


//Its Output=---------------------->
// {
//     value: 'ginger chai',
//     writable: false,
//     enumerable: false,
//     configurable: true
//   }