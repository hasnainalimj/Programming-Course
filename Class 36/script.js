function roundNum(number) {
 var localNum = number.toString();
 var orginalNum = number;

 var lastNum = parseInt(localNum.charAt(localNum.length-1));

 return orginalNum - lastNum + 10;
}

// console.log(roundNum(99));

// function ColdDrinks(name , liter){
//     this.name = name;
//     this.liter = liter;
// }


// var pro1 = new ColdDrinks("dew",1);
// var pro2 = new ColdDrinks("pepsi",1.5);

// ColdDrinks.prototype.beverages = "drinks";

console.log(pro1)
console.log(pro2)



