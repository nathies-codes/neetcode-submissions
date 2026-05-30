class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    getConcatenation(nums) {
        let len = nums.length;

        let ans = new Array( len * 2 );

        for (let i = 0; i < nums.length; i ++) {
            ans[i] = ans[i + len] = nums[i];
        }

        return ans;
    }
}
