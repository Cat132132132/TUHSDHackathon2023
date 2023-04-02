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

function draw()
{
    const canvas1 = document.getElementById("canvas1");
    const ctx1 = canvas1.getContext("2d");

    const colors = ["#0077be", "#1e90ff", "#00B4D8", "#6495ed", "#87ceeb"];

    let canvas1Width = canvas1.width;
    let canvas1Height = canvas1.height;

    // Define rectangle properties
    const rect1Count = 10; // 10 rectangles across the canvas
    const rect1Width = canvas1Width / rect1Count;
    const rect1Spacing = canvas1Width / (rect1Count + 1); // spacing between rectangles

    const data = [100, 200, 300, 400, 500, 600, 700, 800, 900, 1000];

    for (let i = 0; i < rect1Count; i++) {
    const rect1X = i * rect1Width + (i + 1) * rect1Spacing;
    const rect1Height = (data[i] / 1000) * canvas1Height;
    const rect1Y = canvas1Height - rect1Height; // place rectangles at the bottom of the canvas
    ctx1.fillStyle = colors[i % colors.length];
    ctx1.fillRect(rect1X, rect1Y, rect1Width, rect1Height);
    }

    ctx1.font = "12px Arial";
    ctx1.fillStyle = "black";
    ctx1.fillText("1,000", 5, 15);
    ctx1.fillStyle = "black";
    ctx1.fillText("0", 10, canvas1Height);

    /**
     *  NOW ONTO THE SECOND FRAME
     */
    var canvas2 = document.getElementById("canvas2");
    var ctx2 = canvas2.getContext("2d");

    let canvas2Width = canvas2.width;
    let canvas2Height = canvas2.height;

    // Define rectangle properties
    const rect2Count = 10; // 10 rectangles across the canvas
    const rect2Width = canvas2Width / rect2Count;
    const rect2Height = 90;
    const rect2Spacing = canvas2Width / (rect2Count + 1); // spacing between rectangles

    var values = [10, 20, 30, 40, 50, 60, 70, 80, 90, 100];
    var amountOfColors = 0;

    for (let i = 0; i < rect2Count; i++) 
    {
        const rect2X = i * rect2Width + (i + 1) * rect2Spacing;
        const rect2Y = canvas2Height - (values[i] / 100 * canvas2Height); // place rectangles at the bottom of the canvas
        ctx2.fillStyle = colors[amountOfColors];
        amountOfColors++;
        ctx2.fillRect(rect2X, rect2Y, rect2Width, values[i] / 100 * canvas2Height);
    }

    ctx2.font = '12px Arial';
    ctx2.fillStyle = "black";
    ctx2.fillText("100", 5, 15);
    ctx2.fillStyle = "black";
    ctx2.fillText("0", 10, canvas2Height - 10);

}

window.onload = function() {
    draw();
};

function resizeCanvas() {
    var canvas = document.getElementById("a1");
    canvas.width = window.innerWidth * .6;
    draw();
}
window.addEventListener("resize", resizeCanvas);