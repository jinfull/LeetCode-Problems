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

// optimized O(n)
var maxProfit = function(prices) {
    let minPrice = prices[0];
    let maxProfit = 0;
    
    for (let i = 1; i < prices.length; i++) {
        if (prices[i] < minPrice) {
            minPrice = prices[i];
        } else if (prices[i] - minPrice > maxProfit) {
            maxProfit = prices[i] - minPrice;
        }
    }
    
    return maxProfit;
};