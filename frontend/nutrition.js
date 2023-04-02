//var button = document.getElementById("addFood");
//button.addEventListener("click", updatePage);

var totalCount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
const storageNames = [  
    "CalorieCount",  
    "TotalFatCount",  
    "CarbohydrateCount",  
    "SodiumCount",  
    "SugarCount",  
    "SaturatedFatCount",  
    "CalciumCount",  
    "CholesterolCount",  
    "PotassiumCount",  
    "IronCount"];

for (let i = 0; i <= 9; i++)
{
    if (localStorage.getItem(storageNames[i])!=null) {
        
    totalCount[i]=parseFloat(localStorage.getItem(storageNames[i]));
    } else {
        totalCount[i]=0;
    }
    
    console.log(storageNames[i], totalCount[i]);
}
/**
 * IN ORDER
 * Calories (0)
 * Total Fat (1)
 * Carbohydrates 2 
 * Sodium 3 
 * Sugar 4 
 * Saturated Fat 5 
 * Calcium 6 
 * Cholesterol 7 
 * Potassium 8 
 * Iron 9 
 */

function addFoodBoxVisible() {
    document.getElementById("add_food_div").style.visibility="visible";
}

function addFoodBoxNotVisible() {
    document.getElementById("add_food_div").style.visibility="hidden";
}

function resetValues()
{
    localStorage.setItem("CalorieCount", 0);
    localStorage.setItem("TotalFatCount", 0);
    localStorage.setItem("CarbohydrateCount", 0);
    localStorage.setItem("SodiumCount", 0);
    localStorage.setItem("SugarCount", 0);

    localStorage.setItem("SaturatedFatCount", 0);
    localStorage.setItem("CalciumCount", 0);
    localStorage.setItem("CholesterolCount", 0);
    localStorage.setItem("PotassiumCount", 0);
    localStorage.setItem("IronCount", 0);
}

function returnValues()
{   
    var ServingsConsumed = parseInt(document.getElementById("ServingsConsumed").value);
    
    var CalorieCount = document.getElementById("CalorieCount").value;
    var TotalFatCount = document.getElementById("TotalFatCount").value;
    var CarbohydrateCount = document.getElementById("CarbohydrateCount").value;
    var SodiumCount = document.getElementById("SodiumCount").value;
    var SugarCount = document.getElementById("SugarCount").value;

    var SaturatedFatCount = document.getElementById("SaturatedFatCount").value;
    var CalciumCount = document.getElementById("CalciumCount").value;
    var CholesterolCount = document.getElementById("CholesterolCount").value;
    var PotassiumCount = document.getElementById("PotassiumCount").value;
    var IronCount = document.getElementById("IronCount").value;
    
    
    totalCount[0] += parseFloat(CalorieCount * ServingsConsumed);
    totalCount[1] += parseFloat(TotalFatCount * ServingsConsumed);
    totalCount[2] += parseFloat(CarbohydrateCount * ServingsConsumed);
    totalCount[3] += parseFloat(SodiumCount * ServingsConsumed);
    totalCount[4] += parseFloat(SugarCount * ServingsConsumed);

    totalCount[5] += parseFloat(SaturatedFatCount * ServingsConsumed);
    totalCount[6] += parseFloat(CalciumCount * ServingsConsumed);
    totalCount[7] += parseFloat(CholesterolCount * ServingsConsumed);
    totalCount[8] += parseFloat(PotassiumCount * ServingsConsumed);
    totalCount[9] += parseFloat(IronCount * ServingsConsumed);
    
    localStorage.setItem("CalorieCount", totalCount[0]);
    localStorage.setItem("TotalFatCount", totalCount[1]);
    localStorage.setItem("CarbohydrateCount", totalCount[2]);
    localStorage.setItem("SodiumCount", totalCount[3]);
    localStorage.setItem("SugarCount", totalCount[4]);

    localStorage.setItem("SaturatedFatCount", totalCount[5]);
    localStorage.setItem("CalciumCount", totalCount[6]);
    localStorage.setItem("CholesterolCount", totalCount[7]);
    localStorage.setItem("PotassiumCount", totalCount[8]);
    localStorage.setItem("IronCount", totalCount[9]);
}