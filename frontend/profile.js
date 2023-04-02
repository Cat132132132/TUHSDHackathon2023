const val = [
    "name",
    "gender",
    "weight",
    "height",
    "age"
];

const inputval = [
    "userName",
    "userGender",
    "userWeight",
    "userHeight",
    "userAge"
];

/**
 * gets cookies from user (W3Schools)
 * @param {*} cname 
 * @returns 
 */
function getCookie(cname) 
{
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) 
    {
      let c = ca[i];
      while (c.charAt(0) == ' ') 
      {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
}

//getting values from cookies
var age = getCookie("age");
var username = getCookie("name");
var gender = getCookie("gender");
var weight = getCookie("weight");
var height = getCookie("height");
var BMI = calcBMI();
var BMR = calcBMR();
var heightIn = height % 12;
var heightFt = (height - heightIn) / 12;

/**
     * Calculates resting calorie rate using the Mifflin-St Jeor Equation.
     * @returns the basal metabolic rate, in calories per day.
     */
function calcBMR()
{
    if (gender == "male")
    {
        return 10*weight + 6.25*height - 5*age + 5;
    }

    else if (gender == "female")
    {
        return 10*weight + 6.25*height - 5*age - 161;
    }
}

/**
     * Calculates the Body Mass Index of a person, provided with their height and weight.
     * @returns BMI
     */
function calcBMI()
{
    return (703*weight / (height*height)).toFixed(2);
}

//getting values from cookies
function setValues() 
{
    document.getElementById("userAge").innerHTML = age;
    document.getElementById("userName").innerHTML = username;
    document.getElementById("userGender").innerHTML = gender;
    document.getElementById("userWeight").innerHTML = weight;
    document.getElementById("userHeightFt").innerHTML = heightFt;
    document.getElementById("userHeightIn").innerHTML = heightIn;
    document.getElementById("userBmi").innerHTML = BMI;
    document.getElementById("userBmr").innerHTML = BMR;
};

function logOut()
{
    setCookie("name", "Default User");
    setCookie("age", 0);
    setCookie("weight", 0);
    setCookie("height", "0'0");
    setCookie("gender", "Default Gender");
    window.user.setUserToNull();
    setValues();
    location.reload();
}

window.onload = function() {
    setValues();
};

function resizeCanvas() {
    setValues();
}
window.addEventListener("resize", resizeCanvas);

