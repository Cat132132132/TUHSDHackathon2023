/**
 * 
 */

document.getElementById("submit").addEventListener("click", function()
{
    var name = document.getElementsByName("name")[0].value;
    var weight = document.getElementsByName("weight")[0].value;
    var height = document.getElementsByName("height")[0].value;
    var age = document.getElementsByName("age")[0].value;
    var gender = document.getElementsByName("gender")[0].value;
    user = new User(name, weight, height, age, gender);
    console.log("Registered ",name,weight,height,age,gender)
    localStorage.setItem("name", name);
    localStorage.setItem("weight", weight);
    localStorage.setItem("height", height);
    localStorage.setItem("age", age);
    localStorage.setItem("gender", gender);
});