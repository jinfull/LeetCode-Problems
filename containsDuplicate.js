// https://leetcode.com/problems/contains-duplicate/solution/

// hashtable/set O(n)
var containsDuplicate = function(nums) {
    let set = new Set();
    for (let i = 0; i < nums.length; i++) {
        if (set.has(nums[i])) return true
        else set.add(nums[i])
    }
    
    return false;
};

// there is also a sorting solution O(nlog(n)) time but O(1) space
// sorts array (which is nlogn time)
// in sorted array duplicates will be consecutive elements.
// loop through and compare conesecutive elements for equality, returning early if true