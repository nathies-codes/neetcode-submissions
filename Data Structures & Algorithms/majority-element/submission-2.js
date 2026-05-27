class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let freq = {};

        for (let num of nums) {
            if(freq[num]) {
                freq[num] ++;
            } else {
                freq[num] = 1
            }
        }

        let entries = Object.entries(freq);

        entries.sort((a,b) => b[1] - a[1]);
        
        return Number(entries[0][0]);
    }
}
