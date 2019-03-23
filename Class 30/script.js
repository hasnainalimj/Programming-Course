//Overview Prototypes

//1) Contructor Function
//2) Create Prototype 
//3) Create Object

//1
// function Factory(name,yard,products){
//     this.name = name;
//     this.yard = yard;
//     this.products = products
// }

// Factory.prototype.sum = function(price , numOfItems){
//     return price * numOfItems
// }

// Factory.prototype.obj = {
//     brand : "Hifi",
//     years : 2012
// }

// Factory.prototype.quality = true;

// Factory.prototype.ceo = "Zia";

// Factory.prototype.ratings = 5;

// var product1 = new Factory("Habib",2000,['Desi Ghee','Oil','Olive Oil']);

// console.log(product1.__proto__.sum(250,product1.products.length));
// console.log(product1);

var num = [1,2,3,4,5];
var nums = [6,7,8,9,10];

var allNums = [...num,...nums]; //Concatenate Old values with new values using spread operators

