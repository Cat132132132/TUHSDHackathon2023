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

function setValues() 
{
    if (!localStorage.getItem("age")) {
        document.getElementById("userAge").innerHTML = 0;
    } 
    else {
        document.getElementById("userAge").innerHTML = localStorage.getItem("age");
    }
    
    //
    
    if (!localStorage.getItem("name"))
    {
        document.getElementById("userName").innerHTML = "Default User";
    }
    else
    {
        document.getElementById("userName").innerHTML = localStorage.getItem("name");
    }
    
    //
    
    if (!localStorage.getItem("gender"))
    {
        document.getElementById("userGender").innerHTML = "Default Gender";
    }
    else
    {
        document.getElementById("userGender").innerHTML = localStorage.getItem("gender");
    }
    
    //
    
    if (!localStorage.getItem("weight"))
    {
        document.getElementById("userWeight").innerHTML = "000.00";
    }
    else
    {
        let value = localStorage.getItem("weight");
        if (value === "") {
            document.getElementById("userWeight").innerHTML = "000.00";
        } else {
            document.getElementById("userWeight").innerHTML = parseInt(value).toFixed(2);
        }
    }
    
    //
    
    if (!localStorage.getItem("height"))
    {
        document.getElementById("userHeight").innerHTML = "0'0";
    }
    else
    {
        document.getElementById("userHeight").innerHTML = localStorage.getItem("height");
    }
    
};

function logOut()
{
    for (let i = 0; i < 5; i++)
    {
        localStorage.setItem(val[i], null);
    }
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