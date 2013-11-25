function f (str1, str2, str3) {
  arr1 = str1.split('');
  arr2 = str2.split('');
  arr3 = str3.split('');
  
  for (var i = 0; i < arr1.length; i++) {
    arr3.splice(arr3.indexOf(arr1[i]), 1);
  }

  if (arr3.join('') === arr2.join('')) {
    console.log('true');
  } else {
    console.log('false');
  }

}

f("abc", "def", "dabecf");
