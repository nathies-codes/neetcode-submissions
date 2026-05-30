class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let left = 0;
        let right = left + 1;

        let maxProfit = 0;

        for(let i = 0; i < prices.length-1; i++) {
            if(prices[right] > prices[left]) {
                let profit = prices[right] - prices[left];

                maxProfit = Math.max(maxProfit, profit);
            } else {
                left = right
            }
            right ++
        }
        return maxProfit;
    }
}
