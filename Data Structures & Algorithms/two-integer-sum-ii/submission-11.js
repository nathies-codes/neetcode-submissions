class Solution {
    /**
     * @param {number[]} numbers
     * @param {number} target
     * @return {number[]}
     */
    twoSum(numbers, target) {
        let left = 0;
        let right = numbers.length - 1;

        while (right < numbers.length) {
            let twoSum = numbers[left] + numbers[right];

            if (twoSum > target) {
                right --;
            } else if (twoSum < target) {
                left ++
            } else {
                return ([left + 1, right + 1])
            }
        }

        return ([]);
    }
}
 