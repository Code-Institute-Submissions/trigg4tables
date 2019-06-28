$(document).ready(function() {
    console.log('test n');
    $("#sum").hide();
    $("#replyNext").hide();

    //GLOBAL ARRAYS
    let todoArray = [];
    let doneArray = [];

    //CHECK VALID PICK
    function pickValid(no, operator) {
        if (no === "no." || !operator) {
            alert("Please pick a number and operator. Then press go");
        }
        else {
            return true;
        }
    }

    //CREATE TABLES ARRAY
    function tablesArrayCreate(no, operator) {
        let tablesArray = [];
        for (let i = 1; i < 13; i++) {
            if (operator === '+') {
                let answer = no + i;
                tablesArray.push({ id: i, count: 0, key1: no, key2: operator, key3: i, key4: answer });
            }
            else if (operator === 'x') {
                let answer = no * i;
                tablesArray.push({ id: i, count: 0, key1: no, key2: operator, key3: i, key4: answer });
            }
            else if (operator === '-') {
                let j = no + i;
                tablesArray.push({ id: i, count: 0, key1: j, key2: operator, key3: no, key4: i });
            }
            else if (operator === '/') {
                let j = no * i;
                tablesArray.push({ id: i, count: 0, key1: j, key2: operator, key3: no, key4: i });
            }
        }
        return tablesArray;
    }

    //FILL TODO ARRAY  
    function todoFill(no, operator) {
        let tables = tablesArrayCreate(no, operator);
        todoArray = tables.slice().sort(function(a, b) { return 0.5 - Math.random() }); // why would this not be todo
        return todoArray;
    } //random sorting code w3schools https://www.w3schools.com/js/js_array_sort.asp


    //SET SUM
    function sumSet(todo) {
        if (todo.length > 0) {
            $("#sumAnswer").val('');
            $("#sumFirst").text(todo[0].key1);
            $("#sumOperator").text(todo[0].key2);
            $("#sumSecond").text(todo[0].key3);
            $("#todoAnswer").text(todo[0].key4); //testing only get rid
        }
        else {
            $("#replyMessage").text(`Well done cat you're all finished!`);
        }
    }


    //CHECK ANSWER CORRECT
    function sumCorrect(sumAnswer, answer) {
        if (sumAnswer == answer) {
            return true;
        }
    }

    //CHECK ANSWER INCORRECT
    function sumIncorrect(sumAnswer, answer, count) {
        if (sumAnswer !== answer) {
            count++;
            return count;
        }
    }

    //MOVE SUM TO DONE
    function doneMove(done, todo) {
        done.push(todo[0]);
        todo.shift();
    }


    //APPEND SUM TO END TODO
    function todoAdd(todo) {
        todo.push(todo[0]);
    }


    //CLICK NUMBER
    $("select").click(function() {
        $(this).removeClass("selector-style").addClass("selector-style--selected");
    });


    //CLICK OPERATOR
    $("label").click(function() {
        $("label").removeClass("selector-style--selected").addClass("selector-style");
        $(this).removeClass("selector-style").addClass("selector-style--selected");
    });


    //CLICK GO 
    $("#pickGo").click(function() {
        let no = parseInt($("#pickNo").children("option:selected").val());
        let operator = $("#pickOperator").find("input:checked").val();
        let todo = todoFill(no, operator);
        sumSet(todo);
        $("#sum").show();
        console.log(todoArray);
    });


    //CLICK CHECK 
    $("#sumCheck").click(function() {
        let sumAnswer = $("#sumAnswer").val();
        let answer = todoArray[0].key4;
        let count = todoArray[0].count;
        let todo = todoArray;

        //STEP1: CHECK ANSWER - CORRECT
        if (sumCorrect(sumAnswer, answer) === true) {
            $("#replyMessage").text(`Niceone that's correct. Click next.`);
            $("#replyNext").show();
        }

        //STEP2: CHECK ANSWER - INCORRECT 1ST ATTEMPT
        else if (sumIncorrect(sumAnswer, answer, count) === 1) {
            $("#replyMessage").text(`Sorry ${sumAnswer} is incorrect. Try again.`);
            $("#sumAnswer").val('');
        }

        //STEP3: CHECK ANSWER - INCORRECT 2ND ATTEMPT
        else if (sumIncorrect(sumAnswer, answer, count) === 2) {
            $("#replyMessage").text(`Sorry ${sumAnswer} is incorrect. The correct answer is ${answer}. We will ask again at the end. Click next.`);
            $("#replyNext").show();
            todoAdd(todo[0]);
        }

        //STEP4: CHECK ANSWER - INCORRECT 3RD ATTEMPT
        else {
            $("#replyMessage").text(`Sorry ${sumAnswer} is incorrect. The correct answer is ${answer}. Click next.`);
            $("#replyNext").show();
        }
    });


    // CLICK NEXT
    $("#replyNext").click(function() {
        let done = doneArray;
        let todo = todoArray;
        doneMove(done, todo);
        sumSet(todo);
        $("#replyMessage").text('');
        $("#replyNext").hide();
    });



}); // end of get document



// canvas

/*var canvas = document.getElementById("myCanvas");
var ctx = canvas.getContext("2d");
ctx.font = "30px Arial";
ctx.fillText(`Tables: ${myArray[2]["key1"]} ${myArray[2]["key2"]}`,10,50);
ctx.fillText(`Time: 02.00`,10,80);
ctx.fillText(`Revise: 7x4=28`,10,110);*/
