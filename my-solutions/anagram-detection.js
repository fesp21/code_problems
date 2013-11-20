function f (parentStr, childStr) {
  total_ana = 0;
  parentArr = parentStr.split(""); 
  childArr = childStr.split("").sort();

  numberItr = parentArr.length - childStr.length + 1

  for ( var i = 0; i < numberItr; i++ ) {
    if (parentArr.slice(i, i + childStr.length).sort().join("") == childArr.join("")) {
      total_ana += 1;
    } 
  }

  console.log(total_ana);
};

f('AdnBndAndBdaBn', 'dAn'); // 4
f('AbrAcadAbRa', 'cAda') // 2
