var twoSum = function(nums, target) {
    let hash = {};
    
    for (let i = 0; i < nums.length; i++) {
        hash[nums[i]] = i;    
    }
    
    for (let i = 0; i < nums.length; i++) {
        let complement = target - nums[i];
        if (hash[complement] && hash[complement] !== i) return [i, hash[complement]];
    }
    
};


var twoSum = function(nums, target) {
    let myHash = {};
    
    for (let i = 0; i < nums.length; i++) {
        let num = nums[i]
        myHash[num] = i;
    }
    
    for (let i = 0; i < nums.length; i++) {
        let diff = target - nums[i];
        if (myHash[diff]) {
            return [i, myHash[diff]];
        }
    }
};