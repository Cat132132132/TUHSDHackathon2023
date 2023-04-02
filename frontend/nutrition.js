//var button = document.getElementById("addFood");
//button.addEventListener("click", updatePage);

var totalCount = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0];
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
    console.log("lsdjlfskdjfkl");
    document.getElementById("add_food_div").style.visibility="visible";
}

function addFoodBoxNotVisible() {
    console.log("lsdjlfskdjfkl");
    document.getElementById("add_food_div").style.visibility="hidden";
}

function returnValues()
{
    try
    {
        totalCount[0] += document.getElementById("CalorieCount");
        totalCount[1] += document.getElementById("TotalFatCount");
        totalCount[2] += document.getElementById("CarbohydrateCount");
        totalCount[3] += document.getElementById("SodiumCount");
        totalCount[4] += document.getElementById("SugarCount");
        
        totalCount[5] += document.getElementById("SaturatedFatCount");
        totalCount[6] += document.getElementById("CalciumCount");
        totalCount[7] += document.getElementById("CholesterolCount");
        totalCount[8] += document.getElementById("PotassiumCount");
        totalCount[9] += document.getElementById("IronCount");
    }
    catch (err)
    {
        console.log("There was an error assigning values. Nothing was changed.");
    }

    localStorage.setItem("nutritionValueCount", totalCount);

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