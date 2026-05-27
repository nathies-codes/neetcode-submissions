class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    majorityElement(nums) {
        let res = 0, count = 0;

        for (let num of nums) {
            if (count === 0) {
                res = num;
            }

            if(res === num) {
                count = count + 1;
            } else {
                count = count - 1;
            }
        }

        return res;
    }

}
