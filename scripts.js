function students(fName, lName, age) {
    this.firstName = fName;
    this.lastName = lName;
    this.age = age;
    this.hello = function hello() {
        // console.log("My name is " + this.firstName + " last name is " + this.lastName + " age is " + this.age);
        return "My name is " + this.firstName + " last name is " + this.lastName + " age is " + this.age;
    };


}

//array
student = []
s1 = new students("Gm", "Mohamed", 40);
s2 = new students("G", "Mo", 41);
s3 = new students("m", "Mohmed", 43);
student.push(s1);
student.push(s2);
student.push(s3);
console.log(student)
    //loop through array
for (var s in student) {
    console.log(student[s].hello());
}
// for (var index = 0; index < student.length; index++) {
//     var s = student[index];
//     s.hello();
// }
this.name = 'outside function'
var newFunction = {
    name: "inside function",

    greating: function() {
        return this.name;

    }
};
var testNewFunction = newFunction.greating;
console.log(testNewFunction());
var therealwGreating = newFunction.greating.bind(newFunction); //testNewFunction.greating.bind(testNewFunction);
console.log(therealwGreating());