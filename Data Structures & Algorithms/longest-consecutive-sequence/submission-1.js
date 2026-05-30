class Solution {
    /**
     * @param {number[]} nums
     * @return {number}
     */
    longestConsecutive(nums) {

        let numsSet = new Set(nums);

        let longest = 0;

        for (let num of nums) {

            if( !numsSet.has(num - 1) ) {
                let len = 1;

                while (numsSet.has(num + len)) {
                    len ++;
                }
                
                longest = Math.max(longest, len);
            }

        }
        return longest;
    }
}
