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

    This program runs off of two arrays, one for designing
    each specific canvas.
 */
function canvasDraw(blank)
{
    const canvas1 = document.getElementById("canvas1");
    const ctx1 = canvas1.getContext("2d");

    const canvas2 = document.getElementById("canvas2");
    const ctx2 = canvas2.getContext("2d");
    
    //colors picken from a random color generator
    const colors = ["#0077be", "#1e90ff", "#00B4D8", "#6495ed", "#87ceeb"];
    //there will be 5 values on the top and on the bottom 
    //frame, so these arrays seperate the specific values in order
    //to organize the code.
    const values1 = new Array(5);
    const values2 = new Array(5);
    
    //assigns the amount of nutrients the user has
    //and assigns them to their respective array
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
    const rect1Width = canvas1Width / rect1Count; //gets the current width and divides it by the amount of bars so space is equal
    const rect1Spacing = (canvas1Width - (rect1Width * rect1Count)) / (rect1Count - 1); // the amount of spacing between rectangles to be equal
    
    const canvas2Width = canvas2.width;
    const canvas2Height = 300;
    
    // Define rectangle properties
    const rect2Count = 5; // 5 rectangles across the canvas
    const rect2Width = canvas2Width / rect2Count; //divides the amount of the current width between the amount of bars
    const rect2Spacing = (canvas2Width - (rect2Width * rect2Count)) / (rect2Count - 2); // spacing between rectangles
    
    let colorIndex = 0;
    
    //while the function is set to not clear up the whole page, this will run
    if (!blank)
    {
        for (let i = 0; i < rect1Count; i++) {
            //calculates the spacing between each x corrdinate 
            //ex let i = 0, let rect1Width = 200, let rect1Spacing = 50 => 0 * 40 => 0 
            const rect1X = i * (rect1Width + rect1Spacing);
            //this gets the order in line for the color index so all colors will be the same
            ctx1.fillStyle = colors[colorIndex];
            colorIndex++;
            //the program divides the element by 200 to insure that the graph
            //will not be too high and can fit on the tiny canvas
            //multiplies it by the canvas height to fit
            const rect1Height = (values1[i] / 200) * canvas1Height;
            //starts at 0 to start it from the top
            ctx1.fillRect(rect1X, 0, rect1Width, rect1Height);
        }

        //resets the color index so the color will be the same throughout both 
        colorIndex = 0;
    
        for (let i = 0; i < rect2Count; i++) {
            //calculates the spacing between each x corrdinate 
            //ex let i = 0, let rect1Width = 200, let rect1Spacing = 50 => 0 * 40 => 0 
            const rect2X = i * (rect2Width + rect2Spacing);
            //this gets the order in line for the color index so all colors will be the same
            ctx2.fillStyle = colors[colorIndex];
            colorIndex++;
            //the program divides the element by 200 to insure that the graph
            //will not be too high and can fit on the tiny canvas
            //multiplies it by the canvas height to fit
            const rect2Height = (values2[i] / 200) * canvas2Height;
            //starts at 0 to start it from the top
            ctx2.fillRect(rect2X, 0, rect2Width, rect2Height);
        }
    }
    else
    {
        //if the program is set to cover up the whole screen
        //then the backkground will be overfilled by the background color
        //and in the background the values are reset
        //to ensure that there can be a fresh canvas to put values on
        ctx1.fillStyle = "#add8e6";
        ctx1.fillRect(0, 0, canvas1Width, canvas1Height);
        ctx2.fillStyle = "#add8e6";
        ctx2.fillRect(0, 0, canvas2Width, canvas2Height);
    }
    
    //this draws the mini text indicating the top and bottom values
    //to help give the user a more realistic comparison when looking
    //at the graph
    ctx1.font = "12px Arial";
    ctx1.fillStyle = "black";
    ctx1.fillText("0", 5, 15);
    ctx1.fillStyle = "black";
    ctx1.fillText("500", 10, canvas1Height - 10);
    
    if (!blank)
    {
    }
    else
    {
        ctx1.fillStyle = "#add8e6";
        ctx2.fillRect(0, 0, canvas2Width, canvas2Height);
    }
    
    //this draws the mini text indicating the top and bottom values
    //to help give the user a more realistic comparison when looking
    //at the graph
    ctx2.font = "12px Arial";
    ctx2.fillStyle = "black";
    ctx2.fillText("0", 5, 15);
    ctx2.fillStyle = "black";
    ctx2.fillText("500", 10, canvas2Height - 10);
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
    // Clear variables and sets them to a default value
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

//when the browser gets the memo
//to resize the page, this is automatically called
//to ensure that the canvas will do it's best to
//fit on whatever screen the user is facing on 
window.addEventListener("resize", resizeCanvas);