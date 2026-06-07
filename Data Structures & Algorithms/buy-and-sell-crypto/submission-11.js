class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let left = 0,
            right = left + 1,
            maxProfit = 0;

        for (let price of prices) {
            if (prices[right] > prices[left]) {
                let profit = prices[right] - prices[left];

                maxProfit = Math.max(maxProfit, profit);
            } else {
                left = right;
            }
            right ++;
        }
        return maxProfit;
    }
}
