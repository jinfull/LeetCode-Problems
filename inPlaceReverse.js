function inPlaceReverse(charArr) {
	let j = charArr.length - 1;

	for (let i = 0; i < charArr.length; i++) {
		if (i > j) break;

		[charArr[i], charArr[j]] = [charArr[j], charArr[i]];
	    j--;
	}

	return charArr;
}

// O(n) time and O(1) space


// alternative solution using while loop

// function inPlaceReverse(charArr) {
// 	let i = 0;
// 	let j = charArr.length - 1;

// 	while (i < j) {
// 		[charArr[i], charArr[j]] = [charArr[j], charArr[i]];

// 		i++;
// 		j--;
// 	}

//   return charArr;
// }

// inPlaceReverse(['h','e','l','l','o'])


