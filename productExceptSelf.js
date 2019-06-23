// https://leetcode.com/problems/product-of-array-except-self/submissions/

// There's an initial type of brute force solution at O(n ** 2) looking something like this:

for (let i = 0; i < num.length; i++) {
    let product = 1;
    for (let j = 0; j < num.lnegth; j++) {
        if (j === 1) continue;
        product *= num[j];
    }

    solution[i] = product;
}

// division solution:
// loop through once to find the product.
// initialize an empty array
// loop through it dividing that product by originalArr[i]
// this will result in your solutions array productExceptSelf
// won't work with 0's in the array :(

var productExceptSelf = function(nums) {
    let product = 1;
    let solution = [];

    for (let i = 0; i < nums.length; i++) {
        product *= nums[i];
    }

    for (let i = 0; i < nums.lengt; i++) {
        solution[i] = product / nums[i];
    }

    return solution;
}



// optimized O(n) time, O(n) space
var productExceptSelf = function(nums) {
    let solution = [];
    let left = [];
    let right = [];
    
    // initialize first element of left (no elements left of i = 0) to be 1
    left[0] = 1;
    // similarly, no elements to the right of the nums.last, so that's gonna be 1
    right[nums.length - 1] = 1;
    

    // setting up the "left" array of all products to the left 
    for (let i = 1; i < nums.length; i++) {
        left[i] = nums[i - 1] * left[i - 1];
    }
    
    // setting up the "right" array of all products on the right
    for (let j = nums.length - 2; j >= 0; j--) {
        right[j] = nums[j + 1] * right[j + 1];
    }


    // setting up the solutions array multiplying left and right    
    for (let k = 0; k < nums.length; k++) {
        solution.push(left[k] * right[k]);
    }
        
    return solution;
};


// optimized O(n) time, O(1) space
// involves using just one "left" array as both your left, right, AND solutions array

var productExceptSelf = function(nums) {
    let solution = []

    solution[0] = 1;    

    for (let i = 1; i < nums.length; i++) {
        solution[i] = nums[i - 1] * solution[i - 1];
    }


    let right = 1;
    
    for (let j = nums.length - 1; j >= 0; j--) {
        solution[j] *= right;
        right *= nums[j]
    }

    return solution;
}

// OR

var productExceptSelf = function(nums) {
    let solution = []

    solution[0] = 1;    

    for (let i = 1; i < nums.length; i++) {
        solution[i] = nums[i - 1] * solution[i - 1];
    }


    let right = 1;
    
    for (let j = nums.length - 1; j >= 0; j--) {
        solution[j] = solution[j] * right;
        right *= nums[j]
    }

    return solution;
}