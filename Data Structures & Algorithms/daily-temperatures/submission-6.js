class Solution {
    /**
     * @param {number[]} temperatures
     * @return {number[]}
     */
    dailyTemperatures(temperatures) {
        let res = new Array(temperatures.length).fill(0);

        const stack = [];

        for (let i = 0; i < temperatures.length; i++) {
            let t = temperatures[i];

            while (stack.length > 0 && t > stack[stack.length - 1][0]) {
                
                const popped = stack.pop();
                const stackIndex = popped[1];

                res[stackIndex] = i - stackIndex;

            }
            
            stack.push([t, i]);
        }



        return res;
    }
}
