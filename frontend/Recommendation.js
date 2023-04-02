const allStorageNames = [  
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

function getReccomendation()
{
    console.log("running.");
    let label = "";
    if (parseInt(localStorage.getItem("CalorieCount")) > 2250)
    {
        label += "Your calorie count is higher than normal. It's important to be mindful of your daily " + 
        "intake as consuming too many calories can lead to weight gain and health issues.\n\n";
    }
    if (parseInt(localStorage.getItem("TotalFatCount")) > 78)
    {
        label += "Consuming too much fat can lead to weight gain and increase your risk " +
        "of health issues such as heart disease. It's important to be mindful of your daily fat intake.\n\n";
    }
    document.getElementById("recommendation").textContent = label;
}