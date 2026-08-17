class Solution {
    /**
     * @param {number[]} heights
     * @return {number}
     */
    largestRectangleArea(heights) {

        let maxArea = 0;

        let stack = [];

        for (let i = 0; i < heights.length; i++) {

            let startPosition = i;

            while (stack.length > 0 && stack[stack.length - 1][1] > heights[i]) {

                let [index, height] = stack.pop();

                maxArea = Math.max(maxArea, height * (i - index) );

                startPosition = index;
            }

            stack.push([startPosition, heights[i]])
        }


        for (let [index, height] of stack) {

            maxArea = Math.max(maxArea, height * (heights.length - index));
        }
 
        return maxArea;
    }
}
