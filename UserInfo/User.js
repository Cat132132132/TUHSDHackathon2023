// since there is only going to be one instence of this running
// only one file is used to gather the data stored
class User
{
    /**
     * Constructor for the User class
     */
    constructor(name, weight, height, age, gender)
    {
        this.name = name;
        this.weight = weight;
        this.height = height;
        this.age = age;
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
     * @returns the basal metabolic rate, in calories per day.
     */
    calcBMR()
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
     * @returns BMI
     */
    calcBMI()
    {
        return (703*weight / (height*height)).toFixed(2);
    }

    setUserToNull()
    {
        this.name = "Default Name";
        this.gender = "Default Gender";
        this.weight = 0;
        this.height = 0;
        this.age = 0;
    }
}