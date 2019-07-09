// function mergedRanges(arr) {
//   arr.sort(function(a,b) {
//     return a.startTime - b.startTime;
//   })

//   let solution = [];

//   for (let i = 0; i < arr.length - 1; i++) {
//     let first = arr[i];
//     let second = arr[i + 1];

//     console.log(first)
//     console.log(second)
//     console.log(i)
//     console.log('---')

//     if (first.endTime >= second.startTime) {
//       // in this block we merge
//       if (first.endTime > second.endTime) {
//         solution.push(first);
//       } else {
//         solution.push({startTime: first.startTime, endTime: second.endTime});
//       }

//       i++;
//       continue;
//     } else if (first.endTime === second.startTime) {
//       solution.push(first);
//     } else {
//       solution.push(first);
//     }
//   }

//   return solution;
// }


// does not work as a solution 
// last element does not ever get looked at
// brute force needs to be o(n^2) comparing every element to every other element

// working solution:

function mergedRanges(arr) {
// sort array so merged times will be adjacent
  arr.sort(function(a,b) {
    return a.startTime - b.startTime;
  })

// initialize solution array with first element of arr
  let solution = [arr[0]];

// iterate through starting from the i = 1 index 
  for (let i = 1; i < arr.length; i++) {
    const currMeeting = arr[i];
// prevMeeting set to be the last added to the array
    const prevMeeting = solution[solution.length - 1];
// if the last meeting time begins after the current meetings start time
    if (prevMeeting.endTime >= currMeeting.startTime) {
// change the prevMeeting end time to be wahtever is greater, the prevMeeting end time or the currMeeting endtime
      prevMeeting.endTime = Math.max(prevMeeting.endTime, currMeeting.endTime);
// otherwise push the currMeeting onto the solution arr (i.e.: no overlap between last meeting and current meeting)
    } else {
      solution.push(currMeeting);
    }
  }

  return solution;
}


// O(nlogn) time
// O(n) space


function mergeRanges(meetings) {
  meetings.sort(function(a, b) {
    return a.startTime - b.startTime;
  })
  
  let result = [meetings[0]];
  
  for (let i = 1; i < meetings.length; i++) {
    let currMeeting = meetings[i];
    let prevMeeting = result[result.length - 1];
    
    if (prevMeeting.endTime >= currMeeting.startTime) {
      if (prevMeeting.endTime < currMeeting.endTime) {
        prevMeeting.endTime = currMeeting.endTime;
      }
    } else {
      result.push(currMeeting);
    }
  }
  
  return result;
}