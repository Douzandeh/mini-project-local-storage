// localStorage.setItem("firstName", "Hossein");
// localStorage.setItem("lastName" , "Douzandeh")
// localStorage.setItem("age" , 22)
// localStorage.setItem("access" , true)
// let firstName = localStorage.getItem("firstName")
// let lastName = localStorage.getItem("lastName")
// let age = localStorage.getItem("age")
// age = parseInt(age)
let access = localStorage.getItem("access")
if(access === "true"){
    console.log("You have access");
}else{
    console.log("You have not access");
}