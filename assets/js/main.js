const onReady = function() {
  //WHY: Using variable to limit scope of internal variables and functions.
  //jQuery document ready not used as doesn't allow jasmine testing.
  //WHERE: https://stackoverflow.com/questions/29153733/how-to-unit-test-a-document-ready-function-using-jasmine

  //PRELOAD IMAGES
  const startImage = new Image();
  startImage.src = "assets/images/hi.svg";

  const emptyImage = new Image();
  emptyImage.src = "assets/images/sour.svg";

  const correctImage = new Image();
  correctImage.src = "assets/images/thumbsup.svg";

  const incorrect1Image = new Image();
  incorrect1Image.src = "assets/images/hmm.svg";

  const incorrect2Image = new Image();
  incorrect2Image.src = "assets/images/thatway.svg";

  const incorrect3Image = new Image();
  incorrect3Image.src = "assets/images/oops.svg";

  const doneImage = new Image();
  doneImage.src = "assets/images/score.svg";

  //WHY: Images preloaded to fix bug on iOS where image only visible on second use.
  //WHERE: https://www.thonky.com/javascript-and-css-guide/javascript-image-preload

  //PRELOAD AUDIO
  const audioCorrect = new Audio();
  audioCorrect.src = "assets/audio/correct.mp3";

  const audioIncorrect = new Audio();
  audioIncorrect.src = "assets/audio/incorrectCat.m4a";

  const audioDone = new Audio();
  audioDone.src = "assets/audio/done.mp3";
  //WHERE: https://bigsoundbank.com & https://freesound.org

  //GLOBAL VARIABLES
  let sound = true;
  let tableSet;
  let todoArray = [];
  let reviseArray = [];
  let noteString;
  const sumAskElement = $("[data-sum=ask]");
  const sumTryElement = $("[data-sum=try]");
  const timeElement = $(".time");
  const triggBackground = $("[data-bg=trigg]");
  const sumNextButton = $("[data-button=sumNext]");
  const messageElement = $("[data-message=all]");
  const infoOpenIcon = $("[data-icon=infoOpen]");
  //WHY: DOM elements declared if used in multiple functions.
  //WHY: Data attributes used in JS. Classes & IDs used in CSS.

  //STOP ENTER KEY FROM REFRESHING PAGE
  $(document).on("keypress", function(e) {
    if (e.which == 13) {
      event.preventDefault();
    }
  });
  /*WHERE:https://stackoverflow.com/questions/8866053/stop-reloading-page-with-enter-key*/

  //PLAY AUDIO
  function playAudio(audio) {
    if (sound === true) {
      audio.play();
      audio.currentTime = 0;
    }
  }
  //WHY: Reset audio to start of clip to ensure consistent audio for next play.
  //WHERE: https://stackoverflow.com/questions/9563887/setting-html5-audio-position

  //CREATE TABLES ARRAY
  function tablesArrayCreate(no, operator) {
    const tablesArray = [];
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
        tableSet = no + "+";
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
        tableSet = no + "x";
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
        tableSet = no + "-";
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
        tableSet = no + "÷";
      }
    }
    return tablesArray;
  }
  //WHAT: Number and operator string for tableSet used in later report.

  //FILL TODO ARRAY
  function todoFill(no, operator) {
    let tables = tablesArrayCreate(no, operator);
    todoArray = tables.slice().sort(function(a, b) {
      return 0.5 - Math.random();
    });
    return todoArray;
  }
  //WHERE: Random sorting code https://www.w3schools.com/js/js_array_sort.asp

  //SET SUM
  function sumSet(todo) {
    sumTryElement.text("");
    sumAskElement
      .text(`${todo[0].key1} ${todo[0].key2} ${todo[0].key3} =`)
      .css("color", "#575778");
  }

  //CREATE TIMER
  let seconds = 0;
  let minutes = 0;
  let time;

  function add() {
    seconds++;
    if (seconds >= 60) {
      seconds = 0;
      minutes++;
    }
    if (seconds < 10) {
      seconds = "0" + seconds;
    }
    timeElement.text(`${minutes}:${seconds}`);
    timer();
  }

  function timer() {
    time = setTimeout(add, 1000);
  }

  function stopTimer() {
    clearTimeout(time);
  }
  //WHERE: Based on https://codepad.co/snippet/javascript-stopwatch-using-javascript-and-css

  //CHECK ANSWER CORRECT
  function sumCorrect(sumTry, answer) {
    if (sumTry == answer) {
      return true;
    } else {
      return false;
    }
  }

  //INCREMENT TODO COUNT
  function countIncrement(todo) {
    todo[0].count++;
    return todo[0].count;
  }

  //APPEND SUM TO END TODO
  function todoAdd(todo) {
    todo.push(todo[0]);
    return todo;
  }

  //REMOVE SUM FROM START TODO
  function todoRemove(todo) {
    todo.shift();
    return todo;
  }

  //MOVE SUM TO REVISE ARRAY
  function reviseAdd(todo, revise) {
    if (todo[0].count >= 3) {
      revise.push(
        `${todo[0].key1}${todo[0].key2}${todo[0].key3}=${todo[0].key4}`
      );
    }
    return revise;
  }

  //CREATE REVISE STRING 4 CANVAS REPORT
  function noteFill(revise) {
    if (revise.length === 0) {
      noteString = "No Tables To Revise Well Done!";
    } else {
      noteString = "Revise " + revise.sort().join(" ");
    }
    return noteString;
  }

  //CREATE DATE 4 CANVAS REPORT
  function dateShort() {
    const d = new Date();
    const strD = d.getDate() + "/" + (d.getMonth() + 1) + "/" + d.getFullYear();
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
        text: `Time Taken ${timeElement.html()}`
      })
      .addLayer({
        type: "text",
        fillStyle: "#7fa5b5",
        x: 147,
        y: 100,
        fontSize: 15,
        fontFamily: "Signika, sans-serif",
        text: `Tables ${tableSet}`
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
  //WHY: Layers used to allow varying fonts, text breaks and centering.

  //CONVERT CANVAS REPORT TO BLOB & SAVE
  function save(ev) {
    $("canvas")[0].toBlob(blob => {
      saveAs(blob, "trigg4tables.png");
    });
  }
  //WHERE: https://stackoverflow.com/questions/48054723/saving-canvas-as-blob-and-then-blob-as-file

  //SOUND ON OFF
  $("[data-icon=sound]").click(function() {
    const icon = $(this);
    if (sound === true) {
      icon.removeClass("fa-volume-up").addClass("fa-volume-mute");
      sound = false;
    } else {
      icon.removeClass("fa-volume-mute").addClass("fa-volume-up");
      sound = true;
    }
  });

  //CLICK INFO - OPEN IF NOT DISABLED
  infoOpenIcon.click(function() {
    if (!$(this).hasClass("disable")) {
      $("[data-hide~=infoOpen]").hide();
      $("[data-show~=infoOpen]").show();
    }
  });
  //WHERE: https://stackoverflow.com/questions/34455085/can-i-have-multiple-values-in-one-html-data-element
  //WHERE: https://stackoverflow.com/questions/7841048/how-to-check-if-an-element-does-not-have-a-specific-class

  //CLICK INFO - CLOSE
  $("[data-button=infoClose]").click(function() {
    $("[data-hide~=infoClose]").hide();
    $("[data-show~=infoClose]").show();
    $("iframe").attr("src", "https://www.youtube.com/embed/83L5Y7Vi15w?rel=0");
  });
  //WHY: Resetting src for video to stop audio playing after clicking close button.
  //WHERE: https://stackoverflow.com/questions/2128535/stop-a-youtube-video-with-jquery

  //CLICK NUMBER OR OPERATOR
  $("fieldset")
    .children("label")
    .click(function() {
      const button = $(this);
      button.siblings().removeClass("button-style--selected");
      button.siblings("i").hide();
      button.addClass("button-style--selected");
    });
  //WHAT: Apply select style & hide warn icon

  //CLICK GO
  $("[data-button=go]").click(function() {
    const no = parseInt($("input[name='pickNo']:checked").val());
    const operator = $("input[name='pickOp']:checked").val();

    if (!no) {
      $("[data-icon=missingNo]").show();
    }

    if (!operator) {
      $("[data-icon=missingOp]").show();
    }

    if (no && operator) {
      const todo = todoFill(no, operator);
      $("[data-hide~=go]").hide();
      $("[data-show~=go]").show();
      sumSet(todo);
      timer();
      infoOpenIcon.addClass("disable");
    }
  });
  //WHERE: https://stackoverflow.com/questions/8622336/jquery-get-value-of-selected-radio-button

  //CLICK RELOAD
  $("[data-icon=reload]").click(function() {
    location.reload();
    infoOpenIcon.removeClass("disable");
  });
  //WHY: infoOpenIcon enabled on start, disabled on go and enabled on page reload.
  //WHERE: https://stackoverflow.com/questions/5404839/how-can-i-refresh-a-page-with-jquery

  //CLICK NUMBER KEYPAD
  $("[data-keypad=number]").click(function() {
    if (sumTryElement.text().length < 3) {
      const concat = sumTryElement.text() + $(this).val();
      sumTryElement.text(concat);
    }
  });
  //WHY:Text verses val as sumTry is label while data-keypad is an input.

  //CLICK CLEAR NUMBER KEYPAD
  $("[data-keypad=clear]").click(function() {
    sumTryElement.text("");
  });

  //CLICK CHECK
  $("[data-button=sumCheck]").click(function() {
    const sumTry = sumTryElement.text();
    const answer = todoArray[0].key4;
    const count = todoArray[0].count;
    const todo = todoArray;
    const sumAskAnswer = `${todo[0].key1} ${todo[0].key2} ${todo[0].key3} = ${
      todo[0].key4
    }`;
    const warnIcon = $("[data-icon=warn]");
    const sumCheckHide = $("[data-hide~=sumCheck]");
    const incorrectMessageElement = $("[data-message=incorrect]");
    const incorrectShow = $("[data-show~=incorrect]");

    //Step 0: Check Answer - Blank
    if (!sumTry) {
      playAudio(audioIncorrect);
      triggBackground.css("background-image", "url('assets/images/sour.svg')");
      messageElement.text(`blank answer`);
      warnIcon.show();
      console.log(count);
    }

    //Step 1: Check Answer - Correct
    else if (sumCorrect(sumTry, answer) === true) {
      playAudio(audioCorrect);
      triggBackground.css(
        "background-image",
        "url('assets/images/thumbsup.svg')"
      );
      messageElement.text(`click next`);
      sumAskElement.text(`${sumAskAnswer}`).css("color", "#83b186");
      sumCheckHide.hide();
      $("[data-hide~=correct]").hide();
      $("[data-show~=correct]").show();
      sumNextButton.show();
      console.log(count);
    }

    //STEP2: CHECK ANSWER - INCORRECT 1ST ATTEMPT
    else if (count === 0) {
      playAudio(audioIncorrect);
      triggBackground.css("background-image", "url('assets/images/hmm.svg')");
      incorrectMessageElement.text(`${sumTry}`);
      messageElement.text(`try again & check`);
      incorrectShow.show();
      warnIcon.hide();
      sumTryElement.text("");
      console.log(countIncrement(todo)); //just take off log
          }

    //step 3: check answer - incorrect 2nd attempt
    else if (count === 1) {
      playAudio(audioIncorrect);
      triggBackground.css(
        "background-image",
        "url('assets/images/thatway.svg')"
      );
      incorrectMessageElement.text(`${sumTry}`);
      messageElement.text(`revise & click next`);
      sumAskElement.text(`${sumAskAnswer}`).css("color", "#3ea041");
      sumCheckHide.hide();
      incorrectShow.show();
      sumNextButton.show();
      console.log(countIncrement(todo));// just take off log
      todoAdd(todo);
          }

    //step 4: check answer - incorrect 3rd attempt
    else {
      playAudio(audioIncorrect);
      triggBackground.css("background-image", "url('assets/images/oops.svg')");
      incorrectMessageElement.text(`${sumTry}`);
      messageElement.text(`try ${answer} & check`);
      incorrectShow.show();
      sumTryElement.text("");
      console.log(countIncrement(todo));//just take off log
          }
  });

  // CLICK NEXT
  sumNextButton.click(function() {
    const todo = todoArray;
    const revise = reviseArray;
    const progressBar = $("[role=progressbar]");

    //previous sum
    reviseAdd(todo, revise);
    todoRemove(todo);
    $("[data-hide~=sumNext]").hide();
    progressBar.attr(
      "style",
      `width: ${((12 - todoArray.length) / 12) * 100}%`
    );
    progressBar.attr("aria-valuenow", 12 - todo.length);
    console.log(todo);
    console.log(revise);

    //next sum
    if (todo.length !== 0) {
      sumSet(todo);
      triggBackground.css("background-image", "url('assets/images/hi.svg')");
      messageElement.text("try & check");
      $("[data-show~=sumNext]").show();
    }

    //all sums done
    else {
      stopTimer();
      noteFill(revise);
      report();
      playAudio(audioDone);
      triggBackground.css("background-image", "url('assets/images/score.svg')");
      messageElement.text(`well done`);
      $("[data-text=report]").text(
        `Date ${dateShort()}, Time Taken ${timeElement.html()}, Tables ${tableSet}, ${noteString}`
      );
      $("[data-hide~=done]").hide();
      $("[data-show~=done]").show();
    }
  });

  //CLICK DOWNLOAD REPORT
  $("[data-button=download]").click(save);

  return {
    tablesArrayCreate: tablesArrayCreate,
    todoFill: todoFill,
    sumCorrect: sumCorrect,
    countIncrement: countIncrement,
    todoAdd: todoAdd,
    todoRemove: todoRemove,
    reviseAdd: reviseAdd,
    noteFill: noteFill
  };
  //WHY: Creating object of function properties to allow access to inner functions in jasmine testing.
  //WHERE: https://stackoverflow.com/questions/13218472/calling-a-function-defined-inside-another-function-in-javascript
};

$(document).ready(onReady);
//WHY: Code runs when DOM has been loaded.
