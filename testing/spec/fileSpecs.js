describe("CREATE TABLES ARRAY", function() {
  describe("Plus", function() {
    let result = tablesArrayCreate(1, "+");

    it("Should create object 1+1", function() {
      expect(result[0]).toEqual({
        id: 1,
        count: 0,
        key1: 1,
        key2: "+",
        key3: 1,
        key4: 2
      });
    });

    it("Array length should equal 12", function() {
      expect(result.length).toEqual(12);
    });
  });

  describe("Minus", function() {
    let result = tablesArrayCreate(2, "-");

    it("Should create object 7-2", function() {
      expect(result[4]).toEqual({
        id: 5,
        count: 0,
        key1: 7,
        key2: "-",
        key3: 2,
        key4: 5
      });
    });

    it("Array length should equal 12", function() {
      expect(result.length).toEqual(12);
    });
  });

  describe("Multiply", function() {
    let result = tablesArrayCreate(11, "x");
    it("Should create object 11x9", function() {
      expect(result[8]).toEqual({
        id: 9,
        count: 0,
        key1: 11,
        key2: "x",
        key3: 9,
        key4: 99
      });
    });

    it("Array length should equal 12", function() {
      expect(result.length).toEqual(12);
    });
  });

  describe("Divide", function() {
    let result = tablesArrayCreate(12, "/");

    it("Should create object 144/12", function() {
      expect(result[11]).toEqual({
        id: 12,
        count: 0,
        key1: 144,
        key2: "÷",
        key3: 12,
        key4: 12
      });
    });

    it("Array length should equal 12", function() {
      expect(result.length).toEqual(12);
    });
  });
});

describe("FILL TODO ARRAY", function() {
  it("Array length should equal 12", function() {
    let result = todoFill(1, "+");
    expect(result.length).toEqual(12);
  });

  it("Array objects are not sequential- IDs", function() {
    let result1 = todoFill(1, "+");
    let result2 = result1.map(function(sum) {
      return sum.id;
    });
    //console.log(result2);
    expect(result2).not.toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
  });

  it("Array object is unchanged- 1+ [6]", function() {
    let result = todoFill(1, "+");
    let result2 = result.filter(function(sum) {
      return sum.id == 6;
    });
    //console.log(result2);
    expect(result2).toEqual([
      {
        id: 6,
        count: 0,
        key1: 1,
        key2: "+",
        key3: 6,
        key4: 7
      }
    ]);
  });
});


describe("CHECK ANSWER CORRECT", function() {
  it("sumTry equals answer- return true", function() {
    let result = sumCorrect(10, 10);
    expect(result).toBe(true);
  });

  it("sumTry does not equal answer- return false", function() {
    let result = sumCorrect(10, 9);
    expect(result).toBe(false);
  });
});


describe("INCREMENT TODO COUNT", function() {
  
    let todo = [{ count: 1 }, { count: 2 }, { count: 3 }];
    let result = countIncrement(todo);

    it("Index 0 should increment by 1", function() {
      expect(result).toEqual(2);
    });

    it("Other indices should be unaffected", function() {
      expect(todo).toEqual([{ count: 2 }, { count: 2 }, { count: 3 }]);
    });
});


describe("REMOVE SUM FROM START TODO", function() {
  
    it("Index 0 gets removed from array", function() {
      let todo = [1, 2, 3];
      let result = todoRemove(todo);
      expect(result).toEqual([2, 3]);
    });
  });


describe("APPEND SUM TO END TODO", function() {
 
    it("Index 0 gets added to end of array", function() {
      let todo = [1, 2, 3];
      let result = todoAdd(todo);
      expect(result).toEqual([1, 2, 3, 1]);
    });
  });


describe("MOVE SUM TO REVISE ARRAY", function() {
  
      it("Index 0 gets added to reviseArray- count:3", function() {
      let todo = [
        { key1: 1, key2: "+", key3: 2, key4: 3, count: 3 },
        { key1: 2, key2: "x", key3: 3, key4: 6, count: 3 }
      ];
      let revise = ["1+1=2"];
      let result = reviseAdd(todo, revise);
      expect(result).toEqual(["1+1=2", "1+2=3"]);
    });

      it("Index 0 gets added to reviseArray- count:4", function() {
      let todo = [
        { key1: 1, key2: "x", key3: 2, key4: 2, count: 4 },
        { key1: 1, key2: "x", key3: 3, key4: 3, count: 4 }
      ];
      let revise = ["1x1=1"];
      let result = reviseAdd(todo, revise);
      expect(result).toEqual(["1x1=1", "1x2=2"]);
    });

      it("Index 0 does not get added to reviseArray- count:2", function() {
      let todo = [
        { key1: 2, key2: "-", key3: 1, key4: 1, count: 2 },
        { key1: 3, key2: "-", key3: 1, key4: 2, count: 2 }
      ];
      let revise = ["1-1=0"];
      let result = reviseAdd(todo, revise);
      console.log(result);
      expect(result).toEqual(["1-1=0"]);
    });
  });


describe("CREATE REVISE STRING 4 CANVAS REPORT", function() {

     it("String shows tables to revise", function() {
      let revise = ["1x1=1", "1x2=2"];
      let result = noteFill(revise);
      expect(result).toEqual("Revise 1x1=1 1x2=2");
    });

     it("String says no tables to revise", function() {
      let revise = [];
      let result = noteFill(revise);
      expect(result).toEqual("No Tables To Revise Well Done!");
    });
  });
