function hasPalindromePermutation(theString) {
  let hash = {};
  let oddCount = 0;

  for (let i = 0; i < theString.length; i++) {
    if (hash[theString[i]]) hash[theString[i]]++;
    else hash[theString[i]] = 1;
  }

  console.log(Object.values(hash))
  let myCountsArr = Object.values(hash)

  for (let i = 0; i < myCountsArr.length; i++) {
    if (myCountsArr[i] % 2) {
      oddCount++;
    } 
    
    if (oddCount > 1) { return false }
  }

  return true;
}

