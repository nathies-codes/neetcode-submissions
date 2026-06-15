class Solution {
    /**
     * @param {number[]} height
     * @return {number}
     */
    trap(height) {

        if(!height || height.length === 0) return 0;

        let trap = 0;

        let left = 0, right = height.length - 1;
        let leftMax = height[left], rightMax = height[right];

        while (left < right) {
            if (leftMax < rightMax) {
                left ++;

                leftMax = Math.max(leftMax, height[left]);

                trap = trap + leftMax - height[left];
            } else {
                right --;

                rightMax = Math.max(rightMax, height[right]);
                
                trap = trap + rightMax - height[right];
            }
        }
        return trap;
    }
}
