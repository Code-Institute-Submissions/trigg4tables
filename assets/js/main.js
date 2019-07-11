$(document).ready(function() {
  console.log("test 9");
  $(".hideStart").hide();

  $(document).on("keypress", function(e) {
    if (e.which == 13) {
      //alert('You pressed enter!');
      event.preventDefault();
    }
  });
  //WHY: stop enter key from refreshing page

  //GLOBAL ARRAYS
  let sound = true;
  let todoArray = [];
  let doneArray = [];
  let reviseArray = [];
  let noteString;

  const correctAudio = new Audio();
  correctAudio.src = "assets/audio/correct.mp3";

  const incorrectAudio1 = new Audio();
  incorrectAudio1.src = "assets/audio/incorrect1.mp3";

  const incorrectAudio2 = new Audio();
  incorrectAudio2.src = "assets/audio/incorrect2.mp3";

  const doneAudio = new Audio();
  doneAudio.src = "assets/audio/done.mp3";

  //WHERE: https://freesound.org/people/adriann/sounds/191718/

  //SOUND ON OFF
  $(".sound").click(function() {
    if (sound === true) {
      $(".sound")
        .removeClass("fa-volume-mute")
        .addClass("fa-volume-up");
      sound = false;
      console.log(sound);
    } else {
      $(".sound")
        .removeClass("fa-volume-up")
        .addClass("fa-volume-mute");
      sound = true;
      console.log(sound);
    }
  });

  function playCorrectAudio() {
    if (sound === true) {
      correctAudio.play();
    }
  }

  function playIncorrectAudio1() {
    if (sound === true) {
      incorrectAudio1.play();
    }
  }

  function playIncorrectAudio2() {
    if (sound === true) {
      incorrectAudio2.play();
    }
  }

  function playDoneAudio() {
    if (sound === true) {
      doneAudio.play();
    }
  }

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
          key2: "÷",
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
    $("#sumAnswer").val("");
    //.focus();
    $("#sumAsk").text(`${todo[0].key1} ${todo[0].key2} ${todo[0].key3} =`).css("color", "#575778");
  }

  //TIMER
  let seconds = 0;
  let minutes = 0;
  let t;

  function add() {
    seconds++; //start at 0 and add 1
    if (seconds >= 60) {
      seconds = 0;
      minutes++;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    $(".timer").text(`${minutes}:${seconds}`); //update text every second
    timer(); //run timer function - which runs the add function after 1 second - creates the loop
  }

  function timer() {
    t = setTimeout(add, 1000); //setTimeout method
  }

  function stopTimer() {
    clearTimeout(t);
  }
  //WHERE: Based on https://codepad.co/snippet/javascript-stopwatch-using-javascript-and-css

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
  $(".labelNo").click(function() {
    $(".labelNo")
      .removeClass("selector-style--selected")
      .addClass("selector-style");
    $(this)
      .removeClass("selector-style")
      .addClass("selector-style--selected");
  });

  //CLICK OPERATOR
  $(".labelOp").click(function() {
    $(".labelOp")
      .removeClass("selector-style--selected")
      .addClass("selector-style");
    $(this)
      .removeClass("selector-style")
      .addClass("selector-style--selected");
  });
  //WHERE: https://stackoverflow.com/questions/8622336/jquery-get-value-of-selected-radio-button

  //CLICK GO
  $("#pickGo").click(function() {
    let no = parseInt($("input[name='pickNo']:checked").val());
    let operator = $("input[name='pickOp']:checked").val();
    let todo = todoFill(no, operator);
    $(".hideGo").hide();
    $(".showGo").show();
    sumSet(todo);
    timer();
    console.log("GoOp" + $("input[name='pickOp']:checked").val());
    console.log("GoNo" + $("input[name='pickNo']:checked").val());
  });

  //CLICK RELOAD
  $(".reload").click(function() {
    location.reload();
  });
  //WHERE: https://stackoverflow.com/questions/5404839/how-can-i-refresh-a-page-with-jquery

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
      playCorrectAudio();
      $(".trigg")
        .removeClass("bg--hi bg--0 bg--1 bg--2 bg--3")
        .addClass("bg--thumbsup");
      $(".instruct").text(`click next`);
      $(".showHideIncorrect").hide();
      $(".showHideCorrect").show();
      $(".hideCheck").hide();
      $(".showCheck").show();
      $("#sumAsk")
        .text(
          `${todo[0].key1} ${todo[0].key2} ${todo[0].key3} = ${todo[0].key4}`
        )
        .css("color", "#3ea041");
    }

    //STEP2: CHECK ANSWER - INCORRECT 1ST ATTEMPT
    else if (count === 1) {
      playIncorrectAudio1();
      $(".trigg")
        .removeClass("bg--hi bg--thumbsup bg--0 bg--1 bg--2 bg--3")
        .addClass("bg--1");
      $(".incorrect").text(`${sumAnswer} `);
      $(".showHideIncorrect").show();
      $(".instruct").text(`try again & check`);
      $("#sumAnswer").val("");
      //.focus();
      countIncrement(todo);
    }

    //STEP3: CHECK ANSWER - INCORRECT 2ND ATTEMPT
    else if (count === 2) {
      playIncorrectAudio2();
      $(".trigg")
        .removeClass("bg--hi bg--thumbsup bg--0 bg--1 bg--2 bg--3")
        .addClass("bg--2");
      $(".incorrect").text(`${sumAnswer} `);
      $(".instruct").text(`revise & click next`);
      $(".showHideIncorrect").show();
      $(".fa-lightbulb").show();
      countIncrement(todo);
      todoAdd(todo);
      $(".hideCheck").hide();
      $(".showCheck").show();
      $("#sumAsk").text(
        `${todo[0].key1} ${todo[0].key2} ${todo[0].key3} = ${todo[0].key4}`
      ).css("color", "#3ea041");
    }

    //STEP4: CHECK ANSWER - INCORRECT 3RD ATTEMPT
    else {
      playIncorrectAudio2();
      $(".trigg")
        .removeClass("bg--hi bg--thumbsup bg--0 bg--1 bg--2 bg--3")
        .addClass("bg--3");
      $("#incorrect").text(`${sumAnswer} `);
      //$(".noteResult")
      //.text(`${sumAnswer} is incorrect`)
      //.css("color", "#d75735");
      $(".instruct").text(`revise & click next`);
      $(".showCheckIncorrect").show();
      $(".showCheckIncorrect2").show();
      countIncrement(todo);
      //console.log("count at step4" + count);
      //reviseAdd(todo);
      $(".hideCheck").hide();
      $(".showCheck").show();
      $("#sumAsk").text(
        `${todo[0].key1} ${todo[0].key2} ${todo[0].key3} = ${todo[0].key4}`
      ).css("color", "#3ea041");
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
    $(".hideNextSum").hide();
    $(".showNextSum").show();
    $(".hideNext").hide();
    $("#progress").attr(
      "style",
      `width: ${((12 - todoArray.length) / 12) * 100}%`
    );
    $("#progress").attr("aria-valuenow", 12 - todo.length);

    if (todo.length !== 0) {
      $(".instruct").text("try & check");
      sumSet(todo);
    } else {
      //only do if complete
      //$("#sum").hide();
      playDoneAudio();
      $(".trigg")
        .removeClass("bg--thumbsup bg--0 bg--1 bg--2 bg--3")
        .addClass("bg--score");
      $(".instruct").text(`Well done cat you're all finished!`);

      noteFill(revise);
      console.log(reviseArray);
      console.log(noteString);
      report();
      $(".hideNextDone").hide();
      $(".showNextDone").show();
      stopTimer();
    }
  });
}); // end of get document
