var arr = [
    {
        name: "Basic",
        price: 3,
        months: [2, 4, {
            nestedMonths: [5, 3]
        }],
        currentMonth: 4,
        calcAnnual: function (discount) {
            for (var i = 0; i < this.months.length; i++) {
                var bestPrice = this.price;
                if (typeof(this.months[i]) == "object") {
                    for (var j = 0; j < this.months[i].nestedMonths.length; j++) {
                        if (this.currentMonth === this.months[i].nestedMonths[j]) {
                            bestPrice = this.price * discount;
                            break;
                        }
                    }
                }
                else {
                    if (typeof(this.months[i]) == "number") {
                        var bestPrice = this.price;
                        if (this.months[i] === this.currentMonth) {
                            bestPrice = this.price * discount;
                            break;
                        }
                    }
                }
            }
            return bestPrice;
        }
    },
    {
        name: "Pro",
        price: 5,
        months: [2, 4, {
            nestedMonths: [5, 3, 9]
        }],
        currentMonth: 9,
        calcAnnual: function (discount) {
            for (var i = 0; i < this.months.length; i++) {
                var bestPrice = this.price;
                if (typeof (this.months[i]) == "object") {
                    for (var j = 0; j < this.months[i].nestedMonths.length; j++) {
                        if (this.currentMonth === this.months[i].nestedMonths[j]) {
                            bestPrice = this.price * discount;
                            break;
                        }
                    }
                }
                else {
                    if (typeof (this.months[i]) == "number") {
                        var bestPrice = this.price;
                        if (this.months[i] === this.currentMonth) {
                            bestPrice = this.price * discount;
                            break;
                        }
                    }
                }
            }
            return bestPrice;
        }
    },
    {
        name: "Unlimited",
        price: 10,
        months: [2, 4, {
            nestedMonths: [5, 3]
        }],
        currentMonth: 10,
        calcAnnual: function (discount) {
            for (var i = 0; i < this.months.length; i++) {
                var bestPrice = this.price;
                if (typeof (this.months[i]) == "object") {
                    for (var j = 0; j < this.months[i].nestedMonths.length; j++) {
                        if (this.currentMonth === this.months[i].nestedMonths[j]) {
                            bestPrice = this.price * discount;
                            break;
                        }
                    }
                }
                else {
                    if (typeof (this.months[i]) == "number") {
                        var bestPrice = this.price;
                        if (this.months[i] === this.currentMonth) {
                            bestPrice = this.price * discount;
                            break;
                        }
                    }
                }
            }
            return bestPrice;
        }
    }
];

// for(var i=0; i<arr.length; i++){
//     console.log("Annual Price" , arr[i].calcAnnual(0.5));
// }

//Constructor Function
function Plan(name,price,months,transfers,pages,calcAnnual){
    this.name = name,
    this.price = price,
    this.months = months,
    this.transfers = transfers,
    this.pages = pages,
    this.calculateDiscount = calcAnnual
}

var discount = function calculateDiscount(currentMonth,discount){
    for(var i=0; i < this.months.length; i++){
        if(currentMonth === this.months[i]){
            this.price = this.price * discount
            break;
        }
    }
    return this.price;
}


var plan1 = new Plan("Basic",5,[5,4],500,10,discount);
var plan2 = new Plan("Pro",10,[3,2],500,10,discount);
var plan3 = new Plan("Ultimate",15,[1],500,10,discount);


console.log(plan1.calculateDiscount(5,0.5));
console.log(plan2.calculateDiscount(1,0.5));
console.log(plan3.calculateDiscount(1,0.5));


