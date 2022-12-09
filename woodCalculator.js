function woodCalculator(numberOfChair, numberOfTable, numberOfBed){
    if(numberOfChair < 0 || numberOfTable < 0 || numberOfBed < 0){
        return -1;
    }
    else{
        let woodOfChair = numberOfChair * 1;
        let woodOfTable = numberOfTable * 3;
        let woodOfBed = numberOfBed * 5;

        let totalAmountWood = woodOfChair + woodOfTable + woodOfBed;
        return totalAmountWood;
    }
}

let result = woodCalculator(6, 2, 3);
console.log(result);