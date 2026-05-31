class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let freq = {}

        for( let num of nums ) {
            if(!freq[num]) {
                freq[num] = 0;
            }

            freq[num] ++;

            if(freq[num] > nums.length / 2) return num
        }
    }
}
