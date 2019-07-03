// https://leetcode.com/problems/reverse-integer/


// brute force - has O(n) time but really 3n
function reverseInteger(num) {
	let strNum = num.toString().split('').reverse();

	console.log(strNum);

	while (strNum[0] === '0') {
		strNum.shift();
	}

	if (num < 0) return (-1 * parseInt(strNum.join('')));

	return parseInt(strNum.join(''));
}

// optimized by modulo

var reverse = function(x) {
    if (x === 0) return 0;

    let myStr = '';
    let isNeg = false;
    let myNum;
    
    if (x < 0) {
        isNeg = true;
        x *= -1;
    }
    
    while (x > 0) {
        myStr += (x % 10);     
        x = Math.floor(x / 10);
    }
    
    if (isNeg) {
        myNum = parseInt('-' + myStr);
    } else {
        myNum = parseInt(myStr);
    }
    
    if (myNum < -(2 ** 31) || myNum > ((2 ** 31) - 1)) {
        return 0;
    } else {
        return myNum;
    }
};