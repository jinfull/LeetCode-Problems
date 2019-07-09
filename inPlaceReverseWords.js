// suboptimal i guess

// function reverseWords(wordsArr) {
// 	let j = wordsArr.length - 1;

// 	for (let i = 0; i < wordsArr.length; i++) {
// 		if (i > j) break;

// 		[wordsArr[i], wordsArr[j]] = [wordsArr[j], wordsArr[i]];

// 		j--;
// 	}

// 	return wordsArr;
// }

function reverseWord(arr) {
  reverseChar(arr, 0, arr.length - 1);
  // console.log(arr);

  let currWordIdx = 0;

  for (let i = 0; i <= arr.length; i++) {
    if (i === arr.length || arr[i] === ' ') {
      reverseChar(arr, currWordIdx, i - 1);
      currWordIdx = i + 1;
    }
  }

  return arr.join('');
}

function reverseChar(arr, leftIdx, rightIdx) {
	while (leftIdx < rightIdx) {
    [arr[leftIdx], arr[rightIdx]] = [arr[rightIdx], arr[leftIdx]]

    leftIdx++;
    rightIdx--;
  }

	return arr
}




const message = [ 'c', 'a', 'k', 'e', ' ',
                'p', 'o', 'u', 'n', 'd', ' ',
                's', 't', 'e', 'a', 'l' ];

reverseChar(message);

// console.log(message);

