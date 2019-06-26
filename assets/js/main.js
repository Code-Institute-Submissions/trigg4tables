$(document).ready(function() {
    console.log('test a');


    //WHAT: Style number selected
    $("select").click(function() {
        $(this).removeClass("selector-style").addClass("selector-style--selected");
    });


    //WHAT: Style operator selected
    $("label").click(function() {
        $("label").removeClass("selector-style--selected").addClass("selector-style");
        $(this).removeClass("selector-style").addClass("selector-style--selected");
    });


    //WHAT: Get whats selected by user when they press go. 

    $("#selectGo").click(function() {

        let first = $("#selectNo").children("option:selected").val();
        let operator = $("#selectOperator").find("input:checked").val();

        if (first > 0 && operator) { console.log(first, operator); }

        else { alert("Please pick a number and operator. Then press go"); }
    })



});





/*console.log('test');

var first = 9;
var operator = 'x';
var myArray = [];

for (let i = 1; i < 13; i++) {
    if (operator === '+') {
        var answer = first + i;
        myArray.push({ id: i, key1: first, key2: operator, key3: i, key4: answer });
    }
    else
    if (operator === 'x') {
        let answer = first * i;
       myArray.push({ id: i, key1: first, key2: operator, key3: i, key4: answer });
    }
    else
    if (operator === '-') {
        let j = first + i;
        myArray.push({ id: i, key1: j, key2: operator, key3: first, key4: i });
           }
    else
    if (operator === '/') {
        let j = first * i;
        myArray.push({ id: i, key1: j, key2: operator, key3: first, key4: i });
    }
}

console.log(myArray);
console.log(myArray[2]["key3"]);
var myArray2 = myArray.slice().sort(function(a, b){return 0.5 - Math.random()}); //random sorting code w3schools https://www.w3schools.com/js/js_array_sort.asp
console.log(myArray2);*/


// canvas

/*var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.font = "30px Arial";
ctx.fillText(`Tables: ${myArray[2]["key1"]} ${myArray[2]["key2"]}`,10,50);
ctx.fillText(`Time: 02.00`,10,80);
ctx.fillText(`Revise: 7x4=28`,10,110);*/
