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

    /**
     * This file gets basic units from daily values that are limited at the max.
     */
function getReccomendation()
{
    console.log("running.");
    let label = "";
    if (parseInt(localStorage.getItem("CalorieCount")) > 2250)
    {
        label += ("\nYour calorie count is higher than normal. It's important to be mindful of your daily intake as consuming too many calories can lead to weight gain and health issues.\n\n");
    }
    if (parseInt(localStorage.getItem("TotalFatCount")) > 78)
    {
        label += ("\nConsuming too much fat can lead to weight gain and increase your risk of health issues such as heart disease. It's important to be mindful of your daily fat intake.\n\n");
    }
    if (parseInt(localStorage.getItem("CarbohydrateCount")) > 325)
    {
        label += "\nYour carbohydrate intake is overly high. Consuming too many carbohydrates can lead to weight gain and increase your risk of health issues such as type 2 diabetes.\n\n";
    }
    if (parseInt(localStorage.getItem("SodiumCount")) > 2300)
    {
        label += "\nWatch your sodium count. Consuming too much sodium can increase your blood pressure and your risk of heart disease. \n\n";
    }
    if (parseInt(localStorage.getItem("SugarCount")) > 150)
    {
        label += "\nWatch your sugar count. Consuming too much sugar can increase your risk of Type II Diabetes, which can be a life threatening issue. \n\n";
    }
    if (parseInt(localStorage.getItem("SaturatedFatCount")) > (parseInt(localStorage.getItem("CalorieCount") * .10)))   
    {
        label += "\nBe mindful of your saturated fat count. Consuming too much saturated fat can increase your cholesterol levels and increase your risk of heart disease.\n\n";
    }
    if (parseInt(localStorage.getItem("CalciumCount")) > 2500)   
    {
        label += "\nPay attention to your calcium levels. Consuming too much calcium can increase your risk of kidney stones and other health issues.\n\n";
    }
    if (parseInt(localStorage.getItem("CholesterolCount")) > 300)   
    {
        label += "\nPay attention to your cholesterol levels. Consuming too much cholesterol can increase your risk of heart disease and other life threatening issues.\n\n";
    }
    if (parseInt(localStorage.getItem("PotassiumCount")) > 4700)   
    {
        label += "\nPay attention to your potassium levels. Consuming too much potassium  can increase your risk of heart disease and other life threatening issues.\n\n";
    }
    if (parseInt(localStorage.getItem("IronCount")) > 18)   
    {
        label += "\nBe mindful of your consumption. Consuming too much iron can cause organ damage and other health issues.\n\n";
    }
    document.getElementById("recommendation").textContent = label;
}