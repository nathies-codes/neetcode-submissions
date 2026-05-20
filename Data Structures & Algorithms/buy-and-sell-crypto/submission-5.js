class Solution {
    /**
     * @param {number[]} prices
     * @return {number}
     */
    maxProfit(prices) {
        let l = 0;
        let r = 1;

        let maxProfit = 0;

        for ( let i = 0; i < prices.length; i ++ ) {
            if( prices[r] > prices[l]) {
                let profit = prices[r] - prices[l];

                maxProfit = Math.max( maxProfit, profit);
            } else {
                l = r;
            }
            r ++;
        }
    return maxProfit;
    }
}
