$(document).ready(function() {
  console.log("test 9");
  $(".startHide").hide();
  $("canvas").hide();
  console.log("hidec");

  $(document).on("keypress", function(e) {
    if (e.which == 13) {
      //alert('You pressed enter!');
      event.preventDefault();
    }
  });
  //WHY: stop enter key from refreshing page

  //GLOBAL ARRAYS
  let todoArray = [];
  let doneArray = [];
  let reviseArray = [];
  let noteString;

  //NUMBER KEYPAD
  $(".padNum").click(function() {
    if ($("#sumAnswer").val().length < 3) {
      let concat = $("#sumAnswer").val() + $(this).val();
      $("#sumAnswer").val(concat);
    }
  });
  //WHY: maxLength in CSS not working if using keypad so need extra js.

  $("#padClear").click(function() {
    $("#sumAnswer").val("");
  });

  //CHECK VALID PICK
  function pickValid(no, operator) {
    if (no === "no." || !operator) {
      alert("Please pick a number and operator. Then press go");
    } else {
      return true;
    }
  }

  //CREATE TABLES ARRAY
  function tablesArrayCreate(no, operator) {
    let tablesArray = [];
    for (let i = 1; i < 13; i++) {
      if (operator === "+") {
        let answer = no + i;
        tablesArray.push({
          id: i,
          count: 1,
          key1: no,
          key2: operator,
          key3: i,
          key4: answer
        });
      } else if (operator === "x") {
        let answer = no * i;
        tablesArray.push({
          id: i,
          count: 1,
          key1: no,
          key2: operator,
          key3: i,
          key4: answer
        });
      } else if (operator === "-") {
        let j = no + i;
        tablesArray.push({
          id: i,
          count: 1,
          key1: j,
          key2: operator,
          key3: no,
          key4: i
        });
      } else if (operator === "/") {
        let j = no * i;
        tablesArray.push({
          id: i,
          count: 1,
          key1: j,
          key2: operator,
          key3: no,
          key4: i
        });
      }
    }
    return tablesArray;
  }

  //FILL TODO ARRAY
  function todoFill(no, operator) {
    let tables = tablesArrayCreate(no, operator);
    todoArray = tables.slice().sort(function(a, b) {
      return 0.5 - Math.random();
    }); // why would this not be todo
    return todoArray;
  } //random sorting code w3schools https://www.w3schools.com/js/js_array_sort.asp

  //SET SUM
  function sumSet(todo) {
    $("#sumAnswer")
      .val("")
      .show()
      .focus();
    $("#sumAsk").text(`${todo[0].key1} ${todo[0].key2} ${todo[0].key3} =`);
    $("#sumCheck").show();
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
      return count;
    }
  }

  //INCREMENT COUNT
  function countIncrement(todo) {
    todo[0].count++;
    console.log(todo[0].count);
    return todo[0].count;
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

  //MOVE SUM TO REVISE ARRAY
  function reviseAdd(todo, revise) {
    if (todo[0].count == 4) {
      //revise.push(todo[0]);}
      revise.push(
        `${todo[0].key1}${todo[0].key2}${todo[0].key3}=${todo[0].key4}`
      );
    }
  }

  //CREATE NOTE for report re revising
  function noteFill(revise) {
    if (revise.length === 0) {
      noteString = "No tables to revise.";
    } else {
      noteString = revise.sort().join(" ");
    }
  }

  function dateShort() {
    let d = new Date();
    let strD = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
    return strD;
  }
  //WHERE: date short format https://stackoverflow.com/questions/8398897/how-to-get-current-date-in-jquery

  //REPORT CANVAS
  function report() {
    $("canvas")
      .addLayer({
        type: "image",
        x: 125,
        y: 125,
        width: 250,
        height: 250,
        source: "assets/images/paws.png"
      })
      .addLayer({
        type: "text",
        fillStyle: "red",
        x: 125,
        y: 125,
        fontSize: 18,
        fontFamily: "Cousine, monospace",
        text: `TRIGG'S Tables REPORT
        ......................
    Tables ${$("#pickNo").val()}${$("#pickOperator")
          .find("input:checked")
          .val()} 
    Date ${dateShort()}`
      })
      .addLayer({
        type: "text",
        fillStyle: "red",
        x: 125,
        y: 200,
        fontSize: 16,
        fontFamily: "Cousine, monospace",
        maxWidth: 220,
        text: noteString
      })
      .drawLayers();
  }

  //CLICK NUMBER
  $("select").click(function() {
    $(this)
      .removeClass("selector-style")
      .addClass("selector-style--selected");
  });

  //CLICK OPERATOR
  $("label").click(function() {
    $("label")
      .removeClass("selector-style--selected")
      .addClass("selector-style");
    $(this)
      .removeClass("selector-style")
      .addClass("selector-style--selected");
  });

  //CLICK GO
  $("#pickGo").click(function() {
    let no = parseInt(
      $("#pickNo")
        .children("option:selected")
        .val()
    );
    let operator = $("#pickOperator")
      .find("input:checked")
      .val();
    let todo = todoFill(no, operator);
    $(".goHide").hide();
    $(".goShow").show();

    sumSet(todo);
    $(".goHide").hide();

    $("#pick").hide();
    $("#sumCheck").show();
    //console.log(todoArray);
  });

  //CLICK CHECK
  $("#sumCheck").click(function() {
    let sumAnswer = $("#sumAnswer").val();
    let answer = todoArray[0].key4;
    let count = todoArray[0].count;
    let todo = todoArray;
    console.log(todoArray[0].count + "start count");
    //console.log(doneArray);

    //STEP1: CHECK ANSWER - CORRECT
    if (sumCorrect(sumAnswer, answer) === true) {
      $(".trigg")
        .removeClass("bg--hi bg--0 bg--1 bg--2 bg--3")
        .addClass("bg--thumbsup");
      $(".noteResult").text(`Purr-fect.`);
      $(".noteInstruct").text(`Click next.`);
      $("#sumCheck").hide();
      $("#sumNext").show();
      $("#sumAnswer").hide();
      $("#sumAsk").text(
        `${todo[0].key1} ${todo[0].key2} ${todo[0].key3} = ${todo[0].key4}`
      );
    }

    //STEP2: CHECK ANSWER - INCORRECT 1ST ATTEMPT
    else if (count === 1) {
      $(".trigg")
        .removeClass("bg--hi bg--thumbsup bg--0 bg--1 bg--2 bg--3")
        .addClass("bg--1");
      $(".noteResult").text(`Oops it's not ${sumAnswer}.`);
      $(".noteInstruct").text(`Try again.`);
      $("#sumAnswer").val("").focus();
      countIncrement(todo);
    }

    //STEP3: CHECK ANSWER - INCORRECT 2ND ATTEMPT
    else if (count === 2) {
      $(".trigg")
        .removeClass("bg--hi bg--thumbsup bg--0 bg--1 bg--2 bg--3")
        .addClass("bg--2");
      $(".noteResult").text(`Nope it's not ${sumAnswer}.`);
      $(".noteInstruct").text(`Click next.`);
      countIncrement(todo);
      todoAdd(todo);
      $("#sumCheck").hide();
      $("#sumNext").show();
      $("#sumAnswer").hide();
      $("#sumAsk").text(
        `${todo[0].key1} ${todo[0].key2} ${todo[0].key3} = ${todo[0].key4}`
      );
    }

    //STEP4: CHECK ANSWER - INCORRECT 3RD ATTEMPT
    else {
      $(".trigg")
        .removeClass("bg--hi bg--thumbsup bg--0 bg--1 bg--2 bg--3")
        .addClass("bg--3");
      $(".noteResult").text(`It's not ${sumAnswer}.`);
      $(".noteInstruct").text(`Click next.`);
      countIncrement(todo);
      //console.log("count at step4" + count);
      //reviseAdd(todo);
      $("#sumCheck").hide();
      $("#sumNext").show();
      $("#sumAnswer").hide();
      $("#sumAsk").text(
        `${todo[0].key1} ${todo[0].key2} ${todo[0].key3} = ${todo[0].key4}`
      );
      //console.log(reviseArray);
    }
  });

  // CLICK NEXT
  $("#sumNext").click(function() {
    let done = doneArray;
    let todo = todoArray;
    let revise = reviseArray;

    reviseAdd(todo, revise);
    doneMove(done, todo);
    $("#sumNext").hide();
    $("#progress").attr(
      "style",
      `width: ${((12 - todoArray.length) / 12) * 100}%`
    );
    $("#progress").attr("aria-valuenow", 12 - todo.length);

    if (todo.length !== 0) {
      $(".noteResult").text("");
      $(".noteInstruct").text("");
      sumSet(todo);
    } else {
      //only do if complete
      $("#sum").hide();
      $(".trigg")
        .removeClass("bg--thumbsup bg--0 bg--1 bg--2 bg--3")
        .addClass("bg--score");
      $(".noteResult").text(`Well done cat you're all finished!`);
      $(".noteInstruct").text(`Click share`);

      noteFill(revise);
      console.log(reviseArray);
      console.log(noteString);
      report();
      $("canvas").show();
    }
  });
}); // end of get document
