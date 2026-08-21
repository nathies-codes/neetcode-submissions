class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {

        let res = new Array(temperatures.length).fill(0);

        let stack = [];

        for (let i = 0; i < temperatures.length; i++) {

            let t = temperatures[i];

            while (stack.length > 0 && t > stack[stack.length - 1][0]) {
                let popped = stack.pop();

                let startIndex = popped[1];

                res[startIndex] = i - startIndex;
            }

            stack.push([t, i]);
        }

        return res;
    }
}
