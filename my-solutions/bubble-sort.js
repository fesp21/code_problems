function bubble_sort(arr) {
  var sorted = true;

  while (sorted === true) {
    sorted = false
    for ( var i = 0; i < arr.length; i++ ) {
      if ( arr[i] > arr[i + 1] ) {
        sorted = true;
        temp_num = arr[i + 1];
        arr[i + 1] = arr[i];
        arr[i] = temp_num;
      }
    } 
  }   

  console.log(arr);
}

bubble_sort([9,23,567,1,4,3,4,5]);
