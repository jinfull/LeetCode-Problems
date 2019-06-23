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