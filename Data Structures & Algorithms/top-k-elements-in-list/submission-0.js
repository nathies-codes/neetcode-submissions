class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let freq = {}

        for ( let num of nums ) {
            if(freq[num]) {
                freq[num] ++;
            } else {
                freq[num] = 1;
            }
        }

        const entries = Object.entries(freq);

        entries.sort((a,b) => b[1] - a[1]);

        let ktop = entries.slice(0,k);

        return ktop.map(item => Number(item[0]));
    }
}
