var arr = ['karachi', 'lahore', 'islamabad'];

//Adding value from last
arr.push('hyderabad');

//Deleting value from last
arr.pop()

//Adding value from start
arr.unshift("sukkur")

//Deleting value from start
arr.shift()

//Replacing the values with new value according to your index
arr.splice(0, 2, "Hyderabad")

var nums = [1, 2, 3, 4, 5, 6, 7];

//Replacing the values with new value according to your index
nums.splice(2, 5, "My Nums")

var num = [1, 2, 3, 4, 5]

//Replacing the values with new value according to your index
num.splice(1, 3, "Abcd")

var arr = ['karachi', 'lahore', 'islamabad'];

//Create a copy of indexes as new array
arr.slice(0, 2)

arr.slice(0, 1)

arr.slice(0, 3)

//
for (var i = 0; i <= 10; i++) {
    console.log(2 * i);
}

var namess = ['Ali', 'Ahmed', 'Khan', 'Zia', 'Arsalan'];

for (var i = 0; i < namess.length; i++) {
    console.log("My name is ", namess[i])
}

for (var i = 0; i <= 10; i++) {
    if (i == 5) {
        break;
    }
    console.log(i)
}

var namess = ['Ali', 'Ahmed', 'Khan', 'Zia', 'Arsalan'];

for (var j = 0; j < namess.length; j++) {
    if (namess[j] == "Zia") {
        break;
    }
    console.log(namess[j])
}

for (var i = 0; i < namess.length; i++) {
    if (namess[i] == "Khan") {
        flag = true;
    }

    if (flag == true) {
        console.log("Return True")
    }
    else {
        console.log("Return False")
    }
}

for(var i=0; i<firstName.length; i++){
	for(var j=0; j<lastName.length; j++){
	console.log(firstName[i] + " " + lastName[j])
}
}