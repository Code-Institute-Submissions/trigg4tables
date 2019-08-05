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

//FILL TODO ARRAY
function todoFill(no, operator) {
  let tables = tablesArrayCreate(no, operator);
  todoArray = tables.slice().sort(function(a, b) {
    return 0.5 - Math.random();
  });
  return todoArray;
}

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
  //console.log(todo[0].count);
  return todo[0].count;
}

//REMOVE SUM FROM START TODO
function todoRemove(todo) {
  todo.shift();
  return todo;
}

//APPEND SUM TO END TODO
function todoAdd(todo) {
  todo.push(todo[0]);
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