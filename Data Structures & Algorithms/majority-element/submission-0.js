class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let freq = {}

        for ( let num of nums ) {
            if(freq[num]) {
                freq[num] ++;
            } else {
                freq[num] = 1;
            }
        }

        const entries = Object.entries(freq);

        entries.sort((a,b) => b[1] - a[1])

        const top = entries.slice(0,1);

        return Number(top[0][0]);

    }
}
