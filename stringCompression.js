function stringCompression (str) {
  let output = '';
  let count = 0;
  for (var i = 0; i < str.length; i++) {
    count++;
    if (str[i] != str[i+1]) {
      output += str[i] + count;
      count = 0;
    }
  }
  return output;
}






function stringCompression(str) {
  let newStr = str[0];
  let count = 1;

  for (let i = 1; i < str.length + 1; i++) {
    console.log(i);
    if (i === str.length) {
      newStr += count;
    } else if (str[i] !== newStr[newStr.length - 1]) {
      newStr += count;
      newStr += str[i];
      count = 1;
    } else {
      count++;
    }
  }

  return newStr;
}