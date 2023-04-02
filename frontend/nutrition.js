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
    totalCount[i]=localStorage.getItem(storageNames[i])
    console.log(storageNames[i], totalCount[i])
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
    
    CalorieCount = CalorieCount * ServingsConsumed;
    TotalFatCount = TotalFatCount * ServingsConsumed;
    CarbohydrateCount = CarbohydrateCount * ServingsConsumed;
    SodiumCount = SodiumCount * ServingsConsumed;
    SugarCount = SugarCount * ServingsConsumed;

    SaturatedFatCount = SaturatedFatCount * ServingsConsumed;
    CalciumCount = CalciumCount * ServingsConsumed;
    CholesterolCount = CholesterolCount * ServingsConsumed;
    PotassiumCount = PotassiumCount * ServingsConsumed;
    IronCount = IronCount * ServingsConsumed;

    localStorage.setItem("CalorieCount", parseInt(CalorieCount));
    localStorage.setItem("TotalFatCount", parseInt(TotalFatCount));
    localStorage.setItem("CarbohydrateCount", parseInt(CarbohydrateCount));
    localStorage.setItem("SodiumCount", parseInt(SodiumCount));
    localStorage.setItem("SugarCount", parseInt(SugarCount));

    localStorage.setItem("SaturatedFatCount", parseInt(SaturatedFatCount));
    localStorage.setItem("CalciumCount", parseInt(CalciumCount));
    localStorage.setItem("CholesterolCount", parseInt(CholesterolCount));
    localStorage.setItem("PotassiumCount", parseInt(PotassiumCount));
    localStorage.setItem("IronCount", parseInt(IronCount));
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