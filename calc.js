var val1 = document.getElementById("number1");
var val2 = document.getElementById("number2");

var form = document.getElementById("myform");



form.addEventListener('submit', function(event) {
    //check that there is values
    if (!val1.value || !val2.value) {

        alert('Enter values');


    } else {
        //convert to number

        var x = parseFloat(val1.value);
        var y = parseFloat(val2.value);
        var result = x / y;
        result = result * 100;

        document.getElementById("result").innerHTML = "the Result is " + result + " %";
        //prevent the auto refresh after click
        event.preventDefault();

    }



})