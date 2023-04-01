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
 */

function draw()
{
    var canvas = document.getElementById("nutritionStatistics");
    var ctx = canvas.getContext("2d");

    const colors = ["#03045E", "#0077B6", "#00B4D8", "#90E0EF", "#CAF0F8"];
    let canvasWidth = canvas.width;
    let canvasHeight = canvas.height;

    // Define rectangle properties
    const rectCount = 10; // 10 rectangles across the canvas
    const rectWidth = canvasWidth / rectCount;
    const rectHeight = 90;
    const rectSpacing = canvasWidth / (rectCount + 1); // spacing between rectangles

    var amountOfColors = 0;

    for (let i = 0; i < rectCount; i++) 
    {
        const rectX = i * rectWidth + (i + 1) * rectSpacing;
        const rectY = canvasHeight - rectHeight; // place rectangles at the bottom of the canvas
        ctx.fillStyle = colors[amountOfColors];
        amountOfColors++;
        ctx.fillRect(rectX, rectY, rectWidth, rectHeight);
    }

    ctx.font = '12px Arial';
    ctx.fillStyle = "black";
    ctx.fillText("3,000", 5, 15);
    ctx.fillStyle = "black";
    ctx.fillText("0", 10, canvasHeight - 10);
}

window.onload = function() {
    draw();
};

function resizeCanvas() {
    var canvas = document.getElementById("nutritionStatistics");
    canvas.width = window.innerWidth * .6;
    draw();
}
window.addEventListener("resize", resizeCanvas);