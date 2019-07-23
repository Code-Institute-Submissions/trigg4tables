$(document).ready(function() {
  console.log("test");
  $(".hideStart").hide();

  //STOP ENTER KEY FROM REFRESHING PAGE
  $(document).on("keypress", function(e) {
    if (e.which == 13) {
      event.preventDefault();
    }
  });
  //WHERE: ???

  //GLOBAL VARIABLES
  let sound = true;
  let todoArray = [];
  let reviseArray = [];
  let noteString;
  const correctAudio = new Audio();
  const incorrectAudio1 = new Audio();
  const incorrectAudio2 = new Audio();
  const doneAudio = new Audio();

  //AUDIO
  correctAudio.src = "assets/audio/correct.mp3";
  incorrectAudio1.src = "assets/audio/incorrectCat.mp3";
  incorrectAudio2.src = "assets/audio/incorrectCat.mp3";
  doneAudio.src = "assets/audio/done.mp3";
  //WHERE: https://freesound.org/people/adriann/sounds/191718/ incorrect not using
  //https://bigsoundbank.com/detail-0494-little-meow-of-a-cat.html incorrect cat
  //https://freesound.org/people/Wagna/sounds/242207/ done
  //need correct sound source

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

  //PLAY AUDIO
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

  //CHECK MISSING NO OR OPERATOR
  function missingPick(no, operator) {
    if (!no) {
      return "missingNo";
    } else if (!operator) {
      return "missingOp";
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
          count: 0,
          key1: no,
          key2: operator,
          key3: i,
          key4: answer
        });
      } else if (operator === "x") {
        let answer = no * i;
        tablesArray.push({
          id: i,
          count: 0,
          key1: no,
          key2: operator,
          key3: i,
          key4: answer
        });
      } else if (operator === "-") {
        let j = no + i;
        tablesArray.push({
          id: i,
          count: 0,
          key1: j,
          key2: operator,
          key3: no,
          key4: i
        });
      } else if (operator === "/") {
        let j = no * i;
        tablesArray.push({
          id: i,
          count: 0,
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
    });
    return todoArray;
  } //WHERE: Random sorting code w3schools https://www.w3schools.com/js/js_array_sort.asp

  //SET SUM
  function sumSet(todo) {
    $("#sumAnswer").val("");
    $("#sumAsk")
      .text(`${todo[0].key1} ${todo[0].key2} ${todo[0].key3} =`)
      .css("color", "#575778");
  }

  //CREATE TIMER
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

  //INCREMENT TODO COUNT
  function countIncrement(todo) {
    todo[0].count++;
    console.log(todo[0].count);
    return todo[0].count;
  }

  //REMOVE SUM FROM START TODO
  function todoRemove(todo) {
    todo.shift();
  }

  //APPEND SUM TO END TODO
  function todoAdd(todo) {
    todo.push(todo[0]);
  }

  //MOVE SUM TO REVISE ARRAY
  function reviseAdd(todo, revise) {
    if (todo[0].count >= 3) {
      //revise.push(todo[0]);}
      revise.push(
        `${todo[0].key1}${todo[0].key2}${todo[0].key3}=${todo[0].key4}`
      );
    }
  }

  //CREATE REVISE STRING 4 CANVAS REPORT
  function noteFill(revise) {
    if (revise.length === 0) {
      noteString = "No Tables To Revise Well Done!";
    } else {
      noteString = "Revise " + revise.sort().join(" ");
    }
  }

  //CREATE DATE 4 CANVAS REPORT
  function dateShort() {
    let d = new Date();
    let strD = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
    return strD;
  }
  //WHERE: date short format https://stackoverflow.com/questions/8398897/how-to-get-current-date-in-jquery

  //CREATE CANVAS REPORT
  function report() {
    $("canvas")
      .addLayer({
        type: "image",
        x: 125,
        y: 125,
        width: 250,
        height: 250,
        source: "assets/images/report.png"
      })
      .addLayer({
        type: "text",
        fillStyle: "#575778",
        x: 147,
        y: 25,
        fontSize: 22,
        fontFamily: "Gaegu, cursive",
        text: `trigg's tables report`
      })
      .addLayer({
        type: "text",
        fillStyle: "#7fa5b5",
        x: 147,
        y: 60,
        fontSize: 15,
        fontFamily: "Signika, sans-serif",
        text: `Date ${dateShort()}`
      })
      .addLayer({
        type: "text",
        fillStyle: "#7fa5b5",
        x: 147,
        y: 80,
        fontSize: 15,
        fontFamily: "Signika, sans-serif",
        text: `Time Taken ${$("time").html()}`
      })
      .addLayer({
        type: "text",
        fillStyle: "#7fa5b5",
        x: 147,
        y: 100,
        fontSize: 15,
        fontFamily: "Signika, sans-serif",
        text: `Tables ${$("input[name='pickNo']:checked").val()}${$(
          "input[name='pickOp']:checked"
        ).val()}`
      })
      .addLayer({
        type: "text",
        fillStyle: "#7fa5b5",
        x: 147,
        y: 165,
        fontSize: 15,
        fontFamily: "Signika, sans-serif",
        maxWidth: 140,
        text: noteString
      })
      .drawLayers();
  }
  //WHY: Layers used to allow text breaks and centering.

  //CONVERT CANVAS REPORT TO BLOB & SAVE
  function save(ev) {
    $("canvas")[0].toBlob(blob => {
      saveAs(blob, "trigg4tables.png");
    });
  }
  //WHERE: https://stackoverflow.com/questions/48054723/saving-canvas-as-blob-and-then-blob-as-file

//CLICK INFO - OPEN
$(".fa-info-circle").click(function(){
  $(".hideInfo").hide();
  $(".showInfo").show();
})

//CLICK INFO - CLOSE
$("#closeInfo").click(function(){
  $(".showInfo").hide();
  $(".hideInfo").show();
 })

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
    if (missingPick(no, operator) === "missingNo") {
      playIncorrectAudio1();
      $("#missingNo").show();
      console.log("missingNo");
    } else if (missingPick(no, operator) === "missingOp") {
      playIncorrectAudio1();
      $("#missingOp").show();
      console.log("missingOp");
    } else {
      let todo = todoFill(no, operator);
      $(".hideGo").hide();
      $(".showGo").show();
      sumSet(todo);
      timer();
      console.log("GoOp" + $("input[name='pickOp']:checked").val());
      console.log("GoNo" + $("input[name='pickNo']:checked").val());
    }
  });

  //CLICK RELOAD
  $(".reload").click(function() {
    location.reload();
  });
  //WHERE: https://stackoverflow.com/questions/5404839/how-can-i-refresh-a-page-with-jquery

  //CLICK NUMBER KEYPAD
  $(".padNum").click(function() {
    if ($("#sumAnswer").val().length < 3) {
      let concat = $("#sumAnswer").val() + $(this).val();
      $("#sumAnswer").val(concat);
    }
  });
  //WHY: maxLength in CSS not working if using keypad so need extra js.

  //CLICK CLEAR NUMBER KEYPAD
  $("#padClear").click(function() {
    $("#sumAnswer").val("");
  });

  //CLICK CHECK
  $("#sumCheck").click(function() {
    let sumAnswer = $("#sumAnswer").val();
    let answer = todoArray[0].key4;
    let count = todoArray[0].count;
    let todo = todoArray;
    console.log(todoArray[0].count + "start count");

    //STEP0: CHECK ANSWER - ENTERED
    if (!sumAnswer) {
      playIncorrectAudio1();
      $(".trigg")
        .removeClass("bg--hi bg--thumbsup bg--0 bg--1 bg--2 bg--3")
        .addClass("bg--sour");
      $(".instruct").text(`empty answer`);
      $(".fa-exclamation-triangle").show();
    }

    //STEP1: CHECK ANSWER - CORRECT
    else if (sumCorrect(sumAnswer, answer) === true) {
      playCorrectAudio();
      $(".trigg")
        .removeClass("bg--hi bg--0 bg--1 bg--2 bg--3 bg--sour")
        .addClass("bg--thumbsup");
      $(".instruct").text(`click next`);
      $("#sumAsk")
        .text(
          `${todo[0].key1} ${todo[0].key2} ${todo[0].key3} = ${todo[0].key4}`
        )
        .css("color", "#83b186");
      $(".hideCheck").hide(); //sumAnswer input, sumCheck button & triangle(xs-s & m-l)
      $(".showIncorrect").hide(); //from attempt 4
      $(".showCorrect").show();
      $("#sumNext").show();
    }

    //STEP2: CHECK ANSWER - INCORRECT 1ST ATTEMPT
    else if (count === 0) {
      playIncorrectAudio1();
      $(".trigg")
        .removeClass("bg--hi bg--thumbsup bg--0 bg--1 bg--2 bg--3 bg--sour")
        .addClass("bg--1");
      $(".incorrect").text(`${sumAnswer}`);
      $(".instruct").text(`try again & check`);
      $(".showIncorrect").show(); //thumbs down & incorrect span
      $("#sumAnswer").val("");
      //$(".fa-exclamation-triangle").hide(); //why would this be here?
      countIncrement(todo);
    }

    //STEP3: CHECK ANSWER - INCORRECT 2ND ATTEMPT
    else if (count === 1) {
      playIncorrectAudio2();
      $(".trigg")
        .removeClass("bg--hi bg--thumbsup bg--0 bg--1 bg--2 bg--3 bg--sour")
        .addClass("bg--2");
      $(".incorrect").text(`${sumAnswer}`);
      /*$(".correct")
        .text(`${todo[0].key4} `)
        .show();*/
      $(".instruct").text(`revise & click next`);
      $("#sumAsk")
        .text(
          `${todo[0].key1} ${todo[0].key2} ${todo[0].key3} = ${todo[0].key4}`
        )
        .css("color", "#3ea041");
      $(".hideCheck").hide(); //sumAnswer input, sumCheck button & triangle(xs-s & m-l)
      $(".showIncorrect").show(); //thumbs down & incorrect span
      //$(".showCorrect").show();
      $("#sumNext").show();
      countIncrement(todo);
      todoAdd(todo);
    }

    //STEP4: CHECK ANSWER - INCORRECT 3RD ATTEMPT
    else {
      playIncorrectAudio2();
      $(".trigg")
        .removeClass("bg--hi bg--thumbsup bg--0 bg--1 bg--2 bg--3 bg--sour")
        .addClass("bg--3");
      $(".incorrect").text(`${sumAnswer}`);
      /*$(".correct")
        .text(`  ${todo[0].key4}`)
        .show();*/
      $(".instruct").text(`try ${todo[0].key4} & check`);
      //$(".showCorrect").show();
      $(".showIncorrect").show(); //thumbs down & incorrect span
      $("#sumAnswer").val("");
      countIncrement(todo);
    }
  });

  // CLICK NEXT
  $("#sumNext").click(function() {
    let todo = todoArray;
    let revise = reviseArray;
    reviseAdd(todo, revise);
    todoRemove(todo);
    $(".trigg")
      .removeClass("bg--thumbsup bg--2")
      .addClass("bg--hi");
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
      playDoneAudio();
      $(".trigg")
        .removeClass("bg--thumbsup")
        .addClass("bg--score");
      $(".instruct").text(`well done`);
      $(".fa-graduation-cap").show();
      noteFill(revise);
      console.log(reviseArray);
      console.log(noteString);
      report();
      $(".hideNextDone").hide();
      $(".showNextDone").show();
      stopTimer();
    }
  });

  //CLICK DOWNLOAD REPORT
  $("#reportDownload").click(save);
}); // end of get document
