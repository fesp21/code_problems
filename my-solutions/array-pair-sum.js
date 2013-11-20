function f (k, intArr) {
  retArr = [];
  for (var i = 0; i < intArr.length - 1;  i++) {
    for (var j = 0; j < intArr.length - 1; j++) {
      if ((j > i) && (intArr[i] + intArr[j] === k)) {
        retArr.push([intArr[i], intArr[j]]);
      }
    }
  }

  console.log(retArr);
};

f(10, [3, 4, 5, 6, 7]); // [ [6, 4], [7, 3] ]
