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

for (let i = 0; i < 9; i++)
{
    localStorage.setItem[storageNames[i]] = 0;
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
    for (let i = 0; i < 10; i++)
    {
        localStorage.setItem(storageNames[i], 0);
    }
}

function returnValues()
{
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

    try {
        totalCount[0] += parseInt(CalorieCount);
        totalCount[1] += parseInt(TotalFatCount);
        totalCount[2] += parseInt(CarbohydrateCount);
        totalCount[3] += parseInt(SodiumCount);
        totalCount[4] += parseInt(SugarCount);

        totalCount[5] += parseInt(SaturatedFatCount);
        totalCount[6] += parseInt(CalciumCount);
        totalCount[7] += parseInt(CholesterolCount);
        totalCount[8] += parseInt(PotassiumCount);
        totalCount[9] += parseInt(IronCount);
    } catch (error) {
        console.log("Error assigning values.");
    }

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

function getFood()
{

}
function updateValues()
{

}
function getAPIValues()
{

}