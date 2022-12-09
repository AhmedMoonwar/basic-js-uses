function checkLeapYear(year){
    if((year % 4 == 0) && (year % 100 != 0) || (year % 400 == 0)){
        return true;
    }
    else{
        return false;
    }
}

let resultLeapYear = checkLeapYear(1700);
if (resultLeapYear == true){
    console.log("Leap Year.");
}
else{
    console.log("Not Leap Year.")
}