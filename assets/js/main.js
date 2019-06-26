console.log('test');

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
console.log(myArray2);

