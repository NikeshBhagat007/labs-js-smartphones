//SmartPhone
class SmartPhone
{
    constructor(ram, batteryPower,price)
    {
        this.ram = ram;
        this.batteryPower = batteryPower;
        this.price = price;
    }
    displayFeatures()
    {
        return this.ram + "\n" + this.batteryPower + "\n" + this.price;
    }
    remainingAmount(amount)
    {
        this.price = this.price - amount;
    }
}


// AndroidPhone
class AndroidPhone extends SmartPhone
{
    constructor(modelName,ram,batteryPower,price)
    {
        //takes values from its derived class using super constructor
        super(ram,batteryPower,price); 
        this.modelName =modelName;
        // if(arguments.length == 4)
        // {
        //     this.modelName =modelName;
        //     this.ram =ram;
        //     this.batteryPower =batteryPower;
        //     this.price =price;
        // }
    }
    displayFeatures()
    {
        return this.modelName +'\n'+ this.ram +'\n'+ this.batteryPower + '\n'+ this.price;
    }
    remainingAmount(amount)
    {
        if(amount == this.price)
        {
            return "Customer has no more amount";
        }
        else if(amount > this.price)
        {
            this.price = amount - this.price
            return `Customer has remaining Rs.${this.price} after buying the android phone`
        }
    }
}


// IPhone
class IPhone extends SmartPhone
{
    constructor(seriesName, ram, batteryPower, price)
    {
        //takes values from its derived class using super constructor
        super(ram,batteryPower,price); 
        this.seriesName = seriesName;
    }
    displayFeatures()
    {
        return this.seriesName +'\n'+ this.ram +'\n'+ this.batteryPower + '\n'+ this.price;
    }
    remainingAmount(amount)
    {
        if(amount == this.price)
       {
            return "Customer has no more amount";
       }
       else if(amount > this.price)
        {
            this.price = amount - this.price
            return `Customer has remaining Rs.${this.price} after buying an iphone`
        }
        else
        {
            return "Customer can't able to buy a phone due to insufficient amount";
        }
    }
}
//MobileCampus

class MobileCampus
{
    constructor(NoOfMobiles, NoOfAndroidMobiles, NoOfIPhoneMobiles)
    {
        this.NoOfMobiles =NoOfMobiles;
        this.NoOfAndroidMobiles =NoOfAndroidMobiles;
        this.NoOfIPhoneMobiles =NoOfIPhoneMobiles;
    }
    changeMobileAvailabilityNumber(count,type)
    {
        console.log(count);
        console.log(type);
        if(type === "android")
        {
            this.NoOfAndroidMobiles = (this.NoOfAndroidMobiles -count);
            return 'Available android mobiles are '+this.NoOfAndroidMobiles;
        }
        else if(type === "iphone")
        {
            this.NoOfIPhoneMobiles = (this.NoOfIPhoneMobiles -count);
            return 'Available iphone mobiles are '+this.NoOfIPhoneMobiles;
        }
        else
        {
            return this.NoOfMobiles = (this.NoOfMobiles - count);
            console.log(this.NoOfMobiles);
        }
    }
}