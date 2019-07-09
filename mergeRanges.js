function mergedRanges(arr) {
  arr.sort(function(a,b) {
    return a.startTime - b.startTime;
  })

  let solution = [];

  for (let i = 0; i < arr.length - 1; i++) {
    let first = arr[i];
    let second = arr[i + 1];

    console.log(first)
    console.log(second)
    console.log(i)
    console.log('---')

    if (first.endTime >= second.startTime) {
      // in this block we merge
      if (first.endTime > second.endTime) {
        solution.push(first);
      } else {
        solution.push({startTime: first.startTime, endTime: second.endTime});
      }

      i++;
      continue;
    } else if (first.endTime === second.startTime) {
      solution.push(first);
    } else {
      solution.push(first);
    }
  }

  return solution;
}
