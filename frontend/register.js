/**
 * saves information from the form to cookies
 */

/**
 * sets cookie values
 * @param {*} cname cookie name
 * @param {*} cvalue cookie value
 * @param {*} exdays expiry date (days from current date)
 */
function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

document.getElementById("submit").addEventListener("click", function()
{
    var name = document.getElementsByName("name")[0].value;
    var weight = document.getElementsByName("weight")[0].value;
    var height = document.getElementsByName("height")[0].value;
    var age = document.getElementsByName("age")[0].value;
    if(document.getElementById('male').checked)
    {
        var gender = document.getElementById("male").value;
    }
    else if(document.getElementById('female').checked)
    {
        var gender = document.getElementById("female").value;
    }
    
    setCookie("name", name, 100);
    setCookie("weight", weight, 100);
    setCookie("height", height, 100);
    setCookie("age", age, 100);
    setCookie("gender", gender, 100);
    console.log("Registered ", name, weight, height, age, gender)
});