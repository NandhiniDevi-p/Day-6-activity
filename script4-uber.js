//----------------------------------Question 04----------------------------------
//write a class to calculate the uber price
class uber {
    constructor(totalKm){
        this.totalKm=totalKm;
        this.baseFare = 54.4;
        this.preKm = 7.2;

    }
    calculation(){
        var price = this.preKm * this.totalKm;
        var ammout =this.baseFare + price ;
        return ammout;
    }
    gettotalFare(){
        return`your total fare is ${this.calculation}`
    }
}
console.log();
