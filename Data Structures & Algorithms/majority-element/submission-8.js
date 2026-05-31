class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let freq = {}

        for( let num of nums ) {
            freq[num] = (freq[num] || 0) + 1;

            if(freq[num] > nums.length / 2) return num
        }
    }
}
