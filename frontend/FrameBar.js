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

function canvasDraw()
{
    const canvas1 = document.getElementById("canvas1");
    const ctx1 = canvas1.getContext("2d");
    
    const colors = ["#0077be", "#1e90ff", "#00B4D8", "#6495ed", "#87ceeb"];
    const values1 = new Array(5);
    const values2 = new Array(5);
    
    for (let i = 0; i < 5; i++) {
      values1[i] = localStorage.getItem(thestorageNames[i]) / 5;
      values2[i] = localStorage.getItem(thestorageNames[i + 5]) / 5;
    }
    
    const canvas1Width = canvas1.width;
    const canvas1Height = 300;
    
    // Define rectangle properties
    const rect1Count = 5; // 5 rectangles across the canvas
    const rect1Width = canvas1Width / rect1Count;
    const rect1Spacing = (canvas1Width - (rect1Width * rect1Count)) / (rect1Count - 1); // spacing between rectangles
    
    let amountOfColors = 0;
    
    for (let i = 0; i < rect1Count; i++) {
        const rect1X = i * (rect1Width + rect1Spacing);
        const rect1Y = canvas1Height - (values1[i] / 100 * canvas1Height); // place rectangles at the bottom of the canvas
        ctx1.fillStyle = colors[amountOfColors];
        amountOfColors++;
        const rect1Height = (values1[i] / 100) * canvas1Height;
        ctx1.fillRect(rect1X, rect1Y, rect1Width, rect1Height);
    }
    
    ctx1.font = "12px Arial";
    ctx1.fillStyle = "black";
    ctx1.fillText("300", 5, 15);
    ctx1.fillStyle = "black";
    ctx1.fillText("0", 10, canvas1Height - 10);
    
    /**
     *  NOW ONTO THE SECOND FRAME
     */
    const canvas2 = document.getElementById("canvas2");
    const ctx2 = canvas2.getContext("2d");
    
    let canvas2Width = canvas2.width;
    let canvas2Height = 300;
    
    // Define rectangle properties
    const rect2Count = 5; // 5 rectangles across the canvas
    const rect2Width = canvas2Width / rect2Count;
    const rect2Spacing = (canvas2Width - (rect2Width * rect2Count)) / (rect2Count - 1); // spacing between rectangles
    
    amountOfColors = 0;
    
    for (let i = 0; i < rect2Count; i++) {
      const rect2X = i * (rect2Width + rect2Spacing);
      const rect2Y = canvas2Height - (values2[i] / 100 * canvas2Height); // place rectangles at the bottom of the canvas
      ctx2.fillStyle = colors[amountOfColors];
      amountOfColors++;
      const rect2Height = (values2[i] / 100) * canvas2Height;
      ctx2.fillRect(rect2X, rect2Y, rect2Width, rect2Height);
    }
    
    ctx2.font = "12px Arial";
    ctx2.fillStyle = "black";
    ctx2.fillText("300", 5, 15);
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
window.addEventListener("resize", resizeCanvas);