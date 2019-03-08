var mobile = {
	brand : "Samsung",
	model : "J7"
}

var mobile2 = {
	brand : "Nokia",
	model : "3310"
}

mobile.brand

mobile2.model

var plan1 = {
    name : "Basic",
    price : 3.99,
    space : 100,
    transfers : 1000,
    pages : 10,
    discountMonths : [6,7,8]
}

var plan2 = {
    name : "Professional",
    price : 5.99,
    space : 500,
    transfers : 5000,
    pages : 50,
    discountMonths : [3,7,8]
}

var plan3 = {
    name : "Unlimited",
    price : 9.99,
    space : 2000,
    transfers : 20000,
    pages : 500,
    discountMonths : [11,12]
}

var dummy = {
    firstName : "Ali"
}

// alert(plan1.name);

// console.log(plan3);

// console.log(plan3.discountMonths[0]);

// console.log(plan1);

plan1.space = 200;

// console.log(plan1);

// console.log(plan2)

plan2.discountMonths[0] = 10;

// console.log(plan2)

// console.log(dummy);

dummy.flag = true;
dummy.firstName = "Zia";
dummy.lastName = "Khan";

console.log(dummy);

// delete dummy.flag;

var available = "firstName" in dummy;  //return boolean 

console.log(available);
// console.log(dummy);


//This array of objects
var arr = [ 
    {
        sir : "a"
    },
    {
        sir : "b"
    },
    {
        sir : "c"
    },
    {
        sir : "d"
    },
    {
        sir : "e"
    },
    {
        sir : "f"
    },
    {
        name : "g"
    },
    {
        name : "h"
    },
    {
        name : "i"
    },
    {
        name : "j"
    },
    {
        name : "k"
    },
    {
        name : "l"
    },
    {
        name : "m"
    },
    {
        name : "n"
    },
    {
        name : "o"
    }
];

// var result = key in object;

for(var i=0; i<arr.length; i++){
    var result = 'name' in arr[i];
    // console.log(result);
    if('name' in arr[i]){
        // arr[i].name = "Hasnain Ali";
        // console.log(arr[i])
    }
}
// console.log(arr)

var currentMonth = 8;

for(var i=0; i<plan1.discountMonths.length; i++){
	if(currentMonth === plan1.discountMonths[i]){
		plan1.price = plan1.price * 0.8;
	}
}

var plan2 = {
    name : "Professional",
    price : 5.99,
    space : 500,
    transfers : 5000,
    pages : 50,
	discountMonths : [3,7,8]
}

function calAnnual(){
	var bestPrice = plan2.price;
	var d = new Date();
	var month = d.getMonth()+1;
	console.log("----->",month);
	for(var i=0; i<plan2.discountMonths.length; i++){
		if(month === plan2.discountMonths[i]){
			bestPrice = plan2.price * 0.7;
		}
	}
	return bestPrice;
}

