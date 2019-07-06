function bSearch(arr, target) {
	if (arr.length === 0) return null;
	const mid = Math.floor(arr.length / 2);

	if (arr[mid] === target) {
		return mid;
	} else if (arr[mid] > target) {
		return bSearch(arr.slice(0, mid), target);
	} else {
		const result = bSearch(arr.slice(mid + 1, this.length), target);
		if (!result) {
			return result;
		} else {
			return mid + 1 + result;
		}
	}
}