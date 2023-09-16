icd= new Map(

    
);
class Condition{
    constructor(name, timeFrame, treatment){
        this.name = name;//string proccess this maybe from external site:https://www.mayoclinic.org/diseases-conditions
        this.icd_id = icd_id;//string 
        this.timeFrame = timeFrame;//a tuple of Data objects
        this.treatment = treatment;//string
    }

}
