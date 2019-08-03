$(document).ready(function() {
  console.log("test");

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

  //WHY: Images preloaded to fix bug on iOS where....
  //WHERE: https://www.thonky.com/javascript-and-css-guide/javascript-image-preload

  //PRELOAD AUDIO
  const audioCorrect = new Audio();
  audioCorrect.src = "assets/audio/correct.mp3";

  const audioIncorrect = new Audio();
  audioIncorrect.src = "assets/audio/incorrectCat.mp3";

  const audioDone = new Audio();
  audioDone.src = "assets/audio/done.mp3";
  //WHERE: https://freesound.org/people/adriann/sounds/191718/ incorrect not using
  //https://bigsoundbank.com/detail-0494-little-meow-of-a-cat.html incorrect cat
  //https://freesound.org/people/Wagna/sounds/242207/ done
  //need correct sound source

  //POINT TO DOM ELEMENTS
  const sumAskElement = $("[data-sum=ask]");
  const sumTryElement = $("[data-sum=try]");
  const timeElement = $(".time");
  const triggBackground = $("[data-bg=trigg]");
  const sumNextButton = $("[data-button=sumNext]");
  const messageElement = $("[data-message=all]");
  const infoOpenIcon = $("[data-icon=infoOpen]");
  //WHY: DOM elements used across functions.

  //GLOBAL VARIABLES
  let sound = true;
  let tableSet;
  let todoArray = [];
  let reviseArray = [];
  let noteString;

  //STOP ENTER KEY FROM REFRESHING PAGE
  $(document).on("keypress", function(e) {
    if (e.which == 13) {
      event.preventDefault();
    }
  });
  //WHERE:https://stackoverflow.com/questions/8866053/stop-reloading-page-with-enter-key

  //SOUND ON OFF
  $("[data-icon=sound]").click(function() {
    if (sound === true) {
      $(this)
        .removeClass("fa-volume-mute")
        .addClass("fa-volume-up"); //can I use font awesome classes here?
      sound = false;
      console.log(sound);
    } else {
      $(this)
        .removeClass("fa-volume-up")
        .addClass("fa-volume-mute");
      sound = true;
      console.log(sound);
    }
  });

  //PLAY AUDIO
  function playAudio(audio) {
    if (sound === true) {
      audio.play();
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
  //tableSet used in report. operator not used /

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
    sumTryElement.val("");
    sumAskElement
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
    timeElement.text(`${minutes}:${seconds}`); //update text every second
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
  function sumCorrect(sumTry, answer) {
    if (sumTry == answer) {
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
    $("iframe").attr("src", "https://www.youtube.com/embed/EcVam72tyyw");
  });
  //WHERE: https://stackoverflow.com/questions/2128535/stop-a-youtube-video-with-jquery
  //WHY: Resetting src for video to stop it playing when press close buton data-info=close click.

  //CLICK NUMBER OR OPERATOR - APPLY SELECT STYLE & HIDE WARN ICON
  $("fieldset")
    .children("label")
    .click(function() {
      $(this)
        .siblings()
        .removeClass("button-style--selected");
      $(this)
        .siblings("i")
        .hide();
      $(this).addClass("button-style--selected");
    });

  //CLICK GO
  $("[data-button=go]").click(function() {
    let no = parseInt($("input[name='pickNo']:checked").val());
    let operator = $("input[name='pickOp']:checked").val();

    if (!no) {
      $("[data-icon=missingNo]").show();
    }

    if (!operator) {
      $("[data-icon=missingOp]").show();
    }

    if (no && operator) {
      let todo = todoFill(no, operator);
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
  //WHERE: https://stackoverflow.com/questions/5404839/how-can-i-refresh-a-page-with-jquery
  //WHY: infoOpenIcon enabled on start, disabled on go and enabled on page reload.

  //CLICK NUMBER KEYPAD
  $("[data-keypad=number]").click(function() {
    if (sumTryElement.val().length < 3) {
      let concat = sumTryElement.val() + $(this).val();
      sumTryElement.val(concat);
    }
  });
  //WHY: maxLength in CSS not working if using keypad so need extra js.

  //CLICK CLEAR NUMBER KEYPAD
  $("[data-keypad=clear]").click(function() {
    sumTryElement.val("");
  });

  //CLICK CHECK
  $("[data-button=sumCheck]").click(function() {
    let sumTry = sumTryElement.val();
    let answer = todoArray[0].key4;
    let count = todoArray[0].count;
    let todo = todoArray;
    let sumAskAnswer = `${todo[0].key1} ${todo[0].key2} ${todo[0].key3} = ${
      todo[0].key4
    }`;
    const incorrectMessageElement = $("[data-message=incorrect]"); //declared here as only used in this function

    console.log(todoArray[0].count + "start count");

    //STEP0: CHECK ANSWER - ENTERED
    if (!sumTry) {
      playAudio(audioIncorrect);
      triggBackground.css("background-image", "url('assets/images/sour.svg')");
      messageElement.text(`empty answer`);
      $("[data-show=warn]").show();
    }

    //STEP1: CHECK ANSWER - CORRECT
    else if (sumCorrect(sumTry, answer) === true) {
      playAudio(audioCorrect);
      triggBackground.css("background-image", "url('assets/images/thumbsup.svg')");
      messageElement.text(`click next`);
      sumAskElement.text(`${sumAskAnswer}`).css("color", "#83b186");
      $("[data-hide~=sumCheck]").hide(); //sumTry input, sumCheck button & triangle(xs-s & m-l)
      $("[data-hide~=correct]").hide(); //from attempt 4
      $("[data-show~=correct]").show();
      sumNextButton.show();
    }

    //STEP2: CHECK ANSWER - INCORRECT 1ST ATTEMPT
    else if (count === 0) {
      playAudio(audioIncorrect);
      triggBackground.css("background-image", "url('assets/images/hmm.svg')");
      incorrectMessageElement.text(`${sumTry}`);
      messageElement.text(`try again & check`);
      $("[data-show~=incorrect]").show(); //thumbs down & incorrect span
      sumTryElement.val("");
      countIncrement(todo);
    }

    //STEP3: CHECK ANSWER - INCORRECT 2ND ATTEMPT
    else if (count === 1) {
      playAudio(audioIncorrect);
      triggBackground.css("background-image", "url('assets/images/thatway.svg')");
      incorrectMessageElement.text(`${sumTry}`);
      messageElement.text(`revise & click next`);
      sumAskElement.text(`${sumAskAnswer}`).css("color", "#3ea041");
      $("[data-hide~=sumCheck]").hide(); //sumTRy input, sumCheck button & triangle(xs-s & m-l)
      $("[data-show~=incorrect]").show(); //thumbs down & incorrect span
      sumNextButton.show();
      countIncrement(todo);
      todoAdd(todo);
    }

    //STEP4: CHECK ANSWER - INCORRECT 3RD ATTEMPT
    else {
      playAudio(audioIncorrect);
      triggBackground.css("background-image", "url('assets/images/oops.svg')");
      incorrectMessageElement.text(`${sumTry}`);
      messageElement.text(`try ${answer} & check`);
      $("[data-show~=incorrect]").show(); //thumbs down & incorrect span
      sumTryElement.val("");
      countIncrement(todo);
    }
  });

  // CLICK NEXT
  sumNextButton.click(function() {
    let todo = todoArray;
    let revise = reviseArray;
    const progressBar = $("[role=progressbar]"); //only used in this function

    //last sum
    progressBar.attr(
      "style",
      `width: ${((12 - todoArray.length) / 12) * 100}%`
    );
    progressBar.attr("aria-valuenow", 12 - todo.length);
    reviseAdd(todo, revise);
    todoRemove(todo);
    $("[data-hide~=sumNext]").hide();

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
      $("[data-hide~=done]").hide();
      $("[data-show~=done]").show();
    }
  });

  //CLICK DOWNLOAD REPORT
  $("[data-button=download]").click(save);
}); // end of get document
