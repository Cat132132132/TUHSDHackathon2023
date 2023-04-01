//height (in inches)

//weight (in lbs)

//age (in years)

//

/**
 * Calculates Basal Metabolic Rate using the Mifflin-St Jeor Equation.
 * @param {number} height height in inches
 * @param {number} weight weight in pounds
 * @param {number} age age in years
 * @param {string} gender gender - either male or female. The gender affects the equation used
 * @returns 
 */
function calcBMR(height, weight, age, gender)
{
    if (gender == "male")
    {
        return 10*weight + 6.25*height - 5*age + 5;
    }

    else if (gender == "female")
    {
        return 10*weight + 6.25*height - 5*age - 161;
    }
}

console.log(calcBMR(68, 115, 15, "male"));