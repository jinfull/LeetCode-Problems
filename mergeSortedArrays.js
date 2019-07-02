function mergeArrays(arr1, arr2) {
	let merged = [];

	while (arr1.length > 0 || arr2.length > 0) {
		if (arr1[0] > arr2[0]) {
			merged.push(arr2.shift());
			break;
		} else {
			merged.push(arr1.shift());
			break;
		}
	}

	merged = merged.concat(arr1);
	merged = merged.concat(arr2);

	return merged;
}


const myArray = [3, 4, 6, 10, 11, 15];	
const alicesArray = [1, 5, 8, 12, 14, 19];

console.log(mergeArrays(myArray, alicesArray));
