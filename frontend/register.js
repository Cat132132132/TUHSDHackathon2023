//height (in inches)
height = 68;
//weight (in lbs)
weight = 115;
//age (in years)
age = 15;
//gender (male or female)
gender = "male";

/**
 * Calculates resting calorie rate using the Mifflin-St Jeor Equation.
 * @param {number} height height in inches
 * @param {number} weight weight in pounds
 * @param {number} age age in years
 * @param {string} gender gender - either male or female. The gender affects the equation used
 * @returns the basal metabolic rate, in calories per day.
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

/**
 * Calculates the Body Mass Index of a person, provided with their height and weight.
 * @param {number} height height in inches
 * @param {number} weight weight in pounds
 * @returns 
 */
function calcBMI(height, weight)
{
    return 703*weight / (height*height);
}

console.log(calcBMR(height, weight, age, gender));
console.log(calcBMI(height, weight));