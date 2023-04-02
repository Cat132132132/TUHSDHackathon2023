/**
Basic Parts of nutrition:
    Calories == blue	
    Total Fat == red
    Saturated Fat == orange
    Trans Fat == green
    Unsaturated Fat	== pink
    Cholesterol == purple
    Carbohydrate == black
    Total Sugars == gray
    Protein == another color
    Calcium	 == another color

    may include features others, may not
 */
const thestorageNames = [  
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

function canvasDraw(blank)
{
    const canvas1 = document.getElementById("canvas1");
    const ctx1 = canvas1.getContext("2d");

    const canvas2 = document.getElementById("canvas2");
    const ctx2 = canvas2.getContext("2d");
    
    const colors = ["#0077be", "#1e90ff", "#00B4D8", "#6495ed", "#87ceeb"];
    const values1 = new Array(5);
    const values2 = new Array(5);
    
    values1[0] = parseInt(localStorage.getItem('CalorieCount'));
    values1[1] = parseInt(localStorage.getItem('TotalFatCount'));
    values1[2] = parseInt(localStorage.getItem('CarbohydrateCount'));  
    values1[3] = parseInt(localStorage.getItem('SodiumCount'));
    values1[4] = parseInt(localStorage.getItem('SugarCount')); 

    values2 [0] = parseInt(localStorage.getItem('SaturatedFatCount'));
    values2 [1] = parseInt(localStorage.getItem('CalciumCount'));
    values2 [2] = parseInt(localStorage.getItem('CholesterolCount'));  
    values2 [3] = parseInt(localStorage.getItem('PotassiumCount'));
    values2 [4] = parseInt(localStorage.getItem('IronCount'));
    
    const canvas1Width = canvas1.width;
    const canvas1Height = 300;
    
    // Define rectangle properties
    const rect1Count = 5; // 5 rectangles across the canvas
    const rect1Width = canvas1Width / rect1Count;
    const rect1Spacing = (canvas1Width - (rect1Width * rect1Count)) / (rect1Count - 1); // spacing between rectangles
    
    const canvas2Width = canvas2.width;
    const canvas2Height = 300;
    
    // Define rectangle properties
    const rect2Count = 5; // 5 rectangles across the canvas
    const rect2Width = canvas2Width / rect2Count;
    const rect2Spacing = (canvas2Width - (rect2Width * rect2Count)) / (rect2Count - 2); // spacing between rectangles
    
    let amountOfColors = 0;
    
    if (!blank)
    {
        for (let i = 0; i < rect1Count; i++) {
            const rect1X = i * (rect1Width + rect1Spacing);
            ctx1.fillStyle = colors[amountOfColors];
            amountOfColors++;
            const rect1Height = (values1[i] / 200) * canvas1Height;
            ctx1.fillRect(rect1X, 0, rect1Width, rect1Height);
        }

        amountOfColors = 0;
    
        for (let i = 0; i < rect2Count; i++) {
            const rect2X = i * (rect2Width + rect2Spacing);
            ctx2.fillStyle = colors[amountOfColors];
            amountOfColors++;
            const rect2Height = (values2[i] / 200) * canvas2Height;
            ctx2.fillRect(rect2X, 0, rect2Width, rect2Height);
        }
    }
    else
    {
        ctx1.fillStyle = "#add8e6";
        ctx1.fillRect(0, 0, canvas1Width, canvas1Height);
        ctx2.fillStyle = "#add8e6";
        ctx2.fillRect(0, 0, canvas2Width, canvas2Height);
    }
    
    ctx1.font = "12px Arial";
    ctx1.fillStyle = "black";
    ctx1.fillText("500", 5, 15);
    ctx1.fillStyle = "black";
    ctx1.fillText("0", 10, canvas1Height - 10);

    /**
     * 
     * 
     * 
     * 
     */
    
    if (!blank)
    {
    }
    else
    {
        ctx1.fillStyle = "#add8e6";
        ctx2.fillRect(0, 0, canvas2Width, canvas2Height);
    }
    
    ctx2.font = "12px Arial";
    ctx2.fillStyle = "black";
    ctx2.fillText("500", 5, 15);
    ctx2.fillStyle = "black";
    ctx2.fillText("0", 10, canvas2Height - 10);
}

window.onload = function() {
    canvasDraw();
};

function resizeCanvas() {
    document.getElementById("canvas1").width = window.innerWidth * .6;
    document.getElementById("canvas2").width = window.innerWidth * .6;
    canvasDraw();
}

function resetValues()
{
    // Clear variables
    localStorage.setItem('CalorieCount', 0);
    localStorage.setItem('CalorieCount', 0);
    localStorage.setItem('TotalFatCount', 0);
    localStorage.setItem('CarbohydrateCount', 0);
    localStorage.setItem('SodiumCount', 0);
    localStorage.setItem('SugarCount', 0);   
    localStorage.setItem('SaturatedFatCount', 0);
    localStorage.setItem('CalciumCount', 0);  
    localStorage.setItem('CholesterolCount', 0); 
    localStorage.setItem('PotassiumCount', 0);
    localStorage.setItem('IronCount', 0);
    // Reload the page
    canvasDraw(true);
    location.reload();

}
window.addEventListener("resize", resizeCanvas);