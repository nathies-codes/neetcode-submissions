class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let maxProfit = 0,
            left = 0,
            right = left + 1;

        while (right < prices.length) {

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
