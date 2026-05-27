class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prod = new Array(nums.length).fill(1);

        let left = 1, right = 1;

        for(let i = 0; i < nums.length; i ++) {
            prod[i] = left;
            left = left * nums[i];
        }

        for(let r = nums.length - 1; r >= 0; r --) {
            prod[r] = prod[r] * right;
            right = right * nums[r];
        } 

        return prod;
    }
}
