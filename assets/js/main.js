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

        let first = parseInt($("#selectFirst").children("option:selected").val());
        let operator = $("#selectOperator").find("input:checked").val();
        //WHY: parseInt method as option values string by default

        if (!(first > 0) || !operator) { alert("Please pick a number and operator. Then press go"); }

        else {
            console.log(first, operator);

            //WHAT: Create tables Array
            let tableArray = [];

            for (let i = 1; i < 13; i++) {
                if (operator === '+') {
                    let answer = first + i;
                    tableArray.push({ id: i, key1: first, key2: operator, key3: i, key4: answer });
                }
                else
                if (operator === 'x') {
                    let answer = first * i;
                    tableArray.push({ id: i, key1: first, key2: operator, key3: i, key4: answer });
                }
                else
                if (operator === '-') {
                    let j = first + i;
                    tableArray.push({ id: i, key1: j, key2: operator, key3: first, key4: i });
                }
                else
                if (operator === '/') {
                    let j = first * i;
                    tableArray.push({ id: i, key1: j, key2: operator, key3: first, key4: i });
                }
            }

            console.log(tableArray);
            
            //WHAT: Create Test Array
            let testArray = tableArray.slice().sort(function(a, b) { return 0.5 - Math.random() }); //random sorting code w3schools https://www.w3schools.com/js/js_array_sort.asp
            console.log(testArray);
            
            $(".ask-hidden").removeClass();
            $("#askFirst").html(testArray[0].key1);
            $("#askOperator").html(testArray[0].key2);
            $("#askSecond").html(testArray[0].key3);
            $("#askAnswer").html(testArray[0].key4);
            //$("#askEqual").attr("visibility","visible");
            
            
            


        } //end of else
    }); // end of press go


}); // end of get document



// canvas

/*var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.font = "30px Arial";
ctx.fillText(`Tables: ${myArray[2]["key1"]} ${myArray[2]["key2"]}`,10,50);
ctx.fillText(`Time: 02.00`,10,80);
ctx.fillText(`Revise: 7x4=28`,10,110);*/
