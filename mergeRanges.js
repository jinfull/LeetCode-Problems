function mergeRanges(timeRanges) {
	let solution = [];

	for (i = 0; i < timeRanges.length - 1; i++) {
		if (timeRanges[i].startTime < timeRanges[i + 1].startTime) {
			let first = timeRanges[i];
			let second = timeRanges[i + 1];
		} else {
			let first = timeRanges[i + 1];
			let second = timeRanges[i];
		}

		if (first.endTime >= second.startTime) {
			if (first.endTime >= second.)
			solution.push({startTime: first.startTime, endTime: })
		}
	}
}