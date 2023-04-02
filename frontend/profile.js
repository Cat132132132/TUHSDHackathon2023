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

function getCookie(cname) {
    let name = cname + "=";
    let ca = document.cookie.split(';');
    for(let i = 0; i < ca.length; i++) {
      let c = ca[i];
      while (c.charAt(0) == ' ') {
        c = c.substring(1);
      }
      if (c.indexOf(name) == 0) {
        return c.substring(name.length, c.length);
      }
    }
    return "";
  }

function setValues() 
{
    if (getCookie("age") == null) {
        console.log("age not found in cookies, setting default value")
        document.getElementById("userAge").innerHTML = 0;
    } 
    else {
        document.getElementById("userAge").innerHTML = getCookie("age");
    }
    
    //
    
    if (getCookie("name") == null)
    {
        console.log("name not found in cookies, setting default value")
        document.getElementById("userName").innerHTML = "Default User";
    }
    else
    {
        document.getElementById("userName").innerHTML = getCookie("name");
    }
    
    //
    
    if (getCookie("gender") == null)
    {
        console.log("gender not found in cookies, setting default value")
        document.getElementById("userGender").innerHTML = "Default Gender";
    }
    else
    {
        document.getElementById("userGender").innerHTML = getCookie("gender");
    }
    
    //
    
    if (getCookie("weight") == null)
    {
        console.log("weight not found in cookies, setting default value")
        document.getElementById("userWeight").innerHTML = "000.00";
    }
    else
    {
        let value = getCookie("weight");
        if (value === "") {
            document.getElementById("userWeight").innerHTML = "000.00";
        } else {
            document.getElementById("userWeight").innerHTML = parseInt(value).toFixed(2);
        }
    }
    
    //
    
    if (getCookie("height") == null)
    {
        document.getElementById("userHeight").innerHTML = "0'0";
    }
    else
    {
        document.getElementById("userHeight").innerHTML = getCookie("height");
    }
    
};

function setCookie(cname, cvalue, exdays) {
    const d = new Date();
    d.setTime(d.getTime() + (exdays * 24 * 60 * 60 * 1000));
    let expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + ";" + expires + ";path=/";
  }

function logOut()
{
    setCookie("name", "Default User");
    setCookie("age", 0);
    setCookie("weight", 0);
    setCookie("height", "0'0");
    setCookie("gender", "Default Gender");
    window.user.setUserToNull();
    setValues();
    window.location.reload();
}

window.onload = function() {
    setValues();
};

function resizeCanvas() {
    setValues();
}
window.addEventListener("resize", resizeCanvas);

