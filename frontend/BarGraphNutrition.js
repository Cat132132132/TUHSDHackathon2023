/**
Basic Parts of nutrition:
    Calories	
    Total Fat
    Saturated Fat
    Trans Fat
    Unsaturated Fat	
    Cholesterol
    Carbohydrate
    Total Sugars
    Protein
    Calcium	
 */

function draw()
{
    var canvas = document.getElementById("nutritionStatistics");
    var ctx = canvas.getContext("2d");

    ctx.fillStyle = "blue";
    ctx.fillRect(10, 10, 50, 100);
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