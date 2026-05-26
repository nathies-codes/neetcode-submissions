class Solution {
    /**
     * @param {number[]} nums
     * @param {number} k
     * @return {number[]}
     */
    topKFrequent(nums, k) {
        let freq = {};

        for (let num of nums) {
            if(freq[num]) {
                freq[num] ++
            } else {
                freq[num] = 1;
            }
        }

        //make it an array
        let entries = Object.entries(freq);

        //sort is desc with frequency
        entries.sort((a,b) => b[1] - a[1]);

        //slice the top k entries
        let topK = entries.slice(0, k);

        //extract only the number part of the entire element
        return topK.map(item => Number(item[0]));
    }
}
