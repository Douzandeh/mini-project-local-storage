// ? Initialization in local storage
// localStorage.setItem("firstName", "Hossein");
// localStorage.setItem("lastName" , "Douzandeh")
// localStorage.setItem("age" , 22)
// localStorage.setItem("access" , true)
// ? Initialization in local storage


// ? getItem Local Storage
// let firstName = localStorage.getItem("firstName")
// let lastName = localStorage.getItem("lastName")
// ? getItem Local Storage


// ? Method ParseInt
// let age = localStorage.getItem("age")
// age = parseInt(age)
// ? Method ParseInt


// ? Boolean value in local storage
// let access = localStorage.getItem("access")
// if(access === "true"){
//     console.log("You have access");
// }else{
//     console.log("You have not access");
// }
// ? Boolean value in local storage

// ? Clear local storage
// localStorage.removeItem("firstName")
// localStorage.clear()
// ? Clear local Storage



// ? Save the object
let person = {
    firstName: "Hossein",
    lastName: "Douzandeh",
    age: 22,
    access: true,
}
// ? JSON.stringify
person = JSON.stringify(person)
console.log(person);


localStorage.setItem("person" , person)