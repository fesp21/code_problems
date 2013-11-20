function f (brk_str) {
  temp_str = brk_str;
  temp_str = temp_str.replace(/{}/g,'');
  temp_str = temp_str.replace(/\(\)/g,'');
  temp_str = temp_str.replace(/\[\]/g,'');

  while ( brk_str.length - temp_str.length > 0 ) {
    brk_str = temp_str;
    temp_str = temp_str.replace(/{}/g,'');
    temp_str = temp_str.replace(/\(\)/g,'');
    temp_str = temp_str.replace(/\[\]/g,'');
  }
  
  if (temp_str.length === 0) {
    console.log('true');
  } else {
    console.log('false');
  }
}

f('()[]{}(([])){[()][]}') // true
f('())[]{}') // false
f('[(])') // false
