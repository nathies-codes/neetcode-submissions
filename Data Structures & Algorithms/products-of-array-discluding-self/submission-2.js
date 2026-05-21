class Solution {
    /**
     * @param {number[]} nums
     * @return {number[]}
     */
    productExceptSelf(nums) {
        let prd = new Array().fill(1);

        let left = 1;
        for( let i = 0; i < nums.length; i ++ ) {
            prd[i] = left;
            left = left * nums[i];
        }

        let right = 1;
        for( let i = nums.length - 1; i >= 0 ; i -- ) {
            prd[i] = prd[i] * right;
            right = right * nums[i];
        }
        return prd;  
    }   
}
