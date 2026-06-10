class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    maxArea(heights) {
        let maxArea = 0;

        let left = 0, right = heights.length-1;

        while(left < right) {
            const area = (right - left) * Math.min(heights[left], heights[right]);

            maxArea = Math.max(maxArea, area);

            if(heights[left] < heights[right]) {
                left ++;
            } else {
                right --;
            }
        }

        return maxArea;
    }
}
