const coding =["js","ruby","java","python","cpp"]
//most frequent loop for array ::::-----> forEach
// coding.forEach(                            
//      (val)=>{                              //callback function :: without name

//         console.log(val);
        
//     }
// );


// function printme(item){
//     console.log(item);
    
// }
// coding.forEach(printme)

// coding.forEach((item,index,arr)=>{
//     console.log(item,index,arr);
    
// })


const myCoding=[
    {
        languageName:"javascript",
        languageFileName:"js"
    },
    {
        languageName:"java",
        languageFileName:"java"
    },
    {
        languageName:"C++",
        languageFileName:"cpp"
    }
]

myCoding.forEach((val)=>{
    console.log(val.languageName)
})
