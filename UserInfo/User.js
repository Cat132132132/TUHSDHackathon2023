// since there is only going to be one instence of this running
// only one file is used to gather the data stored
class User
{
    constructor(name, dietchoice, weight, height, gender)
    {
        this.name = name;
        this.dietchoice = dietchoice;
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

    /**@returns diet choice */
    getDietChoice()
    {
        return this.dietchoice;
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

    
}