class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let count = 0,
            candidate = null;

        for (let num of nums) {
            if (count === 0) {
                candidate = num;
            }

            if (candidate !== num) {
                count--;
            } else {
                count++;
            }
        }

        return candidate;
    }
}
