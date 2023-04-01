// since there is only going to be one instence of this running
// only one file is used to gather the data stored
localStorage.setItem("a", "as");
class User
{
    constructor(name, weight, height, gender)
    {
        this.name = name;
        this.weight = weight;
        this.height = height;
        this.gender = gender;
    }

    /**
     * 
     * @returns name of user
     */
    getName()
    {
        return this.name;
    }

    /**@returns weight in lbs */
    getWeight()
    {
        return this.weight;
    }

    /**@returns height in inches */
    getHeight()
    {
        return this.height;
    }

    /**@returns gender as a string ('male' or 'female' only) */
    getGender()
    {
        return this.gender;
    } 

    /**
     * Calculates resting calorie rate using the Mifflin-St Jeor Equation.
     * @param {number} height height in inches
     * @param {number} weight weight in pounds
     * @param {number} age age in years
     * @param {string} gender gender - either male or female. The gender affects the equation used
     * @returns the basal metabolic rate, in calories per day.
     */
    calcBMR(height, weight, age, gender)
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
    calcBMI(height, weight)
    {
        return 703*weight / (height*height);
    }
    }