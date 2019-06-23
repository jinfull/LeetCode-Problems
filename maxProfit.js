// https://leetcode.com/problems/best-time-to-buy-and-sell-stock/submissions/


// brute force O(n^2)
var maxProfit = function(prices) {
    let maxProfit = 0;
    for (let i = 0; i < prices.length - 1; i++) {
        for (let j = i + 1; j < prices.length; j++) {
            let potentialProfit = prices[j] - prices[i]
            if (potentialProfit > maxProfit) {
                maxProfit = potentialProfit;
            }
        }
    }
    
    return maxProfit;
};