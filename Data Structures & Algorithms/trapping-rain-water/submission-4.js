class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {
        let res = 0;

        if (!height || height.length === 0) return res;

        let left = 0;
        let leftMax = height[left];
        let right = height.length - 1;
        let rightMax = height[right];

        while (left < right) {
            if (leftMax < rightMax) {
                left ++;
                leftMax = Math.max(leftMax, height[left]);

                res = res + leftMax - height[left];
            } else {
                right --;
                rightMax = Math.max(rightMax, height[right]);

                res = res + rightMax - height[right];
            }
        }

        return res;

    }
}
