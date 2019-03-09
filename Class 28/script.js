var arr = [
    { name: 'Asher', age: 22 },
    { name: 'Zubair', age: 10 },
    { name: 'Kashif', age: 23 },
    { name: 'Wasif', age: 17 },
    { name: 'Hanzala', age: 21 }
]

var newDate = new Date();

for (var i = 0; i < arr.length; i++) {
    arr[i].date = newDate
}

// console.log(arr);
var allNames = [];

for (var i = 0; i < arr.length; i++) {
    if (arr[i].age <= 28 && arr[i].age >= 16) {
        for (var j = 0; j < arr[i].name.length; j++) {
            if (arr[i].name[j] == "f") {
                // console.log(arr[i].name.toString())
                allNames.push(arr[i].name);
            }
        }
    }
}

// console.log(allNames.toString());

var students = [
    {
        _id: 'std1',
        name: 'Bill Gates',
        age: 30
    },
    {
        _id: 'std2',
        name: 'Steve Jobs',
        age: 30
    },
    {
        _id: 'std3',
        name: 'Suzanne Collins',
        age: 30
    }];

var courses = [
    {
        name: 'Maths',
        std_id: ['std3', 'std1']
    },
    {
        name: 'Computer Science',
        std_id: ['std3', 'std2']
    },
    {
        name: 'Commerce',
        std_id: ['std1']
    },
]

var allCourses = [];

for(var i=0; i<students.length; i++){
    for(var j=0; j<courses.length; j++){
        for(var k=0; k<courses[j].std_id.length; k++){
            if(courses[j].std_id[k] == students[i]._id){
                allCourses.push(courses[j].name)
                var obj = {
                    name : students[i].name,
                    studentId : students[i]._id,
                    courses : allCourses
                }
            }
        }
    }
    console.log(obj);
    allCourses = [];
}