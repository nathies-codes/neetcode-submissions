class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {

        let res = [];

        let left = 0;
        let right = numbers.length - 1;

        while (left < right) {
            let twoSum = numbers[left] + numbers[right];

            if (twoSum > target) {
                right --;
            } else if (twoSum < target) {
                left ++;
            } else {
                res.push(left+1, right+ 1);
                return res;
            }
        }
 
        return res;
    }
}
